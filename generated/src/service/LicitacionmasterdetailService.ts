import { getCustomRepository } from "typeorm";
import { LicitacionmasterdetailRepository } from "../repository/LicitacionmasterdetailRepository";
import { Licitacionmasterdetail } from "../entity/Licitacionmasterdetail";
import { v4 as uuidv4 } from "uuid";

export class LicitacionmasterdetailService {
  repository = getCustomRepository(LicitacionmasterdetailRepository);

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

  async create(bean: Licitacionmasterdetail) {
    try {
      //bean.licitaciondetailid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Licitacionmasterdetail) {
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
