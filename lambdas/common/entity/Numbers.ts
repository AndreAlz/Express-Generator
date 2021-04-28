import { Column, Entity, Index } from "typeorm";

@Index("numbers_pkey", ["numberid"], { unique: true })
@Entity("numbers", { schema: "iprovider" })
export class Numbers {
  @Column("character varying", { primary: true, name: "numberid", length: 70 })
  numberid: string;
}
