import {runDb} from "./config/db";
import {app} from "./app";
import { WebSocketServer, WebSocket } from 'ws';
import {createServer} from "http";
const port = process.env.PORT || 3000;

const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

export const broadcast = (data: any) => {
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};

const startApp = async (): Promise<void> => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp();
