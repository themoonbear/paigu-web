import axios from "axios";
import {B64Encode} from "@/utils/crypto";
import engines from "@/utils/engines";
import ParseHTML from "@/parses";

const API_URL = "/api/s?c="

function packResult(code: any, msg: any, e?: string) {
  return {code: code, msg: msg, title: e}
}

async function request(url: string){
  try{
    let res = await axios.get(API_URL + B64Encode(encodeURI(url)))
    if (res.status != 200){
      return packResult(res.status, res.statusText)
    }else if (res.data.code != 0){
      return packResult(res.data.code, res.data.error)
    }else{
      return packResult(res.data.code, res.data.result)
    }
  }catch (e) {
    return packResult(-1, e.name + ": " + e.message)
  }
}

function RequestAPI(n: string, c: string, f: Function) {
  let url = engines.getURL(n)
  if(!url){
    return f(packResult(-1, "engine is nil", n))
  }
  request(url + c).then((ret)=>{
    ret.title = n
    if(ret.code == 0) {
      ret.msg = ParseHTML(n, ret.msg)
    }
    f(ret)
  }).catch((err)=>{
    f(packResult(-1, err, n))
  })
}

export default RequestAPI