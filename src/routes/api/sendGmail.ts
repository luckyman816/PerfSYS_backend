import express, { Router, Request, Response } from "express";
import User from "../../models/User";
import auth from "../../middleware/auth";
import nodemailer from "nodemailer";

const router: Router = express.Router();

interface AuthRequest extends Request {
  user?: {
    _id: string;
    role: string;
    status: string;
  };
}

router.post("/send", async (req: AuthRequest, res: Response) => {
  
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "smart163410@gmail.com",
      pass: "yaulgpldsmdnbilc",
    },
  });
  mailTransporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
  });
  let mailDetails = {
    from: "smart163410@gmail.com",
    to: "zhangyunpei816@gmail.com",
    subject: "Test mail",
    text: "Invite my performance system website(url: https://perf-sys-frontend.vercel.app/)",
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
});

export default router;
