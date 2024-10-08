import Activity from '../page/activity'
import Control from '../page/control'
import Lucky from '../page/lucky'


/**
 * 路由配置
 * @type {Router}
 */
const routes = [
    {
        path: '/activity',
        element: <Activity />,
        title: '登录'
    },
    {
        path: '/control',
        element: <Control />,
        title: '登录'
    },
    {
        path: '/lucky',
        element: <Lucky />,
        title: '登录'
    },
]

export default routes
