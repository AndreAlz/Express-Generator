import { getCustomRepository } from "typeorm";
import { TempnifRepository } from "../repository/TempnifRepository";
import { Tempnif } from "../entity/Tempnif";
import { v4 as uuidv4 } from "uuid";

export class TempnifService {
  repository = getCustomRepository(TempnifRepository);

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

  async create(bean: Tempnif) {
    try {
      //bean.tempnifid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Tempnif) {
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
