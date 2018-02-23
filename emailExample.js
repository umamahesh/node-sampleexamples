var nodemailer = require("nodemailer");


var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
		user: "exampleemail",
		pass: "password"
    }
};
var transporter = nodemailer.createTransport(smtpConfig);


var mailOptions = {
  from: 'mahesh.seeram@w-b-solutions.com',
  to: 'umamaheshvarma@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

