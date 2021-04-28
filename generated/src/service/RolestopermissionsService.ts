import { getCustomRepository } from "typeorm";
import { RolestopermissionsRepository } from "../repository/RolestopermissionsRepository";
import { Rolestopermissions } from "../entity/Rolestopermissions";
import { v4 as uuidv4 } from "uuid";

export class RolestopermissionsService {
  repository = getCustomRepository(RolestopermissionsRepository);

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

  async create(bean: Rolestopermissions) {
    try {
      //bean.rolestopermissionsid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Rolestopermissions) {
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
