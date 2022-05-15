import { createStore } from "vuex"

const login = (username,password)=>{
  if (username === 'Admin' && password === '12345'){
    return {
        id:'1234qwr',
        username:'Admin'
    }
  }
  throw 'Invalid сompany name or password';
}

export const store = createStore({
  state:{
    tasks: [
      {id:'w1',isDo:false,title:"is simply dummy text of the printing and typesetting industry.\
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
                                  when an unknown printer took a galley of type and scrambled it to make a type\
                                   specimen book. It has"},
      {id:'w2',isDo:true,title:"is simply dummy text of the printing and typesetting industry.\
                                Lorem Ipsum has been the industry's standard dummy text ever since\
                                the 1500s, when an unknown printer took a galley of type and scrambled\
                                it to make a type specimen book. It has"},
      {id:'w3',isDo:false,title:"is simply dummy text of the printing and typesetting industry.\
                                 Lorem Ipsum has been the industry's standard dummy text ever since\
                                 the 1500s, when an unknown printer took a galley of type and scrambled\
                                  it to make a type specimen book. It has"},
      {id:'w4',isDo:false,title:"is simply dummy text of the printing and typesetting industry.\
                                 Lorem Ipsum has been the industry's standard dummy text ever since\
                                  the 1500s, when an unknown printer took a galley of type and scrambled\
                                   it to make a type specimen book. It has"},
      {id:'w5',isDo:false,title:"is simply dummy text of the printing and typesetting industry.\
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
                                  when an unknown printer took a galley of type and scrambled it to make a type\
                                   specimen book. It has"},
      {id:'w6',isDo:true,title:"is simply dummy text of the printing and typesetting industry.\
                                Lorem Ipsum has been the industry's standard dummy text ever since\
                                the 1500s, when an unknown printer took a galley of type and scrambled\
                                it to make a type specimen book. It has"},
      {id:'w7',isDo:false,title:"is simply dummy text of the printing and typesetting industry.\
                                 Lorem Ipsum has been the industry's standard dummy text ever since\
                                 the 1500s, when an unknown printer took a galley of type and scrambled\
                                  it to make a type specimen book. It has"},
      {id:'w8',isDo:false,title:"is simply dummy text of the printing and typesetting industry.\
                                 Lorem Ipsum has been the industry's standard dummy text ever since\
                                  the 1500s, when an unknown printer took a galley of type and scrambled\
                                   it to make a type specimen book. It has"},                    
    ],
    user: {
      id:'1234qwr',
      username:'Admin'
    }
  },
  mutations:{
    LOGIN(state,user){
      state.user = user
      localStorage.isAuth = true
    },
    CREATE_TASK(state, task){
      state.tasks.push(task)
    },
    DELET_TASK(state, id){
      const newTask = state.tasks.filter(task => task.id !== id)
      state.tasks = newTask
    },
    PACH_TASK(state, task){
      state.tasks.map( taskItem =>{
        if(taskItem.id === task.id) taskItem = task
      })
    }
  },
  actions:{
    LOGI({commit},data) {
      try{
        const user = login(data.username, data.password)
        commit("LOGIN",user)
      }catch (error){       
        throw new Error(error);
      }
    }
  },
  getters:{
    user(state){
      return state.user
    },
    tasks(state){
      return state.tasks
    }
    
  }
})