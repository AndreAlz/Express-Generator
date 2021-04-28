import { getCustomRepository } from "typeorm";
import { AuditsRepository } from "../repository/AuditsRepository";
import { Audits } from "../entity/Audits";
import { v4 as uuidv4 } from "uuid";

export class AuditsService {
  repository = getCustomRepository(AuditsRepository);

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

  async create(bean: Audits) {
    try {
      //bean.auditid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Audits) {
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
