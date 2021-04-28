import { getCustomRepository } from "typeorm";
import { UserstorolesRepository } from "../repository/UserstorolesRepository";
import { Userstoroles } from "../entity/Userstoroles";
import { v4 as uuidv4 } from "uuid";

export class UserstorolesService {
  repository = getCustomRepository(UserstorolesRepository);

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

  async create(bean: Userstoroles) {
    try {
      //bean.userstorolesid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Userstoroles) {
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
