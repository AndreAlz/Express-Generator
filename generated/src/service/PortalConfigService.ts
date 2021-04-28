import { getCustomRepository } from "typeorm";
import { PortalConfigRepository } from "../repository/PortalConfigRepository";
import { PortalConfig } from "../entity/PortalConfig";
import { v4 as uuidv4 } from "uuid";

export class PortalConfigService {
  repository = getCustomRepository(PortalConfigRepository);

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

  async create(bean: PortalConfig) {
    try {
      //bean.idPortalConfig = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: PortalConfig) {
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
