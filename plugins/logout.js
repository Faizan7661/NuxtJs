export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.logout=()=>{
        const status=logInStatus();
        status.value=false;
        const userLogged=userLoggedIn();
        userLogged.value="";
        console.log( status.value+" "+userLogged.value)
        if(status.value===false ){
            console.log("hiii")
            navigateTo("/login")
        }
    }
})