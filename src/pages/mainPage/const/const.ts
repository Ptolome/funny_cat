export const ApiUrl: string = "https://api.thecatapi.com/v1/images/search";

interface HeadersInit extends Record<string, string> {
  [key: string]: string;
}
export const headers: HeadersInit = {
  "content-type": "application/json",
  "x-api-key": "live_OMpbFZho5aXanyhH62pRwSPswFdGmJ3vZYbnlJP87QKX15XCzpbIEBPL5Vv3KBol"
};
