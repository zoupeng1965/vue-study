<template>
  <div class="hello">
    <h2>我要睡觉了</h2>
    <div class="zj">
      <span class="left">11</span>
      <span class="right">22</span>
    </div>
    <div class="tb">5555555555</div>
    <mt-button size="small" type="default">default</mt-button>
    <mt-button size="large" type="primary">primary</mt-button>
    <mt-button type="danger" size="normal">danger</mt-button>
    <hr>
    <mt-button type="danger" size="small" disabled>small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button @click.native="add" size="normal">normal</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  //   name: '111',
  data() {
    return {
      msg: "这是一个组件,看了好久",
      instance:""
    };
  },
  created() {
      this.add()
      setTimeout(() => {
  this.instance.close();
}, 2000);
  },
  methods: {
    add() {
     this.instance=Toast({
        message: "提示555",
        position: "top",
        duration: -1,
        iconClass: 'glyphicon glyphicon-pencil',
        className:"red"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red i{
    color: red;
}
.left {
  float: left;
}
.right {
  float: right;
}
h2 {
  text-align: center;
  background-color: pink;
  /* font-size: 30px; */
}
.zj .tb {
  width: 100%;
  height: 480px;
  background-color: red;
}
.tb {
  margin-top: 50px;
  background-color: green;
}
</style>