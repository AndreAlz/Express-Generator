import { getCustomRepository } from "typeorm";
import { TypeofsupplierRepository } from "../repository/TypeofsupplierRepository";
import { Typeofsupplier } from "../entity/Typeofsupplier";
import { v4 as uuidv4 } from "uuid";

export class TypeofsupplierService {
  repository = getCustomRepository(TypeofsupplierRepository);

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

  async create(bean: Typeofsupplier) {
    try {
      //bean.idtypeofsupplier = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Typeofsupplier) {
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
