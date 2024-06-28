import express from 'express';
import { PORT } from './config';
import userRoutes from './routes/users.routes';

const app = express();

app.use(userRoutes);

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);