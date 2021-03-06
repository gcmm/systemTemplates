import { notification } from 'antd';
import axios from 'axios'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

const checkStatus = response => {
  if (
    (response.status >= 200 && response.status < 300) ||
    // 针对于要显示后端返回自定义详细信息的status, 配置跳过
    response.status === 400 ||
    response.status === 500
  ) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

const checkServerCode = response => {
  if (response.code >= 200 && response.code < 300) {
    return {
      success: true,
      ...response
    };
  }
  if (response.code === 400) {
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
  } else if (response.code === 401) {
    if (window.location.hash.endsWith('/login')) return false;
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
    window.location.href= '/login'
  } else if (response.code === 404) {
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
  } else if (response.code === 500) {
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
  }
  return response;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       请求地址
 * @param  {object} [option]  配置参数
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(url, option) {
  const options = {
    ...option
  };

  const defaultOptions = {
    method: 'POST',
    data: {},
    credentials: 'include'
  };
  const newOptions = { ...defaultOptions, ...options };

  newOptions.headers = {
    ...newOptions.headers
    // 客户端认证, 或者加上token
    // Authorization: '',
  };

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        ...newOptions.headers
      };
      newOptions.data = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers
      };
    }
  }

  return axios({
    url,
    ...newOptions
  })
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.data;
    })
    .then(checkServerCode)
    .catch(e => {
      const status = e.name;
      if (status === 401) {
        window.location.href= '/login'
        return;
      }
    });
}
