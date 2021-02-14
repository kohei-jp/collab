import axios from 'axios';
import { csrfToken } from 'rails-ujs';

/***************************************************/
// 定数
/***************************************************/
export const GET_METHOD = 'get';
export const POST_METHOD = 'post';
export const REQUEST_STATUS = {
  OK: 200,
  BAD: 400,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  SERVER_ERROR: 500,
  UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
}

/***************************************************/
//機能：API通信（同期処理）
//引数：（String）url, （String）method, （Object）params
//戻り：（Object）Promise
/***************************************************/
export const promiseApi = (url, method, params = null) => {
  let response = null;
  try {
    if(method == 'get') {
      !params ? response = axios.get(url) : response = axios.get(url, { params: params });
    }
    else {
      setCsrfToken();
      !params ? response = axios.post(url) : response = axios.post(url, params);
    }
  }
  catch(error) {
  }
  return new Promise(resolve => {
    resolve(response);
  });
}

/***************************************************/
//機能：クロスサイトリクエストフォージェリの設定
//引数：
//戻り：
/***************************************************/
export const setCsrfToken = () => (
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()
)