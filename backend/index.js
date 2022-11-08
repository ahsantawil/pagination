import express from 'express';
import cors from 'cors';

import UserRoute from './routes/UserRoutes.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => console.log(`Server running on ${port}`));