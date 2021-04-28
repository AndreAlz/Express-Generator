import { getCustomRepository } from "typeorm";
import { LinkmigocomprobanteRepository } from "../repository/LinkmigocomprobanteRepository";
import { Linkmigocomprobante } from "../entity/Linkmigocomprobante";
import { v4 as uuidv4 } from "uuid";

export class LinkmigocomprobanteService {
  repository = getCustomRepository(LinkmigocomprobanteRepository);

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

  async create(bean: Linkmigocomprobante) {
    try {
      //bean.idregistro = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Linkmigocomprobante) {
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
