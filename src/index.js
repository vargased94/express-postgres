import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);