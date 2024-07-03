import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {userRoutes} from "../routes/userRoutes";
import {taskRoutes} from "../routes/taskRoutes";
import {projectRoutes} from "../routes/projectRoutes";

export const configApp = () => {
    const app = express();

    const corsOptions = {
        origin: 'http://localhost:3001',
        credentials: true, // This is necessary for allowing cookies
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(express.json());

    app.use('/users', userRoutes);
    app.use('/tasks', taskRoutes);
    app.use('/projects', projectRoutes);

    return app;
};