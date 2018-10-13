import Parser from "@/parses/parser";

export default class Google implements Parser {

  parserName : string = "google"

  parse($: any) : any {
    return $("div.srg", "div#search").find("div.g").map( (idx:number, ele:any)=> {
      let cap = $(ele)
      let title = cap.find("div.r>a")
      return {
        title: title.find("h3").html(),
        link: title.attr("href"),
        desc: cap.find("span.st").html()
      }
    }).toArray()
  }
}