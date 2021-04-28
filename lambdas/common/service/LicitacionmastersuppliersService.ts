import { getCustomRepository } from "typeorm";
import { LicitacionmastersuppliersRepository } from "../repository/LicitacionmastersuppliersRepository";
import { Licitacionmastersuppliers } from "../entity/Licitacionmastersuppliers";
import { v4 as uuidv4 } from "uuid";

export class LicitacionmastersuppliersService {
  repository = getCustomRepository(LicitacionmastersuppliersRepository);

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

  async create(bean: Licitacionmastersuppliers) {
    try {
      //bean.invitationid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Licitacionmastersuppliers) {
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
