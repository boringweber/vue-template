import axios from 'axios'
import qs from 'qs'
import {
    Message
} from 'element-ui'

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({
    showSpinner: false
}); // NProgress Configuration

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000 // request timeout
})
// service.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// service.defaults.headers.common['token'] = process.env.VUE_APP_BASE_URL_TOKEN;

service.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
    // return qs.stringify(data)
}]

service.interceptors.request.use(
    config => {
        console.log(`${config.url}请求参数：`, config)
        return config
    },
    error => {
        NProgress.done();
        console.error('请求参数错误：', error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        console.log(`${response.config.url.split(response.config.baseURL)[1]}返回数据：`, response)
        // const res = response.data
        // if (res.code !== 200) {
        //     Message({
        //         message: res.msg || '错误',
        //         type: 'error',
        //         duration: 5 * 1000
        //     })
        //     NProgress.done();
        //     console.error('请求错误：', res)
        //     return Promise.reject(new Error(res.msg || '错误'))
        // } else {
        //     return res
        // }
        return response.data;
    },
    error => {
        NProgress.done();
        console.error('返回错误信息：' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service