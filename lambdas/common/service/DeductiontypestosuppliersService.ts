import { getCustomRepository } from "typeorm";
import { DeductiontypestosuppliersRepository } from "../repository/DeductiontypestosuppliersRepository";
import { Deductiontypestosuppliers } from "../entity/Deductiontypestosuppliers";
import { v4 as uuidv4 } from "uuid";

export class DeductiontypestosuppliersService {
  repository = getCustomRepository(DeductiontypestosuppliersRepository);

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

  async create(bean: Deductiontypestosuppliers) {
    try {
      //bean.deductiontypestosuppliersid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Deductiontypestosuppliers) {
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
