<!-- Please remove this file from your project -->
<template>
    <div class="add-btn-wrap">
      <button @click="addListDisplay()" class="add-btn">リスト追加</button>
      <div v-if="addListFlg" class="add-btn-item">
        <input v-model="listName" type="text">
        <div class="add-btn-item_wrap">
          <button @click="cansel()" class="add-btn-cansel">キャンセル</button>
          <button @click="addList()" class="add-btn-ok">追加</button>
          <p v-if="errMessage" class="err_message">リスト名を追加してください</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'NuxtTodosListAdd',
    // props: [
    //   'todoList'
    // ],

    data() {
      return {  
        addListFlg: false,
        listName:"",
        errMessage: false,
        data:{}
      }
    },
    
    computed: {
      
    },

    methods: {
      addListDisplay() {
        this.addListFlg = true
      },

      addList() {
        if(this.listName.length) {
          this.errMessage = false
          this.addListFlg = false
          this.$emit("passListName", this.listName);
          this.listName = ''
        }
        else {
          this.errMessage = true
        }
      },

      cansel() {
        this.addListFlg = false
      }
    }
  }
</script>
<style>
  .pasword-error-text, 
  .name-error-text {
    color: red;
  }
</style>