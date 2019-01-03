<template>
  <div class="index">
    <el-container style="border: 1px solid #eee">
      <el-aside width="200px">
        <el-menu :default-openeds="['1']" router>
          <el-menu-item index="/home" class="home">主 页</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>账号管理</template>
              <el-menu-item index="userlist">账号列表</el-menu-item>
              <el-menu-item index="useradd">添加账号</el-menu-item>
              <el-menu-item index="passwordedit">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <div style="cursor: pointer">
              <i class="el-icon-setting" style="margin-right: 5px"></i>
              <span >{{ username }}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

    <!-- <p>用户信息：{{ $store.state.userinfo }}</p> -->
  </div>  
</template>

<script>
  export default {
    computed: {
      username() {
        return this.$store.state.userinfo.username
      }
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  body,
  #app,
  .index {
    height: 100%;
  }

  .el-container {
    height: 100%;
  }

  .el-aside {
    background-color: #fff;
    border-right: solid 1px #e6e6e6;
  }

  .el-menu {
    border-right: none;
  }

  .home {
    text-align: center;
    background-color:#fff;
    font-size: 26px;
    color:#409EFF;
    height: 60px;
  }

  .home:hover{
    background-color: #ecf5ff;
  }

  .el-header {
    background-color: #ecf5ff;
  }
  
</style>
