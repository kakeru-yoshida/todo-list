<!-- Please remove this file from your project -->
<template>
  <div class="login-item">
    <p class="login-item-text">ユーザー名</p>
    <input v-model="name" type="text" >
    <p v-if="nameErrorText" class="name-error-text">{{nameErrorText}}</p>
    <p class="login-item-text">パスワード</p>
    <input v-model="pasword" type="text">
    <p v-if="paswordErrorText" class="pasword-error-text">{{paswordErrorText}}</p>
    <button @click="getSearch">ログイン</button>
    <p v-if="loginState">成功</p>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
// import { mapState } from 'vuex'

  export default Vue.extend({
    name: 'NuxtLoginFeature',
    data() {
      return {
        name: "",
        pasword: "",
        nameErrorText: "",
        paswordErrorText: ""
      }
    },
    
    computed: {
      error () {
        return this.$store.getters['login/error']
      },
      loginState () {
        return this.$store.getters['login/loginState']
      }
    },

    methods: {
      getSearch() {
        console.log(this.loginState)
        const nameValue = this.name
        const paswordValue = this.pasword
        if(nameValue ) {
          if(paswordValue) {
            this.paswordErrorText = ""
            this.nameErrorText = ""
            this.$store.dispatch('login/loginDecision',{nameValue,paswordValue})
          }
          else {
            this.nameErrorText = ""
            this.paswordErrorText = "パスワードを入力してください"  
          }
        }
        else if(paswordValue) {
          this.nameErrorText = ""
          this.paswordErrorText = "パスワードを入力してください"
        }
        else {
          this.paswordErrorText = "パスワードを入力してください"
          this.nameErrorText = "nameを入力してください"
        }
      }
    }
  })
</script>
<style>
  .pasword-error-text, 
  .name-error-text {
    color: red;
  }
</style>