import express from 'express';
import cors from "cors";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.listen(8080, () => {console.log(`http://localhost:8080`)})