import express from 'express';
import { PORT } from './config.js';
import Routes from './routes/index.routes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(Routes);

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);