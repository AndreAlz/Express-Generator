import { getCustomRepository } from "typeorm";
import { SuppliersRepository } from "../repository/SuppliersRepository";
import { Suppliers } from "../entity/Suppliers";
import { v4 as uuidv4 } from "uuid";

export class SuppliersService {
  repository = getCustomRepository(SuppliersRepository);

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

  async create(bean: Suppliers) {
    try {
      //bean.supplierid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Suppliers) {
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
