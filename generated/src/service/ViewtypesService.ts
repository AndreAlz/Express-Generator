import { getCustomRepository } from "typeorm";
import { ViewtypesRepository } from "../repository/ViewtypesRepository";
import { Viewtypes } from "../entity/Viewtypes";
import { v4 as uuidv4 } from "uuid";

export class ViewtypesService {
  repository = getCustomRepository(ViewtypesRepository);

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

  async create(bean: Viewtypes) {
    try {
      //bean.viewtypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Viewtypes) {
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
