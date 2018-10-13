import Parser from "@/parses/parser";

export default class Baidu implements Parser {
  parserName : string = "baidu"

  parse($: any) : any {
    return $('.result', '#content_left').map((idx:number, ele:any)=>{
      let cap = $(ele)
      let title = cap.find("h3>a")
      return {
        "title": title.html(),
        "link": title.attr("href"),
        "desc": cap.find("div.c-abstract").html()
      }
    }).toArray()
  }
}