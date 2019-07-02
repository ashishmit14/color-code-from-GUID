<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button @click="getColor(guid1)">GUID1</button>
    </p>
    <p>
      <button @click="getColor(guid2)">GUID2</button>
    </p>
    <p>
      <button @click="getColor(guid3)">GUID3</button>
    </p>
    <h2 v-bind:style="{color : textColor}">{{selectedGuid}}</h2>
    <h2 v-bind:style="{color : textColor}">{{bgColor}}</h2>
    <h2 v-bind:style="{color : textColor}">{{textColor}}</h2>
    <div id="ashish" alt="Avatar" style="width:50px; height: 50px; border-radius: 50%; font-weight:800;">
      <span :style="'color:'+textColor">AG</span></div>
  </div>
</template>

<script>
import * as colorHash from '@/assets/common.js';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      guid1: "252ab454-1d8e-4150-b81a-ac0ab28ef56b",
      guid2: "85fffe8f-5f32-4c26-ad2e-bfdaf0cde8d0",
      guid3: "bf1f0119-f1af-47c7-b07f-c9bb1b38a11bq",
      bgColor: "",
      selectedGuid: "",
      textColor: "",
      textColorChangeObj:null,
    };
  },
  methods: {
    getColor(code){
      this.selectedGuid = code;
      this.textColorChangeObj = colorHash.changeColor(code);
      this.bgColor = this.textColorChangeObj.logoColor;
      this.textColor = this.textColorChangeObj.txtColor;
      console.log(this.textColorChangeObj);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  border-radius: 50%;
}
#ashish {
    position:fixed;
    top: 50%;
    left: 50%;
    padding: 5px;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
    border: 1px solid #ccc;
    background-color: #f3f3f3;
}
#ashish span {
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
}
</style>
