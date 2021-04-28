import { getCustomRepository } from "typeorm";
import { ProcesosIproviderRepository } from "../repository/ProcesosIproviderRepository";
import { ProcesosIprovider } from "../entity/ProcesosIprovider";
import { v4 as uuidv4 } from "uuid";

export class ProcesosIproviderService {
  repository = getCustomRepository(ProcesosIproviderRepository);

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

  async create(bean: ProcesosIprovider) {
    try {
      //bean.idProcesosIprovider = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: ProcesosIprovider) {
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
