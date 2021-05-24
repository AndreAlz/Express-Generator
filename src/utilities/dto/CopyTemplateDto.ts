export class CopyTemplateDto {
  private _path: string;
  private _target: string;
  private _name: string;
  private _ext: string;

  constructor(path: string, target: string, name: string, ext: string) {
    this._path = path;
    this._target = target;
    this._name = name;
    this._ext = ext;
  }

  /**
   * Getter path
   * @return {string}
   */
  public get path(): string {
    return this._path;
  }

  /**
   * Getter target
   * @return {string}
   */
  public get target(): string {
    return this._target;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter ext
   * @return {string}
   */
  public get ext(): string {
    return this._ext;
  }

  /**
   * Setter path
   * @param {string} value
   */
  public set path(value: string) {
    this._path = value;
  }

  /**
   * Setter target
   * @param {string} value
   */
  public set target(value: string) {
    this._target = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter ext
   * @param {string} value
   */
  public set ext(value: string) {
    this._ext = value;
  }
}
