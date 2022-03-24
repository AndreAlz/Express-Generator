export class ModelGeneratorDto {
  private _type: string;
  private _host: string;
  private _db: string;
  private _port: number;
  private _user: string;
  private _password: string;
  private _schema: string;

  constructor(
    type: string,
    host: string,
    db: string,
    port: number,
    user: string,
    password: string,
    schema: string,
  ) {
    this._type = type;
    this._host = host;
    this._db = db;
    this._port = port;
    this._user = user;
    this._password = password;
    this._schema = schema;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter host
   * @return {string}
   */
  public get host(): string {
    return this._host;
  }

  /**
   * Getter db
   * @return {string}
   */
  public get db(): string {
    return this._db;
  }

  /**
   * Getter port
   * @return {number}
   */
  public get port(): number {
    return this._port;
  }

  /**
   * Getter user
   * @return {string}
   */
  public get user(): string {
    return this._user;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Getter schema
   * @return {string}
   */
  public get schema(): string {
    return this._schema;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter host
   * @param {string} value
   */
  public set host(value: string) {
    this._host = value;
  }

  /**
   * Setter db
   * @param {string} value
   */
  public set db(value: string) {
    this._db = value;
  }

  /**
   * Setter port
   * @param {number} value
   */
  public set port(value: number) {
    this._port = value;
  }

  /**
   * Setter user
   * @param {string} value
   */
  public set user(value: string) {
    this._user = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }

  /**
   * Setter schema
   * @param {string} value
   */
  public set schema(value: string) {
    this._schema = value;
  }
}
