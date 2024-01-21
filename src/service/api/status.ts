import { RequestMethod } from './types'
import { axiosHandler } from './core'

const BASE_URL = '/server-status'

async function checkStatusHandler(tokenLess: boolean = true) {
  return await axiosHandler(BASE_URL, {
    method: RequestMethod.GET,
    tokenLess
  })
}

export default { checkStatusHandler } as const
