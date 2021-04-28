import { getCustomRepository } from "typeorm";
import { FileattachedRepository } from "../repository/FileattachedRepository";
import { Fileattached } from "../entity/Fileattached";
import { v4 as uuidv4 } from "uuid";

export class FileattachedService {
  repository = getCustomRepository(FileattachedRepository);

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

  async create(bean: Fileattached) {
    try {
      //bean.fileattachedid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Fileattached) {
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
