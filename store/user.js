import {defineStore} from 'pinia'
import {ref, computed} from 'vue';

export const useUserStore = defineStore('userStore',()=>{
    let users = ref([{
        
            id: 1,
            name: 'Faizan',
            email: 'faizan@gmail.com',
            password: 'faizan@123',
            status: false,
          
    }])
    
    let logInStatus = ref(false)

  
    let userLoggedIn = ref(null)
    const error = ref('');
    let userFound = ref(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const registerUser = (name, email, password) => {
        if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
          if (emailRegex.test(email) && passwordRegex.test(password)) {
            const found = users.value.find((x) => x.email === email);
            if (!found) {
              const newUser = {
                id: users.length + 1,
                name: name,
                email: email,
                password: password,
                status: false,
              };
              users.value.push(newUser);
              alert('User registered successfully');

              return navigateTo('/login');
            } else {
              alert('User already exists');
              return false;
            }
          }
        } else {
          alert('Fill out every detail');
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Password:', password);
          return false;
        }
      };

      const loginUser = async (email, password) => {
        const userIndex = users.value.findIndex((x) => x.email === email);
        if (userIndex !== -1 && users.value[userIndex].password === password) {
           users.value.splice(userIndex, 1, { ...users.value[userIndex], status: true });
           logInStatus.value = true;
           userLoggedIn.value = users.value[userIndex];
           error.value = false;
           userFound.value = true;
           alert('User logged in successfully');
           await navigateTo('/');
           return
        } else {
            error.value = !error.value; 
        }
       };
       
       


      
      return {
        users,
        logInStatus,
        userLoggedIn,
        registerUser,
        loginUser,
      };





})
