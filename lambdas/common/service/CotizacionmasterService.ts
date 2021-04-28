import { getCustomRepository } from "typeorm";
import { CotizacionmasterRepository } from "../repository/CotizacionmasterRepository";
import { Cotizacionmaster } from "../entity/Cotizacionmaster";
import { v4 as uuidv4 } from "uuid";

export class CotizacionmasterService {
  repository = getCustomRepository(CotizacionmasterRepository);

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

  async create(bean: Cotizacionmaster) {
    try {
      //bean.cotizacionid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Cotizacionmaster) {
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
