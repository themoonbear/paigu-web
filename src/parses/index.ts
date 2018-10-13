import cheerio from 'cheerio';
import {AddParser, GetParser} from "@/parses/parser";
import Baidu from "@/parses/baidu";
import Bing from "@/parses/bing";
import Google from "@/parses/google";

AddParser(new Baidu())
AddParser(new Bing())
AddParser(new Google())

export default function ParseHTML(n: string, data : string) :any {
  let p = GetParser(n)
  if(!p){
    return n + " parser is not exist"
  }
  return p.parse(cheerio.load(data))
}