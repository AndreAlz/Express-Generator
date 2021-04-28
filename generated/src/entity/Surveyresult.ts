import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cotizacionmaster } from "./Cotizacionmaster";
import { Questions } from "./Questions";
import { Suppliers } from "./Suppliers";

@Index("surveyresult_pkey", ["idresult"], { unique: true })
@Entity("surveyresult", { schema: "iprovider" })
export class Surveyresult {
  @Column("character varying", { primary: true, name: "idresult", length: 70 })
  idresult: string;

  @Column("timestamp with time zone", { name: "registerdate", nullable: true })
  registerdate: Date | null;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("text", { name: "answer", nullable: true })
  answer: string | null;

  @Column("character varying", { name: "estado", nullable: true, length: 1 })
  estado: string | null;

  @ManyToOne(
    () => Cotizacionmaster,
    (cotizacionmaster) => cotizacionmaster.surveyresults
  )
  @JoinColumn([{ name: "cotizacionid", referencedColumnName: "cotizacionid" }])
  cotizacion: Cotizacionmaster;

  @ManyToOne(() => Questions, (questions) => questions.surveyresults)
  @JoinColumn([{ name: "idquestion", referencedColumnName: "idquestion" }])
  idquestion: Questions;

  @ManyToOne(() => Suppliers, (suppliers) => suppliers.surveyresults)
  @JoinColumn([{ name: "supplierid", referencedColumnName: "supplierid" }])
  supplier: Suppliers;
}
