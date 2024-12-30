import { UserRepository } from "../repository/UserRepository";
import { User } from "../entity/User";

export class UserService {
    async getAllUsers(): Promise<User[]> {
        return await UserRepository.find();
    }

    async getUserById(id: number): Promise<User | null> {
        return await UserRepository.findOneBy({ id });
    }

    async createUser(user: Partial<User>): Promise<User> {
        return await UserRepository.save(user);
    }

    async updateUser(id: number, user: Partial<User>): Promise<User | null> {
        const existingUser = await UserRepository.findOneBy({ id });
        if (!existingUser) return null;

        const updatedUser = { ...existingUser, ...user };
        return await UserRepository.save(updatedUser);
    }

    async deleteUser(id: number): Promise<boolean> {
        const result = await UserRepository.delete(id);
        return result.affected !== 0;
    }
}
