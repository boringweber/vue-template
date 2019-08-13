// demo模块
import request from '@/assets/utils/request'

function getList(params) {
    return request({
        url: '/getTitle',
        method: 'get',
        params
    })
}

export {
    getList //获取列表信息
}