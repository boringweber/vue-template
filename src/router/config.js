import {
    getViewsFile,
    getComponentesFile
} from "../assets/utils/common";

const routes = [{
    path: '/',
    name: 'features',
    component: getViewsFile('features')
}, {
    path: '/login',
    name: 'login',
    component: getComponentesFile('Login'),
    meta: {
        isRequireLogin: false
    }
}, {
    path: '/404',
    name: '404',
    component: getComponentesFile('404'),
    meta: {
        isRequireLogin: false
    }
}, {
    path: '*',
    redirect: '/login',
    component: getComponentesFile('404')
}]
export default routes