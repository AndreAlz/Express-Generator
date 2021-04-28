import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../framework/IControllerBase.interface";
import { getCustomRepository } from "typeorm";

import { BiddingstosurveyresultsRepository } from "../repository/BiddingstosurveyresultsRepository";
import { BiddingstosurveyresultsService } from "../service/BiddingstosurveyresultsService";
import { Biddingstosurveyresults } from "../entity/Biddingstosurveyresults";

class BiddingstosurveyresultsRest implements IControllerBase {
    public service = new BiddingstosurveyresultsService();
    public repository = getCustomRepository(BiddingstosurveyresultsRepository);
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/Biddingstosurveyresults/findall", this.findall);
        this.router.post("/Biddingstosurveyresults/find", this.find);
        this.router.post("/Biddingstosurveyresults/create", this.create);
        this.router.post("/Biddingstosurveyresults/save", this.save);
        this.router.delete("/Biddingstosurveyresults/delete", this.delete);
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
            var body: Biddingstosurveyresults = req.body;
            var result = await this.service.create(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    save = async (req: Request, res: Response) => {
        try {
            var body: Biddingstosurveyresults = req.body;
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

export default BiddingstosurveyresultsRest;
