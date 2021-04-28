import { getCustomRepository } from "typeorm";
import { PermissiontypesRepository } from "../repository/PermissiontypesRepository";
import { Permissiontypes } from "../entity/Permissiontypes";
import { v4 as uuidv4 } from "uuid";

export class PermissiontypesService {
  repository = getCustomRepository(PermissiontypesRepository);

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

  async create(bean: Permissiontypes) {
    try {
      //bean.permissiontypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Permissiontypes) {
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
