console.log('hello from routes');
const nodemailer = require("nodemailer");


module.exports = app => {
    app.post('/send', (req, res) => {
      console.log("data recieved");
      console.log(res);
        const output = `
          <p>You have a new contact request</p>
          <h3>Contact Details</h3>
          <ul>  
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>
        `;
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          // service: 'gmail',
          auth: {
              user: 'nricaldi.nr@gmail.com', // generated ethereal user
              pass: 'skxpvesbhlzhbnnl'
          },
          tls:{
            rejectUnauthorized:false
          }
        });
      
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Porfolio Contact" <nricaldi.nr@gmail.com>', // sender address
            to: 'nr.ricaldi@gmail.com', // list of receivers
            subject: `${req.body.company} contact request`, // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };
      
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
            res.render('contact', {msg:'Email has been sent'});
        });
    });
}