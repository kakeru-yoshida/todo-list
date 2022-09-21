<!-- Please remove this file from your project -->
<template>
  <div class="todo_item">
    <TodosListAdd @passListName="passListName"></TodosListAdd>
    <ul v-for="(todoList,index) in todoList" :key="todoList.listId" class="lst">
      <li style="background-color: blue;">
        <p class="list_name" style="text-align:center; color: #fff;">{{todoList.listName}}</p>
        <ul v-for="todoListData in todoList.data" :key="todoListData.listDataId" class="lst">
          <li style="background-color: red;">
            <p class="list_name" style="text-align:center; color: #fff;">{{todoListData.listData}}</p>
          </li>
        </ul>
        <TodosListAdd @passListName="passListData($event,index)"></TodosListAdd>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import TodosListAdd from "./TodosListAdd.vue"

  export default Vue.extend({
    name: 'NuxtTodos',

    components: {
      TodosListAdd,
    },

    data() {
      return {  
        todoList:[],
      }
    },
    
    computed: {
      
    },

    methods: {
      passListName(value) {
        const num = Object.keys(this.todoList).length + 1
        this.todoList.push({data: [], listId: num, listName: value});
        this.$set(this.todoList, "data", []) 
        // this.todoList.data.push({listDataId: num, listData: value})
      },

      passListData(value,index) {
        const num = Object.keys(this.todoList[index].data).length + 1
        this.todoList[index].data.push({listDataId: num, listData: value})
        console.log(num)
      }
    }
  })
</script>
<style>
  
</style>