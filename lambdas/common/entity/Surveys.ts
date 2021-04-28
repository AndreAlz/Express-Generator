import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Licitacionmaster } from "./Licitacionmaster";
import { Sections } from "./Sections";
import { Suppliers } from "./Suppliers";
import { Typeofsupplier } from "./Typeofsupplier";
import { Typeofsurvey } from "./Typeofsurvey";

@Index("surveys_pkey", ["idsurvey"], { unique: true })
@Entity("surveys", { schema: "iprovider" })
export class Surveys {
  @Column("character varying", { primary: true, name: "idsurvey", length: 70 })
  idsurvey: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("boolean", { name: "enabled", nullable: true, default: () => "true" })
  enabled: boolean | null;

  @OneToMany(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.survey
  )
  licitacionmasters: Licitacionmaster[];

  @OneToMany(() => Sections, (sections) => sections.idsurvey)
  sections: Sections[];

  @OneToMany(() => Suppliers, (suppliers) => suppliers.survey)
  suppliers: Suppliers[];

  @ManyToOne(() => Typeofsupplier, (typeofsupplier) => typeofsupplier.surveys)
  @JoinColumn([
    { name: "idtypeofsupplier", referencedColumnName: "idtypeofsupplier" },
  ])
  idtypeofsupplier: Typeofsupplier;

  @ManyToOne(() => Typeofsurvey, (typeofsurvey) => typeofsurvey.surveys)
  @JoinColumn([
    { name: "typeofsurveyid", referencedColumnName: "typeofsurveyid" },
  ])
  typeofsurvey: Typeofsurvey;
}
