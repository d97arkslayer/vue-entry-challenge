import { post } from 'axios'

const FILL_DATABASE_URL = 'http://localhost:5000/get-data'

/**
 * Use to fill database
 * @param date
 * @returns {*}
 */
function fillDataBase (date = null) {
  let url = FILL_DATABASE_URL
  if (date) {
    url = `${url}?date=${date}`
  }
  return post(url, {}, {})
}

export {
  fillDataBase
}
