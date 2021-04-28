import { getCustomRepository } from "typeorm";
import { ApppermissionsRepository } from "../repository/ApppermissionsRepository";
import { Apppermissions } from "../entity/Apppermissions";
import { v4 as uuidv4 } from "uuid";

export class ApppermissionsService {
  repository = getCustomRepository(ApppermissionsRepository);

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

  async create(bean: Apppermissions) {
    try {
      //bean.permissionid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Apppermissions) {
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
