<template>
  <div class="welcome container">
      <p class="welcome-text">Welcome to the chatroom!</p>
      <svg class="user-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
      <div v-if="showLogin">
          <LoginForm @login="enterChat"/> 
          <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
      </div>
      <div v-else>
           <SignupForm @signup="enterChat"/>  
           <p>Already registered? <span @click="showLogin = true">Log in</span> instead</p> 
      </div>
      
      
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
export default {
components: {SignupForm,LoginForm},
setup(){
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({name: 'Chatroom'})
    }
    return {showLogin,enterChat}

}

}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  .welcome span{
      font-weight: bold;
      cursor: pointer;
      text-decoration: underline;
  }
  .welcome button{
      margin: 20px auto;
  }
  .welcome-text{
    font-weight:bold;
    font-size: 1.4rem;
  }

  .user-icon{
   transform: scale(2);
  }
</style>