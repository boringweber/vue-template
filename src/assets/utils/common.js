//获取views目录中.vue文件
function getViewsFile(path) {
    return () => import(`@/views/${path}.vue`)
}
//获取components目录中.vue文件
function getComponentesFile(path) {
    return () => import(`@/components/${path}.vue`)
}

export {
    getViewsFile,
    getComponentesFile
}