import { getCustomRepository } from "typeorm";
import { SpecialrolesRepository } from "../repository/SpecialrolesRepository";
import { Specialroles } from "../entity/Specialroles";
import { v4 as uuidv4 } from "uuid";

export class SpecialrolesService {
  repository = getCustomRepository(SpecialrolesRepository);

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

  async create(bean: Specialroles) {
    try {
      //bean.specialroleid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Specialroles) {
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
