import { getCustomRepository } from "typeorm";
import { UploadresponseRepository } from "../repository/UploadresponseRepository";
import { Uploadresponse } from "../entity/Uploadresponse";
import { v4 as uuidv4 } from "uuid";

export class UploadresponseService {
  repository = getCustomRepository(UploadresponseRepository);

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

  async create(bean: Uploadresponse) {
    try {
      //bean.idupload = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Uploadresponse) {
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
