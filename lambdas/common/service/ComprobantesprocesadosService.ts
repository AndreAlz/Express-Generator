import { getCustomRepository } from "typeorm";
import { ComprobantesprocesadosRepository } from "../repository/ComprobantesprocesadosRepository";
import { Comprobantesprocesados } from "../entity/Comprobantesprocesados";
import { v4 as uuidv4 } from "uuid";

export class ComprobantesprocesadosService {
  repository = getCustomRepository(ComprobantesprocesadosRepository);

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

  async create(bean: Comprobantesprocesados) {
    try {
      //bean.idprocesado = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Comprobantesprocesados) {
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
