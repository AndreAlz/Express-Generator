import { getCustomRepository } from "typeorm";
import { MasterusersRepository } from "../repository/MasterusersRepository";
import { Masterusers } from "../entity/Masterusers";
import { v4 as uuidv4 } from "uuid";

export class MasterusersService {
  repository = getCustomRepository(MasterusersRepository);

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

  async create(bean: Masterusers) {
    try {
      //bean.userid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Masterusers) {
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
