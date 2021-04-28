import { getCustomRepository } from "typeorm";
import { TypeofsurveyRepository } from "../repository/TypeofsurveyRepository";
import { Typeofsurvey } from "../entity/Typeofsurvey";
import { v4 as uuidv4 } from "uuid";

export class TypeofsurveyService {
  repository = getCustomRepository(TypeofsurveyRepository);

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

  async create(bean: Typeofsurvey) {
    try {
      //bean.typeofsurveyid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Typeofsurvey) {
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
