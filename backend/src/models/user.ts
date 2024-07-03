import mongoose from 'mongoose';
import {UserType} from "../types/userType";


const userSchema = new mongoose.Schema<UserType>({
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

export const UserModel = mongoose.model('User', userSchema);