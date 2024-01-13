import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Sesuaikan dengan origin React Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));


// const app = express();
// app.use(cors());
app.use(express.json());
app.use(UserRoute);
const HOST = 'znk.h.filess.io';
const PORT = 3307;

app.listen(PORT, ()=> 
console.log(`API running at... ${HOST}:${PORT}!`));