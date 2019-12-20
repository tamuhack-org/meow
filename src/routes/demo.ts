import {Request, Response} from 'express';

const DEVPOST_LINK = 'https://howdyhack2019.devpost.com';

export const demoRoute = async (req: Request, res: Response) => {
  res.redirect(DEVPOST_LINK);
};
