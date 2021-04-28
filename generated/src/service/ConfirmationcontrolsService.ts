import { getCustomRepository } from "typeorm";
import { ConfirmationcontrolsRepository } from "../repository/ConfirmationcontrolsRepository";
import { Confirmationcontrols } from "../entity/Confirmationcontrols";
import { v4 as uuidv4 } from "uuid";

export class ConfirmationcontrolsService {
  repository = getCustomRepository(ConfirmationcontrolsRepository);

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

  async create(bean: Confirmationcontrols) {
    try {
      //bean.confirmationcontrolid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Confirmationcontrols) {
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
