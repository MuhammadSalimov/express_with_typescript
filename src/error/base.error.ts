export class BaseError extends Error {
  status: number;
  errors?: object | null;
  constructor(status: number, message: string, errors?: object | undefined) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new BaseError(401, "User is not authorized");
  }

  static BadRequest(message: string, errors: object) {
    return new BaseError(400, message, errors);
  }
}
