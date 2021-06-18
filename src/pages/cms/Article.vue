<!--

 * @Author: charles

 * @Date: 2021-06-08 16:06:58

 * @LastEditors: charles

 * @LastEditTime: 2021-06-18 10:09:59

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

