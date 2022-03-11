<template>
  <div class="hello">
      <router-link to="/">
          <el-button type="primary">按钮</el-button>
      </router-link>
      <router-link to="/user">
          <el-button type="danger" round>危险按钮</el-button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
