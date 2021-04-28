import { getCustomRepository } from "typeorm";
import { GrupoEconomicoRepository } from "../repository/GrupoEconomicoRepository";
import { GrupoEconomico } from "../entity/GrupoEconomico";
import { v4 as uuidv4 } from "uuid";

export class GrupoEconomicoService {
  repository = getCustomRepository(GrupoEconomicoRepository);

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

  async create(bean: GrupoEconomico) {
    try {
      //bean.idGrupoEconomico = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: GrupoEconomico) {
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
