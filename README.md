# API para el envío de emails
Una pequeña API para el envío de emails con tus propias credenciales SMTP bajo la URL `/mail` con el método `GET`, La API hace uso del módulo `Nodemailer`.

### Ejemplo de como hacer una petición 
```
{
   "host": "host.com",
   "user": "test@host.com",
   "pass": "holahola_24",
   "port": 465,
   "to": "example@gmail.com",
   "subject": "Email de prueba",
   "message": "Hola, este es un email de prueba"
}
```
*Todas las claves son requeridas


