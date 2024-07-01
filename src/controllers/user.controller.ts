/** @format */

import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const registerUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { name, email } = req.body;
    try {
        const newUser = await userService.register(name, email);
        res.status(201).json(newUser);
    } catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
};

export const authenticateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { email } = req.body;
    try {
        const user = await userService.authenticate(email);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
};
