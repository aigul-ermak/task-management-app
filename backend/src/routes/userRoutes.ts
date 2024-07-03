import {Router} from "express";
import {userController} from "../composition-root";

export const userRoutes: Router = Router({})

userRoutes.get('/user/:id', userController.getUser.bind(userController));
userRoutes.get('/users', userController.getUsers.bind(userController));
userRoutes.post('/registration', userController.registerUser.bind(userController));
userRoutes.post('/login', userController.loginUser.bind(userController));
userRoutes.post('/logout', userController.logoutUser.bind(userController));