export default defineNuxtRouteMiddleware((to, from) => {
    const status = logInStatus();
  
    if (status.value === false && to.path !== "/login" && to.path !== "/signUp") {
      return navigateTo("/login");
    } else if (status.value === true && to.path === "/signUp") {
      return navigateTo("/");
    }
    else if (status.value === true && to.path === "/login") {
        return navigateTo("/");
      }
  });
  