import { EntityRepository, Repository } from "typeorm";
import { Test } from "../entity/Test";

@EntityRepository(Test)
export class TestRepository extends Repository<Test> {}
