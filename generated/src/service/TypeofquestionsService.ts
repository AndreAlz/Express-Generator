import { getCustomRepository } from "typeorm";
import { TypeofquestionsRepository } from "../repository/TypeofquestionsRepository";
import { Typeofquestions } from "../entity/Typeofquestions";
import { v4 as uuidv4 } from "uuid";

export class TypeofquestionsService {
  repository = getCustomRepository(TypeofquestionsRepository);

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

  async create(bean: Typeofquestions) {
    try {
      //bean.idtypeofquestion = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Typeofquestions) {
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
