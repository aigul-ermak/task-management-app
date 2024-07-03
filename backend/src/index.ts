import {runDb} from "./config/db";
import {app} from "./app";

const port = process.env.PORT || 3000;

const startApp = async (): Promise<void> => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp();
