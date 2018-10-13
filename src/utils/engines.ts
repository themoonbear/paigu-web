type Engine<T> = { [key: string]: T };

const engines : Engine<string> = {
  baidu: "https://www.baidu.com/s?wd=",
  // bing: "https://cn.bing.com/search?q=",
  google: "https://www.google.com/search?q="
}


export default {
  getURL : function (e: string) {
    return engines[e]
  },
  names: Object.keys(engines)
}