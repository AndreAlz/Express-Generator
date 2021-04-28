import { EntityRepository, Repository } from "typeorm";
import { Comprobantesprocesados } from "../entity/Comprobantesprocesados";

@EntityRepository(Comprobantesprocesados)
export class ComprobantesprocesadosRepository extends Repository<Comprobantesprocesados> {}
