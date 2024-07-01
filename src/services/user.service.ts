import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserService {
    async register(name: string, email: string): Promise<User> {
        return await prisma.user.create({
            data: { name, email },
        });
    }

    async authenticate(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { email },
        });
    }

    async getUserCheckCount(userId: string): Promise<number> {
        return await prisma.checkbox.count({
            where: { userId, checked: true },
        });
    }
}
