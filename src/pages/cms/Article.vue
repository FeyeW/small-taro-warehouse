<!--

 * @Author: charles

 * @Date: 2021-06-08 16:06:58

 * @LastEditors: charles

 * @LastEditTime: 2021-06-18 11:34:53

-->

<template>

  <div>

    <h2>{{title}}</h2>

    <el-table

      :data="articles"

      style="width: 100%">

      <el-table-column prop="title" label="标题"> </el-table-column>

      <el-table-column prop="status" label="状态" width="180"> </el-table-column>

      <el-table-column prop="readTimes" label="阅读次数" width="200"> </el-table-column>

      <el-table-column label="操作" width="200" align="center"> 

        <!-- 定制 -->

        <template v-slot="scope">

          <el-button @click="delHandler(scope.row)" type="text" size="small">删除</el-button>

        </template>

      </el-table-column>



    </el-table>

  </div>

</template>

<script>

import {get,post} from '@/utils/request'

export default {

  // 1. 数据，变量

  data(){

    return {

      title:"文章管理",

      articles:[]

    }

  },

  // 2. 方法

  methods:{

    //2.2 根据id删除

    delHandler(row){

      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {

        confirmButtonText: '确定',

        cancelButtonText: '取消',

        type: 'warning'

      }).then(() => {

        let url = "/article/deleteById"

        get(url,{id:row.id}).then( resp => {

          // 提示删除成功

          this.$message({type:"success",message:resp.message})

          // 刷新页面数据

          this.loadData();

        });

      })

    },

    //2.1 加载数据

    loadData(){

      let url = "/article/findAll";

      get(url).then( resp => {

        this.articles = resp.data;

      });

    }

  },

  // 3. 生命周期，在页面加载出来之前

  created(){

    this.loadData();

  }

}

</script>



