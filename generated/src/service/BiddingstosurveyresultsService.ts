import { getCustomRepository } from "typeorm";
import { BiddingstosurveyresultsRepository } from "../repository/BiddingstosurveyresultsRepository";
import { Biddingstosurveyresults } from "../entity/Biddingstosurveyresults";
import { v4 as uuidv4 } from "uuid";

export class BiddingstosurveyresultsService {
  repository = getCustomRepository(BiddingstosurveyresultsRepository);

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

  async create(bean: Biddingstosurveyresults) {
    try {
      //bean.idresult = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Biddingstosurveyresults) {
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
