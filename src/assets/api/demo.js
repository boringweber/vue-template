// demo模块
import request from '@/utils/request'

function getList(params) {
    return request({
        url: '/offdataList',
        method: 'get',
        params
    })
}

export {
    getList //获取列表信息
}