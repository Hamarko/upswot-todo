<template>
  <div class="todo-list">
      <div class="todo-list-main">
        <div class="todo-list-container">
          <img src="@/assets/logo.png" alt="logo" class="todo-list-logo">          
          <div class="todo-list-content">
            <h1 class="todo-list-header">Thank you {{user.username}}</h1> 
            <div class="form-content" >                                               
              <input 
                type="text"
                class="todo-list-input" 
                placeholder="Enter task"
                v-model="title"
                style="width:100%"
              >
              <div class="main-content-error" v-if="errorPassword">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z" fill="#D60000"/>
                </svg>                    
                <p class="imput-text-error">{{errorPassword}}</p>                 
              </div>
            </div>              
            <button 
              class="button"
              @click="createTask"
            >Add task</button>
            <div class="todo-list-tasks">
              <todoTask
                v-for="task in tasks"
                :key="task.id"
                :task_props="task"
                v-on:pachTask="pachTask"
                v-on:deletTask="deletTask"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="todo-list-footer">
      </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import todoTask from './todo-task.vue'
import { v4 as uuidv4 } from "uuid";

export default {
  name: 'todoList',
  components: {
    todoTask
    },
  data() {
    return {
      title:'',
      errorPassword:''
    }
  },
  computed: {
    ...mapGetters(['user','tasks'])    
  },
  methods:{
    ...mapMutations(['DELET_TASK', 'PACH_TASK', 'CREATE_TASK']),
    deletTask(id){
      this.DELET_TASK(id)
    },
    pachTask(task){     
      this.PACH_TASK(task)
    },
    createTask(){
      const task = {
        id: uuidv4(),
        title: this.title,
        isDo: false
      }
      if(this.title){
        this.CREATE_TASK(task)
        this.title = ''
        this.errorPassword = ''
      }else{
        this.errorPassword = 'Title tasks cannot be empty'
      }
    }
  }
}
</script>

<style>
.todo-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
 .todo-list-content{    
   display: flex;  
   flex-direction: column;
   align-items: center; 
   background: #FFFFFF;
   margin-bottom: -113px;
   padding-bottom: 50px;
   z-index: 7;
 }
 .todo-list-container{
   display: flex;  
   flex-direction: column;
   justify-content: center; 
   align-items: center;
 }
 .todo-list-main{ 
   display: flex;
   flex-direction: column;
   align-items: center; 
   min-height: 73.8vh;
   background: linear-gradient(180deg, #00AFED 0%, #00569A 100%); 
 }
 .todo-list-logo{
   width: 186px;
   height: 119px;
   margin-top: 65px;
   margin-bottom: 65px;
 }
 .todo-list-footer{
   background: #E5E5E5;
   min-height: 26.2vh;
 }
 .todo-list-input{
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #9A9A9A;
    width: 87.5%;
    padding: 0px 0px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: #333333;
    font-weight: 300;
    font-size: 18px;  
  
 }
 .todo-list-header{   
   font-style: normal;
   font-weight: 700;
   font-size: 60px;
   line-height: 156.69%;
   color: #333333;
 }
 .todo-list-tasks{
   margin-top: 50px;
   border-top: 2px solid #9A9A9A;
 }
@media (max-width: 500px) {
.todo-list-header{
    font-size: 30px;
  }
}
</style>