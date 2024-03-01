import { useUserStore } from "~/store/user";

export default defineNuxtPlugin((nuxtApp)=>{
    const userStore = useUserStore()
    nuxtApp.logout=()=>{
        let status = userStore.logInStatus
        status=false;
        let userLogged=userStore.userLoggedIn
        userLogged="";
        console.log( status+" "+userLogged)
        if(status===false ){
            console.log("hiii")
            navigateTo("/login")
        }
    }
})