import { getCustomRepository } from "typeorm";
import { SysdiagramsRepository } from "../repository/SysdiagramsRepository";
import { Sysdiagrams } from "../entity/Sysdiagrams";
import { v4 as uuidv4 } from "uuid";

export class SysdiagramsService {
  repository = getCustomRepository(SysdiagramsRepository);

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

  async create(bean: Sysdiagrams) {
    try {
      //bean.diagramId = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Sysdiagrams) {
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
