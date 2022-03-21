export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: "/",
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
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
                    debugger
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        }
    }
}