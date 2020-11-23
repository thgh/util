import { getJSON } from './fetch.mjs'
import { optimist } from './memo.mjs'

/** @deprecated Removed in v2 */
export const getmeta = optimist(get, 1e9)

function get(url) {
  if (!url) {
    return
  }
  return getJSON('https://getmeta.info/json?url=' + encodeURIComponent(url))
}
