import axios from "axios";
import { useState } from "react";

export const useAuth = () => {
    
    const [user, setUser] = useState(null)

    const signIn = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/login', data);
            let userObj = { ...authresult.data?.foundUser };
            userObj.token = authresult.data?.encodedToken;
            setUser(userObj);
        } catch (err) {
            console.error(err);
        }
    };

    const signUp = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/signup', data);
            let userObj = { ...authresult.data?.createdUser };
            userObj.token = authresult.data?.encodedToken;
            setUser(userObj);
        } catch (err) {
            console.error(err);
        }
    };

    const signOut = () => {
        setUser(null);
    };

    return { user, signIn, signUp, signOut };
};