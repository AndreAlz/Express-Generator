import { getCustomRepository } from "typeorm";
import { SuppliersspecialRepository } from "../repository/SuppliersspecialRepository";
import { Suppliersspecial } from "../entity/Suppliersspecial";
import { v4 as uuidv4 } from "uuid";

export class SuppliersspecialService {
  repository = getCustomRepository(SuppliersspecialRepository);

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

  async create(bean: Suppliersspecial) {
    try {
      //bean.suppliersspecialid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Suppliersspecial) {
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
