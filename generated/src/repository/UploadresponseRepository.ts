import { EntityRepository, Repository } from "typeorm";
import { Uploadresponse } from "../entity/Uploadresponse";

@EntityRepository(Uploadresponse)
export class UploadresponseRepository extends Repository<Uploadresponse> {}
