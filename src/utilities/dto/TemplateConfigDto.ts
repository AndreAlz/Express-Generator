export class TemplateDto {
  private _nameCode: RegExp;
  private _value: string;
  private _isPrimary: Boolean;
  private _type: string | null;
  private _isGenerated: Boolean;
  private _isRelation: Boolean;

  constructor(
    nameCode: RegExp,
    value: string,
    isPrimary: Boolean,
    type: string,
    isGenerated: Boolean,
    isRelation: Boolean,
  ) {
    this._nameCode = nameCode;
    this._value = value;
    this._isPrimary = isPrimary;
    this._type = type;
    this._isGenerated = isGenerated;
    this._isRelation = isRelation;
  }

  /**
   * Getter nameCode
   * @return {RegExp}
   */
  public get nameCode(): RegExp {
    return this._nameCode;
  }

  /**
   * Getter value
   * @return {string}
   */
  public get value(): string {
    return this._value;
  }

  /**
   * Getter isPrimary
   * @return {Boolean}
   */
  public get isPrimary(): Boolean {
    return this._isPrimary;
  }

  /**
   * Getter type
   * @return {string }
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter isGenerated
   * @return {Boolean}
   */
  public get isGenerated(): Boolean {
    return this._isGenerated;
  }

  /**
   * Getter isRelation
   * @return {Boolean}
   */
  public get isRelation(): Boolean {
    return this._isRelation;
  }

  /**
   * Setter nameCode
   * @param {RegExp} value
   */
  public set nameCode(value: RegExp) {
    this._nameCode = value;
  }

  /**
   * Setter value
   * @param {string} value
   */
  public set value(value: string) {
    this._value = value;
  }

  /**
   * Setter isPrimary
   * @param {Boolean} value
   */
  public set isPrimary(value: Boolean) {
    this._isPrimary = value;
  }

  /**
   * Setter type
   * @param {string } value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter isGenerated
   * @param {Boolean} value
   */
  public set isGenerated(value: Boolean) {
    this._isGenerated = value;
  }

  /**
   * Setter isRelation
   * @param {Boolean} value
   */
  public set isRelation(value: Boolean) {
    this._isRelation = value;
  }
}
