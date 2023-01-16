<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="65px">
        <el-menu
          default-active="/demo"
          class="el-menu-vertical-demo"
          background-color="#353637"
          text-color="#fff"
          :collapse="true"
          :router="true"
        >
          <el-menu-item index="/demo">
            <el-icon><icon-menu /></el-icon>
            <template #title>展示</template>
          </el-menu-item>
          <el-menu-item index="/home">
            <el-icon><setting /></el-icon>
            <template #title>配置</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>© 2015-2025 mixct.com 万象云鼎 版权所有 V3.21.0916 热线电话：400-6655-719</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'

const router = useRouter()
</script>

<style scoped>
.el-container {
  background-color: #f1f1f1;
}
.el-aside {
  background-color: #353637;
  height: 100vh;
}
.el-header {
  height: 40px;
  background-color: #fff;
}
.el-main {
  padding: 0;
  margin: 10px 10px 0 10px;
  background-color: #fff;
}
.el-footer {
  height: 30px;
  font-size: 12px;
  color: #999;
  text-align: center;
  line-height: 30px;
}
.el-menu {
  border-right: none;
}
</style>
