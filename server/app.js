import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import homeRoutes from './Routes/home.routes.js';
import userRouter from './Routes/user.routes.js';
config();
const app=express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/',homeRoutes);
app.use("/api/users",userRouter)

export default app;



