import { getCustomRepository } from "typeorm";
import { TreasurygroupsRepository } from "../repository/TreasurygroupsRepository";
import { Treasurygroups } from "../entity/Treasurygroups";
import { v4 as uuidv4 } from "uuid";

export class TreasurygroupsService {
  repository = getCustomRepository(TreasurygroupsRepository);

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

  async create(bean: Treasurygroups) {
    try {
      //bean.treasurygroupid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Treasurygroups) {
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
