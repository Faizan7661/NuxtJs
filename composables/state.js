import { reactive } from "vue";

export const users = () => reactive([
  {
    id: 1,
    name: "Faizan",
    email: "faizan@gmail.com",
    password: "faizan@123",
    status: false,
  }
]);

export const logInStatus=()=>useState(()=>false);
export const userLoggedIn=()=>useState(()=>"")