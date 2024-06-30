import { User } from "../db/models/User.model";

export class UserService {
    async register(name: string, email: string): Promise<User> {
        return await User.create({ name, email });
    }

    async authenticate(email: string): Promise<User | null> {
        return await User.findOne({ where: { email } });
    }
}
