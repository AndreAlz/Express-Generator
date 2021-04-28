import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../framework/IControllerBase.interface";
import { getCustomRepository } from "typeorm";

import { CotizacionmasterdetailRepository } from "../repository/CotizacionmasterdetailRepository";
import { CotizacionmasterdetailService } from "../service/CotizacionmasterdetailService";
import { Cotizacionmasterdetail } from "../entity/Cotizacionmasterdetail";

class CotizacionmasterdetailRest implements IControllerBase {
    public service = new CotizacionmasterdetailService();
    public repository = getCustomRepository(CotizacionmasterdetailRepository);
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/Cotizacionmasterdetail/findall", this.findall);
        this.router.post("/Cotizacionmasterdetail/find", this.find);
        this.router.post("/Cotizacionmasterdetail/create", this.create);
        this.router.post("/Cotizacionmasterdetail/save", this.save);
        this.router.delete("/Cotizacionmasterdetail/delete", this.delete);
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
            var body: Cotizacionmasterdetail = req.body;
            var result = await this.service.create(body);
            return res.status(200).json({ data: result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    };

    save = async (req: Request, res: Response) => {
        try {
            var body: Cotizacionmasterdetail = req.body;
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

export default CotizacionmasterdetailRest;
