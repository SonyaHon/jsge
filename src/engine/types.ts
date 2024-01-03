export type Thenable<T> = T | Promise<T>;
export type Constructor<T> = new (...args: any) => T;

export enum JSGEErrno {
  JSGE_EMPTY_ARRAY = "jsge-empty-array",
  JSGE_NO_RUNNER_SET = "jsge-no-runner-set",
  JSGE_STRING_IS_INVALID_HEX = "jsge-string-is-invalid-hex",
  RESOURCE_NOT_FOUND = "jsge-resource-not-found",
}

const errorMessages: Record<JSGEErrno, string> = {
  [JSGEErrno.JSGE_EMPTY_ARRAY]: "Array is empty",
  [JSGEErrno.JSGE_NO_RUNNER_SET]:
    "No runner set. Add a plugin or set a runner manually",
  [JSGEErrno.JSGE_STRING_IS_INVALID_HEX]:
    "<passedColor> is an invalid hex string",
  [JSGEErrno.RESOURCE_NOT_FOUND]: "Resource <resource> has not been registered",
};

export class JSGEError extends Error {
  static isJSGEError(obj: any) {
    return obj instanceof JSGEError;
  }

  constructor(
    public readonly id: JSGEErrno,
    obj: any = {}
  ) {
    super(
      errorMessages[id].replaceAll(/<(\w+)>/g, (_, name) => {
        return obj[name] || "undefined";
      })
    );
  }
}
