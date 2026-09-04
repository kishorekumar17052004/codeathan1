import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Security & utility middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// API Routes
app.use('/api', routes);

// Root Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Codeathon Backend API',
    docs: '/api/health',
  });
});

// Handling undefined routes & errors
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
