import { Request, Response } from "express";
import { Jelban } from "jelban.js";

const jelban = new Jelban();

export const signupController = (req: Request, res: Response) => {
  const emailAddress = req.body.emailAddress;
  try {
    console.log(req.body);

    jelban.isValid(emailAddress);
    return res.json({ status: 200, answer: `Welcome to ${emailAddress}` });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ status: 400, answer: "Bad email address" });
  }
};
