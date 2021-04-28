import { getCustomRepository } from "typeorm";
import { AddressesRepository } from "../repository/AddressesRepository";
import { Addresses } from "../entity/Addresses";
import { v4 as uuidv4 } from "uuid";

export class AddressesService {
  repository = getCustomRepository(AddressesRepository);

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

  async create(bean: Addresses) {
    try {
      //bean.addressid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Addresses) {
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
