import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:3001', // Sesuaikan dengan origin React Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(express.json());
app.use(UserRoute);
// const HOST = 'znk.h.filess.io';
const PORT = 5000;

app.listen(PORT, ()=> 
console.log("Server up and running"));
// console.log(`API running at... ${HOST}:${PORT}!`));

export default app;
// export default app;