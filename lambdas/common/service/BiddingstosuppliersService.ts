import { getCustomRepository } from "typeorm";
import { BiddingstosuppliersRepository } from "../repository/BiddingstosuppliersRepository";
import { Biddingstosuppliers } from "../entity/Biddingstosuppliers";
import { v4 as uuidv4 } from "uuid";

export class BiddingstosuppliersService {
  repository = getCustomRepository(BiddingstosuppliersRepository);

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

  async create(bean: Biddingstosuppliers) {
    try {
      //bean.biddingstosuppliersid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Biddingstosuppliers) {
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
