import { getCustomRepository } from "typeorm";
import { SociedadRepository } from "../repository/SociedadRepository";
import { Sociedad } from "../entity/Sociedad";
import { v4 as uuidv4 } from "uuid";

export class SociedadService {
  repository = getCustomRepository(SociedadRepository);

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

  async create(bean: Sociedad) {
    try {
      //bean.idSociedad = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Sociedad) {
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
