import { useUserStore } from "~/store/user";


export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

    const status = userStore.logInStatus
  
    if (status === false && to.path !== "/login" && to.path !== "/signUp") {
      return navigateTo("/login");
    } else if (status === true && to.path === "/signUp") {
      return navigateTo("/");
    }
    else if (status === true && to.path === "/login") {
        return navigateTo("/");
      }
  });
  