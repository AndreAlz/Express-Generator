import { getCustomRepository } from "typeorm";
import { FileattachedlicitacionRepository } from "../repository/FileattachedlicitacionRepository";
import { Fileattachedlicitacion } from "../entity/Fileattachedlicitacion";
import { v4 as uuidv4 } from "uuid";

export class FileattachedlicitacionService {
  repository = getCustomRepository(FileattachedlicitacionRepository);

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

  async create(bean: Fileattachedlicitacion) {
    try {
      //bean.fileattachedlicitacionid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Fileattachedlicitacion) {
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
