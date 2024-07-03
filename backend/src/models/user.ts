import mongoose, {Document, Schema} from 'mongoose';
import {UserType} from "../types/userType";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IUser extends Document, UserType {
    comparePassword: (password: string) => Promise<boolean>;
    generateToken: () => string;
    confirmEmail: () => void;
}


const userSchema = new mongoose.Schema<IUser>({
    accountData: {
        login: {type: String, required: true},
        email: {type: String, required: true},
        passwordHash: {type: String, required: true},
        createdAt: {type: Date, required: true}
    },
    emailConfirmation: {
        confirmationCode: {type: String, required: false},
        isConfirmed: {type: Boolean, required: true}
    }
});

userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('accountData.passwordHash')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.accountData.passwordHash = await bcrypt.hash(this.accountData.passwordHash, salt);
    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.accountData.passwordHash);
};


userSchema.methods.generateToken = function (): string {
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET!, {expiresIn: '1h'});
};


userSchema.methods.confirmEmail = function (): void {
    this.emailConfirmation.isConfirmed = true;
    this.emailConfirmation.confirmationCode = '';
};

export const UserModel = mongoose.model('User', userSchema);