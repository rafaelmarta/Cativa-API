import express from 'express'
import { db } from '../db/db.js'

const router = express.Router();

router.get('/agencies', (req, res) => {
  const query = 'SELECT * FROM agencies';
  const agencies = db.prepare(query).all();
  res.json({agencies: agencies})
})

router.get('/agency/:id', (req, res) => {
  const query = 'SELECT * FROM agencies WHERE id = ?';
  const agency = db.prepare(query).get(req.params.id);
  res.json({ agency: agency })
})

router.post('/agency', (req, res) => {
  console.log('body', req.body)
  const query = 'INSERT INTO agencies (agency, email, phone) VALUES (?, ?, ?)';
  const statement = db.prepare(query);

  try {
    statement.run(req.body.agency, req.body.email, req.body.phone);
    res.status(201).send('Agência cadastrada com sucesso.')
  } catch(error) {
    console.error(error.message)
  }
});

export default router;