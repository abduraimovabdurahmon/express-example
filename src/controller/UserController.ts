import { Router, Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
    public router = Router();
    private userService = new UserService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/users", this.getAllUsers.bind(this));
        this.router.get("/users/:id", this.getUserById.bind(this));
        this.router.post("/users", this.createUser.bind(this));
        this.router.put("/users/:id", this.updateUser.bind(this));
        this.router.delete("/users/:id", this.deleteUser.bind(this));
    }

    private async getAllUsers(req: Request, res: Response) {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    private async getUserById(req: Request, res: Response) {
        const user = await this.userService.getUserById(+req.params.id);
        user ? res.json(user) : res.status(404).send("User not found");
    }

    private async createUser(req: Request, res: Response) {
        const user = await this.userService.createUser(req.body);
        res.status(201).json(user);
    }

    private async updateUser(req: Request, res: Response) {
        const user = await this.userService.updateUser(+req.params.id, req.body);
        user ? res.json(user) : res.status(404).send("User not found");
    }

    private async deleteUser(req: Request, res: Response) {
        const success = await this.userService.deleteUser(+req.params.id);
        success ? res.sendStatus(204) : res.status(404).send("User not found");
    }
}
