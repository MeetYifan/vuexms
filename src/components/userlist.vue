<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
    </div>
    <div class="text item">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          fixed
          prop="name"
          label="昵称"
          >
        </el-table-column>
        <el-table-column
          prop="realname"
          label="实名"
          >
        </el-table-column>
        <el-table-column
          prop="idType"
          label="证件编号"
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
          class="operation">
          <template slot-scope="scope">
            <el-button @click="handleEidt(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        name: 'jianxian',
        realname: '酒剑仙',
        idType: '12345678910111213',
      }, {
        id: 2,
        name: 'jianxian',
        realname: '酒剑仙',
        idType: '12345678910111213',
      }, {
        id: 3,
        name: 'jianxian',
        realname: '酒剑仙',
        idType: '12345678910111213',
      }, {
        id: 4,
        name: 'jianxian',
        realname: '酒剑仙',
        idType: '12345678910111213',
      }]
    }
  },
  methods: {
    handleEidt(id) {
      console.log('修改'+id)
    },
    handleDel(id) {
      console.log('删除'+id)
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

  .el-table {
    border-left: 0px solid #ebeef5;
  }
  

</style>
