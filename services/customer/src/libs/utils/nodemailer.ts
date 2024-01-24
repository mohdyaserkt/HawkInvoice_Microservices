import nodemailer from "nodemailer";
import emailTemplate from "./emailTemplate"
export const sentMail = (email: string, subject: string,Link:string) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
  let details = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: subject,
    html: emailTemplate(Link),

  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log(err);
        
        throw new Error('The user was not found');
    } else {
      console.log("success");
      
    }
  });

  return details.to
};
