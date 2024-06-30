import { User } from "../db/models/User.model";
export class UserService {
    async register(name, email) {
        return await User.create({ name, email });
    }
    async authenticate(email) {
        return await User.findOne({ where: { email } });
    }
}
//# sourceMappingURL=user.service.js.map