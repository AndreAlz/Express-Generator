import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Sociedad } from "./Sociedad";

@Index("contacto_sociedad_pkey", ["idContactoSociedad"], { unique: true })
@Entity("contacto_sociedad", { schema: "iprovider" })
export class ContactoSociedad {
  @Column("character varying", {
    primary: true,
    name: "id_contacto_sociedad",
    length: 70,
  })
  idContactoSociedad: string;

  @Column("character varying", { name: "nombre", length: 250 })
  nombre: string;

  @Column("character varying", { name: "telefono", nullable: true, length: 50 })
  telefono: string | null;

  @Column("character varying", { name: "cargo", nullable: true, length: 150 })
  cargo: string | null;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @ManyToOne(() => Sociedad, (sociedad) => sociedad.contactoSociedads)
  @JoinColumn([{ name: "id_sociedad", referencedColumnName: "idSociedad" }])
  idSociedad: Sociedad;
}
