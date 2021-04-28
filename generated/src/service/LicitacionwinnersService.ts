import { getCustomRepository } from "typeorm";
import { LicitacionwinnersRepository } from "../repository/LicitacionwinnersRepository";
import { Licitacionwinners } from "../entity/Licitacionwinners";
import { v4 as uuidv4 } from "uuid";

export class LicitacionwinnersService {
  repository = getCustomRepository(LicitacionwinnersRepository);

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

  async create(bean: Licitacionwinners) {
    try {
      //bean.licitacionwinnerid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Licitacionwinners) {
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
