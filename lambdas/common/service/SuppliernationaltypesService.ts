import { getCustomRepository } from "typeorm";
import { SuppliernationaltypesRepository } from "../repository/SuppliernationaltypesRepository";
import { Suppliernationaltypes } from "../entity/Suppliernationaltypes";
import { v4 as uuidv4 } from "uuid";

export class SuppliernationaltypesService {
  repository = getCustomRepository(SuppliernationaltypesRepository);

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

  async create(bean: Suppliernationaltypes) {
    try {
      //bean.suppliernationaltypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Suppliernationaltypes) {
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
