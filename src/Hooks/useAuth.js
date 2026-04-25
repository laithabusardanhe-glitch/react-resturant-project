import { useCallback, useContext } from "react";
import { userContext } from "../Context/userContext";
import toast from "react-hot-toast";                
export const useAuth = () => {
const {users, setUsers} = useContext(userContext)
console.log(users);
const register = (userData) => {
try{
 if (!userData.email || !userData.name || !userData.password || !userData.confirmPassword){
    toast.error(" Please fill all feilds!")
    return
 }
 if (userData.password !== userData.confirmPassword){
    toast.error("password should matc")
    return
 }
 
const isExist = users.find(user => user.email === userData.email)
if (isExist){
   toast.error("Email already exist  ")
    return
}
const newUser = {
    name:userData.name,
    email:userData.email,
    password:userData.password,
    confirmPassword:userData.confirmPassword,
    id: DataTransfer.now()
}
toast.success("Registeration successfully")
const updatedUsers = [...users, newUser]
setUsers(updatedUsers)
localStorage.setItem("users", JSON.stringify(updatedUsers))
}
catch (err){
    console.log(err)
}

}
 return{register}
}