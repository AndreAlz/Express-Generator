import { getCustomRepository } from "typeorm";
import { WebhooksRepository } from "../repository/WebhooksRepository";
import { Webhooks } from "../entity/Webhooks";
import { v4 as uuidv4 } from "uuid";

export class WebhooksService {
  repository = getCustomRepository(WebhooksRepository);

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

  async create(bean: Webhooks) {
    try {
      //bean.idWebhooks = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Webhooks) {
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
