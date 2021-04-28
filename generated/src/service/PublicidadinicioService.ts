import { getCustomRepository } from "typeorm";
import { PublicidadinicioRepository } from "../repository/PublicidadinicioRepository";
import { Publicidadinicio } from "../entity/Publicidadinicio";
import { v4 as uuidv4 } from "uuid";

export class PublicidadinicioService {
  repository = getCustomRepository(PublicidadinicioRepository);

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

  async create(bean: Publicidadinicio) {
    try {
      //bean.idregistro = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Publicidadinicio) {
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
