import {Base64} from "js-base64";

export function B64Encode(str: string) : string {
  return Base64.encode(str)
}