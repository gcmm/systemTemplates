/**
 * json 转换成 urlencoded
 * @ param {object} data
 */
export default function jsonToUrlencoded(data) {
  return Object.keys(data)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
    })
    .join('&');
}
