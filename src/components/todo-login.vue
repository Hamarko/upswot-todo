<template>
  <div class="todo-login-wrapper">
      <header class="todo-login-header">
        <div class="todo-login-header-container">
          <img src="@/assets/logo.png" alt="logo" class="todo-login-header-logo">
        </div>        
      </header>
      <main class="todo-login-main">
        <div class="todo-login-main-header"> 
           <div class="main-header-container">
             <h1>Welcome to</h1>
             <h1>Business Analytics Online</h1>
           </div>
        </div>
        <div class="todo-login-main-content">
           <div class="main-content-container">
             <div class="main-content-text">               
               <p class="list-text"><span class="list-header">Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
               <div class="main-content-flex">
                  <div class="list-swg">
                     <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
                     </svg> 
                  </div>
                  <div class="list-block">
                     <p class="list-header">Interactive Reporting</p>
                     <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</p>
                  </div>                
               </div>
                 <div class="main-content-flex">
                  <div class="list-swg">
                     <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
                     </svg> 
                  </div>
                  <div class="list-block">
                     <p class="list-header">Automated data updates</p>
                     <p>The application automatically updates and structures the data in just 60 seconds, saving you time and money.</p>
                  </div>                
               </div>
                 <div class="main-content-flex">
                  <div class="list-swg">
                     <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
                     </svg> 
                  </div>
                  <div class="list-block">
                     <p class="list-header">Data Security</p>
                     <p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
                  </div>                
               </div>
               
             </div>
             <div class="main-content-login">
                <div class="form-content">
                  <p class="imput-text">Name</p>               
                  <input class="main-content-login-input" 
                         type="text"
                         v-model="name"
                  >
                  <div class="main-content-error" v-if="errorName">
                     <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z" fill="#D60000"/>
                     </svg>   
                     <p class="imput-text-error">{{errorName}}</p>
                  </div>               
                </div>                
                <div class="form-content">                               
                  <p class="imput-text">Password</p>                 
                  <input class="main-content-login-input" 
                         type="text"
                         v-model="password"
                  >
                  <div class="main-content-error" v-if="errorPassword">
                     <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z" fill="#D60000"/>
                     </svg>                    
                     <p class="imput-text-error">{{errorPassword}}</p>                 
                  </div>
                </div>
                <button class="button" @click="login" >LOGIN</button>
                <p class="login-link"> <router-link to="/todo">Forgot Password</router-link></p>
                <button class="register-button">Register now</button>
             </div>
           </div>
        </div>
      </main>
      <footer class="login-footer">
         <div class="login-footer-container">
            <div class="login-footer-menu">               
               <img src="@/assets/logo.png" alt="logo" class="login-footer-menu-logo">
               <div class="login-footer-menu-list">                 
                  <li class="button-li">Terms & Conditions</li>
                  <li class="button-li">Privacy</li>
                  <li class="button-li">Notice at Collection</li>
                  <li class="button-li">CA Privacy Hub</li>
                  <li class="button-li">Contact Us</li>
                  <li>Sitemap</li>                 
               </div>              
            </div>
            <div class="login-footer-text">
               <p>Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</p>
            </div>
         </div>
      </footer>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'todoLogin',
  data() {
     return {
        loginData:{
           username:'',
           password:''           
        },
        errorName:'',
        errorPassword:''
     }
  },
  computed: {
     ...mapGetters(['user']),
     name:{
        get(){
           return this.login.username
        },
        set(newText){
           this.loginData.username = newText
        }
     },
     password:{
        get(){
           return this.login.password
        },
        set(newText){
           this.loginData.password = newText
        }
     }
  },
  methods:{
     ...mapActions(['LOGI']),
     login(){
        this.errorName = ''
        this.errorPassword = ''
        if (this.loginData.username !=="" && this.loginData.password !==""){
           try{
             this.LOGI(this.loginData)
           }catch (error){      
              this.errorName = error.message
              this.errorPassword = error.message
           }
           this.$router.push({name: 'todo'})
        }
        if (this.loginData.username ===""){
           this.errorName = "The field 'Name' cannot be empty"
        }
        if (this.loginData.password ===""){
           this.errorPassword = "The field 'Password' cannot be empty"
        }
     }
  }
}
</script>

<style>
.todo-login-wrapper{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;   
  background: #333333;   
}
[class*="-container"]{
  width: 1164px;
  display: flex;
}
.todo-login-header{
   margin-top: 53px;
   height: 96px;
   display: flex;
   justify-content: center;
   background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);   
}  
.todo-login-header-logo{
   margin-bottom: 15px;
   margin-top: 15px;
}
.todo-login-main{
   flex: 1 1 auto;
   display: flex;
   flex-direction: column;
}
.todo-login-main-header{
   background-image: url('@/assets/screen.png');
   background-repeat: no-repeat; 
   background-size: cover;
   background-position: center center;
   height: 457px;
   display: flex;
   justify-content: center;
}
.main-header-container{   
   flex-direction: column;
   justify-content: flex-end; 
   padding-bottom: 70px;
}
h1{
   font-size: 55px;
   font-weight: 400;
   line-height: 156.69%;
   margin-block-start: 0;
   margin-block-end: 0; 
   color: #FFFFFF;
}
.todo-login-header-container{
   justify-content: flex-start;  
}
.todo-login-main-content{
   background:#FFFFFF;
   min-height: 452px;
   display: flex;
   justify-content: center;
}
.main-content-container{
   justify-content: space-between;
}
.main-content-text{
   max-width: 664px;    
}
.main-content-login{
   width: 481px;
   background: #FFFFFF;
   box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
   height: 464px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   margin-top: -182px;    
}
.main-content-login-text{
   width: 87.5%;
   margin-top: 40px;    
} 
.imput-text{
   font-weight: 300;
   font-size: 18px;
   line-height: 21px;
   margin-block-end: 7px;
   margin-block-start: 6px;
   padding: 0px 0px;
} 
.main-content-error{
   display: flex;
   align-items: center;
}
.imput-text-error{
   font-weight: 300;
   font-size: 18px;
   line-height: 21px;
   margin-block-end: 7px;
   margin-block-start: 6px;
   margin-inline-start: 10px;
   padding: 0px 0px;
   color: #D60000;
}
.main-content-login-input{
   height: 51px;
   background: #FFFFFF;
   border: 1px solid #9A9A9A;
   width: 100%;
   padding: 0px 0px;
   font-family: 'Roboto', sans-serif;
   font-style: normal;
   color: #333333;
   font-weight: 300;
   font-size: 18px;  
}
.button{
   width: 87.5%;
   height: 53px;
   margin-top: 19px;
   font-weight: 400;
   font-size: 25px;
   color: #FFFFFF;
   background: #0076C0;
   border-color: #0076C0;
   border-style: solid;
}
.button:hover{
   color: #0076C0;
   background: #FFFFFF;
}
.register-button{
    width:100%;
    height: 53px;
    margin-top: 0;
    font-weight: 400;
    font-size: 25px;
    background: #F6F6F6;
    border-color: #F6F6F6;
    border-style: solid;
}
.register-button:hover{
   background: #FFFFFF;
}
.login-link{
   font-weight: 400;
   font-size: 20px;
   line-height: 23px;      
}
a{
   text-decoration: none;
   color:#056DAE;  
}
.form-content{
   width: 87.5%;
   height: 121px;
}
.main-content-flex{
   display: flex;
}
.list-swg{
   width: 23px;
   margin-top: 14px;
   margin-right: 15px;
}
.list-block{
   font-weight: 400;
   line-height: 156.69%;
}
.list-header{
   font-weight: 500;
}
.list-text{
   font-weight: 400;
   line-height: 156.69%;
   font-size: 16px;
}
.login-footer{
   height: 175px;
   display: flex;
   justify-content: center;
}
.login-footer-container{
   display: flex;
   flex-direction: column;
}
.login-footer-menu{
   height: 87.5px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #FFFFFF;
}
.login-footer-text{
   height: 87.5px;
   font-weight: 400;
   line-height: 156.69%;
   color: #FFFFFF;
}
.login-footer-menu-list{
   display: flex;    
   font-weight: 500;
   font-size: 16px;
   line-height: 156.69%;
   list-style-type: none;
   color: #FFFFFF;
  
}
.button-li{
   margin-right: 20px;
} 
.login-footer-menu-logo{
   width: 55.99px;
   height: 35px;    
}
@media (max-width: 1164px) {
   [class*="-container"]{
   width: 500px;
   }
   .main-content-container{
     flex-direction: column;
   }
   .main-content-login {
      margin-top: 20px;
   }
   .login-footer-menu-logo{
     display: none;
   }
  
}
@media (max-width: 500px) {
   [class*="-container"]{
   width: 100%;    
   }
   .main-content-container{
     flex-direction: column;
   }
   .main-content-login {
      margin-top: 20px;
   }
   .login-footer-menu-logo{
     display: none;
   }
   .button{
     font-size: 18px;
   }
   .main-content-login{
     width:100%;   
   }
   h1{
     font-size: 30px;
   }
   .todo-login-main-header{
      height: 244px;
   }
   .login-footer-menu-list{
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-around;
   }
}
</style>