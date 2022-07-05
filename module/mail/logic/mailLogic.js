import { createTransport } from "nodemailer";
 
class mailLogic {

  constructor (host, user, pass, port, to, subject, message) {
    this.host = host;
    this.port = port;
    this.portSecure = port == 465 ? true : false;
    this.user = user;
    this.pass = pass;
    this.to = to;
    this.subject = subject;
    this.message = message;
    this.transporter;
  }

  prepare() {
    this.transporter = createTransport({
      host: this.host,
      port: this.port,
      secure: this.portSecure, // true for 465, false for other ports
      auth: {
        user: this.user, // generated ethereal user
        pass: this.pass, // generated ethereal password
      },
      tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
      },
    });
  } 

  prepareInfo() {
    console.log(this.transporter);
  }

  async send(callback) {
    let info = await this.transporter.sendMail({
      from: this.user, // sender address
      to: this.to, // list of receivers
      subject: this.subject, // Subject line
      text: this.message, // plain text body
      html: this.message, // html body
    }, callback);
  }

} 

export {
  mailLogic
}