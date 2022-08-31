import {createContext} from "react";
type AuthContent = {
    auth: boolean
    setAuth:(c: boolean) => void
}
export const AuthContext = createContext<AuthContent>({
    auth: false,
    setAuth: ()=> {}
})