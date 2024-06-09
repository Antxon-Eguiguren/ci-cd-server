import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', async (_, res) => {
  res.json({ message: 'Hola Mundo from server!' });
});

app.listen(3300, () => {
  console.log('server running on localhost:3300');
});
