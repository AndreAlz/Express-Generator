import { getCustomRepository } from "typeorm";
import { CotizacionmasterdetailRepository } from "../repository/CotizacionmasterdetailRepository";
import { Cotizacionmasterdetail } from "../entity/Cotizacionmasterdetail";
import { v4 as uuidv4 } from "uuid";

export class CotizacionmasterdetailService {
  repository = getCustomRepository(CotizacionmasterdetailRepository);

  async findall() {
    try {
      return await this.repository.find();
    } catch (e) {
      throw e;
    }
  }

  async find(filter: any) {
    try {
      return await this.repository.find(filter);
    } catch (e) {
      throw e;
    }
  }

  async create(bean: Cotizacionmasterdetail) {
    try {
      //bean.cotizaciondetailid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Cotizacionmasterdetail) {
    try {
      bean.fechaModificacion = new Date();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async delete(id: string) {
    try {
      return await this.repository.delete(id);
    } catch (e) {
      throw e;
    }
  }
}
