import { getCustomRepository } from "typeorm";
import { InvoicetypesRepository } from "../repository/InvoicetypesRepository";
import { Invoicetypes } from "../entity/Invoicetypes";
import { v4 as uuidv4 } from "uuid";

export class InvoicetypesService {
  repository = getCustomRepository(InvoicetypesRepository);

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

  async create(bean: Invoicetypes) {
    try {
      //bean.invoicetypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Invoicetypes) {
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
