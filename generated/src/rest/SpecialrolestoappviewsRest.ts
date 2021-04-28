import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../framework/IControllerBase.interface";
import { getCustomRepository } from "typeorm";

import { SpecialrolestoappviewsRepository } from "../repository/SpecialrolestoappviewsRepository";
import { SpecialrolestoappviewsService } from "../service/SpecialrolestoappviewsService";
import { Specialrolestoappviews } from "../entity/Specialrolestoappviews";

class SpecialrolestoappviewsRest implements IControllerBase {
    public service = new SpecialrolestoappviewsService();
    public repository = getCustomRepository(SpecialrolestoappviewsRepository);
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/Specialrolestoappviews/findall", this.findall);
        this.router.post("/Specialrolestoappviews/find", this.find);
        this.router.post("/Specialrolestoappviews/create", this.create);
        this.router.post("/Specialrolestoappviews/save", this.save);
        this.router.delete("/Specialrolestoappviews/delete", this.delete);
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
            var body: Specialrolestoappviews = req.body;
            var result = await this.service.create(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    save = async (req: Request, res: Response) => {
        try {
            var body: Specialrolestoappviews = req.body;
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

export default SpecialrolestoappviewsRest;
