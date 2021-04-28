import { getCustomRepository } from "typeorm";
import { SurveytemplatesRepository } from "../repository/SurveytemplatesRepository";
import { Surveytemplates } from "../entity/Surveytemplates";
import { v4 as uuidv4 } from "uuid";

export class SurveytemplatesService {
  repository = getCustomRepository(SurveytemplatesRepository);

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

  async create(bean: Surveytemplates) {
    try {
      //bean.surveytemplateid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Surveytemplates) {
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
