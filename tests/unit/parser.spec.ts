import ParseHTML from "@/parses";

describe("parser", ()=>{
  it("baidu", () => {
    let ret = ParseHTML("baidu", "<div id='content_left'>" +
      "<div class='result'><h3><a href='http://www.baidu.com'><em>测试</em></a></h3><div class='c-abstract'>描述信息</div></div></div>")
    expect(ret[0].link).toMatch("http://www.baidu.com")
  })
  it("google", () => {
    let ret = ParseHTML("google", "<div id='rso'>" +
      "<div class='srg'><div class='g'>" +
      "<h3 class='r'><a href='http://www.google.com'><em>测试</em></a></h3>" +
      "<span class='st'>描述信息</span></div></div></div>")
    expect(ret[0].link).toMatch("http://www.google.com")
  })
})