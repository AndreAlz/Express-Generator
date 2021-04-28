import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../framework/IControllerBase.interface";
import { getCustomRepository } from "typeorm";

import { LicitacionmasterhistoryRepository } from "../repository/LicitacionmasterhistoryRepository";
import { LicitacionmasterhistoryService } from "../service/LicitacionmasterhistoryService";
import { Licitacionmasterhistory } from "../entity/Licitacionmasterhistory";

class LicitacionmasterhistoryRest implements IControllerBase {
    public service = new LicitacionmasterhistoryService();
    public repository = getCustomRepository(LicitacionmasterhistoryRepository);
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/Licitacionmasterhistory/findall", this.findall);
        this.router.post("/Licitacionmasterhistory/find", this.find);
        this.router.post("/Licitacionmasterhistory/create", this.create);
        this.router.post("/Licitacionmasterhistory/save", this.save);
        this.router.delete("/Licitacionmasterhistory/delete", this.delete);
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
            var body: Licitacionmasterhistory = req.body;
            var result = await this.service.create(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    save = async (req: Request, res: Response) => {
        try {
            var body: Licitacionmasterhistory = req.body;
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

export default LicitacionmasterhistoryRest;
