
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useConfigContext } from './ConfigContext';

import axios from "axios";
const TOKEN_KEY = "token_wdyt";
const UserContext = React.createContext();

export const UserContextProvider = (props) => {
    //Estado de token
    //Estado de datos del usuario
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const { startLoading, stopLoading } = useConfigContext();

    //efecto para verificar la existencia
    useEffect(() => {
        const resToken = getTokenLS();

        if(resToken){
            setToken(resToken);
        }
    }, []);


   //para verificar el usuario
   useEffect(() => {
    //obtener la info del usuario
    fetchUserInfo();
   }, [token])

   const fetchUserInfo = async () => {
    if(!token){
        return;
    }

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    startLoading();
    try {  
        const { data } = await axios.get("/auth/whoami");
        setUser(data);
    } catch (error) {
        logout()
        toast.error("Unexpected error");
    } finally{
        stopLoading();
    }
   }


    //funcion para login 
    //funcion para logout
    //funcion para register
    const login = async (identifier, password) => {
        startLoading();
        try {
           const { data } = await axios.post("/auth/signin", { identifier, password});
           const resToken = data.token;

           setToken(resToken);
           setTokenLS(resToken);

           toast.success("Signin successful");
        } catch (error) {
            const {status} = error.response || { status: 500};
            const msgs = {
                "404": "User not found",
                "401": "Unauthorized",
                "404": "Unexpected error",
            }
            // logout
            toast.error(msgs[String(status)]);
        } finally{
            stopLoading();
        }
    }


    const logout = () => {
        removeTokenLS();
        setToken(null);
        setUser(null);
    }

    const register = async (username, email, password) => {
       startLoading();
        try {
            await axios.post("/auth/signup", {username, email, password});
            toast.success("Signup successful");
        } catch (error) {
            const { status } = error.response || {status: 500};
            const msgs = {
                "400": "Wrong Fields",
                "409": "User already exists",
                "500": "Unexpected error",
            }

            logout();
            toast.error(msgs[String(status)]);
        } finally {
            stopLoading();
        }
    }

    const state = {
        token,
        user,
        login,
        logout,
        register
    }

    return <UserContext.Provider value={state} { ... props}  />
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext Must be call inside");
    }
    return context;
}

const setTokenLS = (token) => localStorage.setItem(TOKEN_KEY, token);
const getTokenLS = () => localStorage.getItem(TOKEN_KEY);
const removeTokenLS = () => localStorage.removeItem(TOKEN_KEY);
