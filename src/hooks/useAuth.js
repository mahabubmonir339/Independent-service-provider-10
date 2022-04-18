import { useContext } from "react"
import { AuthContext } from "../Context/AuthPro";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;