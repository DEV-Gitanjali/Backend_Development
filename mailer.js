// import nodemailer

const nodemailer = require('nodemailer');
// 2 configure email and send it 

async function sendMail(){
  // 1 create an email transporter.
// SMTP(Simple mail Transfer Protocol)
  const  transporter = nodemailer.createTransport(
    {
      service:'gmail',
      auth:{
      user:'jgitanjali592@gmail.com',
      pass:'nmau pxtw hnon shbc'
      }
      
    },
  )

  // 2. configure email content
  const mailOptions = {
    from:'jgitanjali592@gmail.com',
    to:'pradhansubham147@gmail.com',
    subject:'Sending Email using Node.js',
    text:'That was easy'
  }

  // send the email
  try{
     const result = await transporter.sendMail(mailOptions);
     console.log('Email sent successfully')

  }

  catch(err){
    console.log("Email send failed with error :" +  err);
  }
}

sendMail();

