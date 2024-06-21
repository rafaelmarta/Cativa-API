import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'
import { initDb } from './db/db.js'

const app = express();
const port = process.env.PORT || 8080;

initDb();

app.use(cors())

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});