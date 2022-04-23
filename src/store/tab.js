import Cookie from 'js-cookie'
import router from '../../router';

export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: "/home",
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
        // menu:[]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val;
                //判断菜单是否存在啊
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {//如果不存在，增加
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu;

            // add by magp
            let menuRouters = getMenuRouters(menu);
            let dynamicRoutes = [];
            bindRouters(menuRouters, dynamicRoutes);
            dynamicRoutes.forEach(route => router.addRoute("Main", route));
            // end by magp

            // const menuArray = []
            // menu.forEach(item => {
            //     if (item.children) {
            //         item.children = item.children.map(item => {
            //             console.log("-------------")
            //             item.component = () => import([`../views/${item.url}`]);
            //             console.log(item)
            //             return item;
            //         })
            //         menuArray.push(...item.children)//解构
            //     } else {
            //         item.component = () => import([`../views/${item.url}`]);
            //         menuArray.push(item)
            //     }
            // });
            // //路由的动态添加
            // menuArray.forEach(item => {
            //     router.addRoute('Main', item)
            // })
        }
    }
}

/**
 * 菜单信息转换成路由信息
 * 
 * @param {菜单信息} menuRouters 
 */
function getMenuRouters(menus){
    return menus.map((menu, index) => {
        let route = {};
        route.name = menu.name;
        route.meta = {title: menu.label, icon: menu.icon};
        if(menu.url && menu.url.length > 0){
            route.path = menu.path;
            route.component = (resolve) => require(['../../views' + menu.url], resolve);
        }
        if(menu.children && menu.children.length > 0){
            route.children = getMenuRouters(menu.children);
        }
        return route;
    });
}

/**
 * 获取真正的路由
 * 
 * @param {路由信息} menuRouters 
 */
function bindRouters(menuRouters, arr){
    menuRouters.forEach((route) => {
        if(route.path && route.path.length > 0){
            arr.push(route);
        }
        if(route.children && route.children.length > 0){
            bindRouters(route.children, arr);
        }
    });
}