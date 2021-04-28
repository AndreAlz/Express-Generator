import { getCustomRepository } from "typeorm";
import { FormaltreatmentsRepository } from "../repository/FormaltreatmentsRepository";
import { Formaltreatments } from "../entity/Formaltreatments";
import { v4 as uuidv4 } from "uuid";

export class FormaltreatmentsService {
  repository = getCustomRepository(FormaltreatmentsRepository);

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

  async create(bean: Formaltreatments) {
    try {
      //bean.formaltreatmentid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Formaltreatments) {
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
