import express from 'express';
const app = express()
const port = 3000

import mail from './module/mail/mailRoute.js';

app.use(express.json());

app.use('/mail', mail);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})