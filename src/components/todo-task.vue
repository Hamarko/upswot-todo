<template>
  <div class="todo-task">
    <div class="todo-task-checkbox" >
      <input 
        type="checkbox"        
        :disabled="!isEdit"
        v-model="isChecked"
        >
    </div>
    <div class="todo-task-text">      
      <p v-if="!isEdit" >{{task.title}}</p>
      <textarea v-model="textarea" placeholder="Enter note" v-if="isEdit"></textarea>
    </div>               
    <div class="todo-task-button-edit"> 
      <div class="edit-button" v-if="!isEdit">
        <button class="button" @click="editTask">Edit</button>         
      </div>
      <svg width="23" 
           height="17" 
           viewBox="0 0 23 17" 
           fill="none" 
           xmlns="http://www.w3.org/2000/svg" 
           v-if="isEdit"
           @click="updateTask"
        >
        <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
      </svg> 
      <svg width="17"
           height="17"
           viewBox="0 0 11 11"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           v-if="isEdit"
           @click="deletTask"
        >
        <path d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z" fill="#D60000"/>
      </svg> 
    </div>  
  </div>
</template>

<script>
export default {
  name: 'todoTask',
  props: {
    task_props:Object
  },
  data() {
    return {
      isEdit:false,
      task: this.task_props
    }
  },
  computed: {
    textarea: {
      get(){
        return this.task.title
      },
      set(newText){
        this.task.title = newText
      }
    },
    isChecked: {
      get(){
        return this.task.isDo
      },
      set(newStatus){       
        this.task.isDo = newStatus
      }
    }
  },
  methods:{
    
    editTask(){
      this.isEdit = true
    },
    updateTask(){
      this.$emit('pachTask',this.task)
      this.isEdit = false
    },
    deletTask(){
      this.$emit('deletTask',this.task.id)
    } 
  }

}
</script>

<style>
.todo-task {
  display: flex;
  box-shadow:  0 0 8px 0 #0076c0;
  min-height: 100px;
  margin: 10px;
}
.todo-task-checkbox{
  flex-direction: column;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-task-text{
  flex-direction: column;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-task-button-edit{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;    
}
textarea {
  width: 100%;
  height: 87.5%;
  box-sizing: border-box;
}
.edit-button{
  width: 87.5%;
}
</style>