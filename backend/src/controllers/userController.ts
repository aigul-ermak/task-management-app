import {UserService} from "../services/userService";
import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import {UserModel} from "../models/user";
import { v4 as uuid } from 'uuid';


const generateToken = (user: any) => {
    return jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};


export class UserController  {

    constructor(protected userService: UserService) {}

    async getUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await this.userService.getUser(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500);
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500);
        }
    }

    async registerUser(req: Request, res: Response) {
        const { login, email, password } = req.body;
        try {
            const userExists = await this.userService.getUserByEmail(email);
            if (userExists) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const user = new UserModel({
                accountData: {
                    login,
                    email,
                    passwordHash: password,
                    createdAt: new Date()
                },
                emailConfirmation: {
                    confirmationCode: uuid(),
                    isConfirmed: false
                }
            });
            await user.save();
            const token = user.generateToken();
            res.status(201).json({ token });
        } catch (error) {
            res.status(500);
        }
    }

    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                return res.sendStatus(400).json({ message: 'Invalid email or password' });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.sendStatus(400).json({ message: 'Invalid email or password' });
            }
            const token = user.generateToken();
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500);
        }
    }

    async logoutUser(req: Request, res: Response) {
        try {
            res.clearCookie('token');
            res.status(200);
        } catch (error) {
            res.status(500);
        }
    }
}