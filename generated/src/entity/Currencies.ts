import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("currencies_pkey", ["currencyid"], { unique: true })
@Entity("currencies", { schema: "iprovider" })
export class Currencies {
  @PrimaryGeneratedColumn({ type: "integer", name: "currencyid" })
  currencyid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", {
    name: "currencyiso",
    nullable: true,
    length: 3,
  })
  currencyiso: string | null;
}
