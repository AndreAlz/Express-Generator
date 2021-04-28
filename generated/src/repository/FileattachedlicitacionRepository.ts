import { EntityRepository, Repository } from "typeorm";
import { Fileattachedlicitacion } from "../entity/Fileattachedlicitacion";

@EntityRepository(Fileattachedlicitacion)
export class FileattachedlicitacionRepository extends Repository<Fileattachedlicitacion> {}
