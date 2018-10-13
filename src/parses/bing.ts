import Parser from "@/parses/parser";

export default class Bing implements Parser {

  parserName : string = "bing"

  parse($: any) : any {
    return $("ol#b_results").find("li.b_algo").map( (idx:number, ele:any)=> {
      let cap = $(ele)
      let title = cap.find("h2>a")
      return {
        title: title.html(),
        link: title.attr("href"),
        desc: cap.find("div.b_caption>p").html()
      }
    }).toArray()
  }
}