import { Request, Response } from "express";
import { GmailProvider } from "jelban.js";

export const gmailController = (req: Request, res: Response) => {
  const emailAddress = req.body.emailAddress;
  const normalizedAddress = GmailProvider.getNormalizedAddress(emailAddress);

  return res.json({
    status: 200,
    answer: `I got "${emailAddress}", you get ${normalizedAddress}`,
  });
};
