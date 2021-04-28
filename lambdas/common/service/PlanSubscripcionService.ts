import { getCustomRepository } from "typeorm";
import { PlanSubscripcionRepository } from "../repository/PlanSubscripcionRepository";
import { PlanSubscripcion } from "../entity/PlanSubscripcion";
import { v4 as uuidv4 } from "uuid";

export class PlanSubscripcionService {
  repository = getCustomRepository(PlanSubscripcionRepository);

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

  async create(bean: PlanSubscripcion) {
    try {
      //bean.idPlanSubscripcion = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: PlanSubscripcion) {
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
