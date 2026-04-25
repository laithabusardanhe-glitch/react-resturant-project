import { createContext, useEffect, useState } from "react";
export const userContext = createContext();

export default function UserProvider({children}){
    const [users, setUsers] = useState([])

//localStorage.setItem("users", JSON.stringify(users));

useEffect(() => {
const allUsers = JSON.parse(localStorage.getItem("users")) || [];
if (allUsers){
    setUsers(allUsers);
}

}, []);
return(
    <usersContext.Provider value={ {users, setUsers}}>

      {children}

    </usersContext.Provider>
);

}