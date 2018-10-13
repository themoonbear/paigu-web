export default interface Parser {
  parserName : string
  parse($: any) : any
}

let parsers = new Map<string, Parser>()

export function AddParser(parser : Parser) {
  parsers.set(parser.parserName.toLowerCase(), parser)
}

export function GetParser(n : string) : Parser {
  return parsers.get(n.toLowerCase()) as any
}