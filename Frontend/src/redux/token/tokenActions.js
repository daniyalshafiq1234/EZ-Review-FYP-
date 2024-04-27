import {SAVE_TOKEN} from './tokenTypes'
export const saveToken = (token) => {
    return {
      type: SAVE_TOKEN,
      payload:token
    }
  }