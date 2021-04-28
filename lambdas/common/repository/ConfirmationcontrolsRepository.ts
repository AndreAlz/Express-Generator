import { EntityRepository, Repository } from "typeorm";
import { Confirmationcontrols } from "../entity/Confirmationcontrols";

@EntityRepository(Confirmationcontrols)
export class ConfirmationcontrolsRepository extends Repository<Confirmationcontrols> {}
