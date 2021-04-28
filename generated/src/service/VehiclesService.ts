import { getCustomRepository } from "typeorm";
import { VehiclesRepository } from "../repository/VehiclesRepository";
import { Vehicles } from "../entity/Vehicles";
import { v4 as uuidv4 } from "uuid";

export class VehiclesService {
  repository = getCustomRepository(VehiclesRepository);

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

  async create(bean: Vehicles) {
    try {
      //bean.vehicleid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Vehicles) {
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
