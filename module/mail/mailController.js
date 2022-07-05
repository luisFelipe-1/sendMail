import { validate } from "../../helpers/functions.js";
import { mailLogic } from "./logic/mailLogic.js";

const index = (req, res) => {

  const rules = ['host', 'user', 'pass', 'port'];
  const body = req.body;

  if (!validate(rules, body)) {
    res.status(404)
       .json({'mensaje': 'Hacen falta algunos campos'}); 
  } 

  const mail = new mailLogic(body.host, body.user, body.pass, body.port, body.to, body.subject, body.message);

  mail.prepare();  
  mail.send((err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('ID: ',info.messageId);
      console.log('Accepted: ', info.accepted);
      console.log('Rejected: ', info.rejected);
    }
  }); 

  res.json({'mensaje': 'Petición procesada correctamente, si existe algún fallo no se podrá saber porque el email es enviado en asíncrono'}); 
} 

export {
  index
}