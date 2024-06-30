import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export const register = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const user = await userService.register(name, email);
    res.status(201).json(user);
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ error: error.message });
  }
};

export const authenticate = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await userService.authenticate(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid email' });
    }
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ error: error.message });
  }
};
