import { getCustomRepository } from "typeorm";
import { ComprobantessunatRepository } from "../repository/ComprobantessunatRepository";
import { Comprobantessunat } from "../entity/Comprobantessunat";
import { v4 as uuidv4 } from "uuid";

export class ComprobantessunatService {
  repository = getCustomRepository(ComprobantessunatRepository);

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

  async create(bean: Comprobantessunat) {
    try {
      //bean.idregistro = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Comprobantessunat) {
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
