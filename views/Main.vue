<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
            <Common-aside></Common-aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonAside from '@/components/CommonAside'

    export default {
        name: "Main",
        components: {
            CommonAside
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #333;
  }

  .el-main {
    padding: 0;
    margin: 0;
  }
</style>
