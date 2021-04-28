import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../framework/IControllerBase.interface";
import { getCustomRepository } from "typeorm";

import { FileattachedlicitacionRepository } from "../repository/FileattachedlicitacionRepository";
import { FileattachedlicitacionService } from "../service/FileattachedlicitacionService";
import { Fileattachedlicitacion } from "../entity/Fileattachedlicitacion";

class FileattachedlicitacionRest implements IControllerBase {
    public service = new FileattachedlicitacionService();
    public repository = getCustomRepository(FileattachedlicitacionRepository);
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/Fileattachedlicitacion/findall", this.findall);
        this.router.post("/Fileattachedlicitacion/find", this.find);
        this.router.post("/Fileattachedlicitacion/create", this.create);
        this.router.post("/Fileattachedlicitacion/save", this.save);
        this.router.delete("/Fileattachedlicitacion/delete", this.delete);
    }

    findall = async (req: Request, res: Response) => {
        try {
            var result = await this.service.findall();
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    find = async (req: Request, res: Response) => {
        try {
            var body: any = req.body;
            var result = await this.service.find(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            var body: Fileattachedlicitacion = req.body;
            var result = await this.service.create(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    save = async (req: Request, res: Response) => {
        try {
            var body: Fileattachedlicitacion = req.body;
            var result = await this.service.save(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            var body: any = req.body;
            var result = await this.service.delete(body.id);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };
}

export default FileattachedlicitacionRest;
