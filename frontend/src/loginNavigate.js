const signIn = async (data) => {
    try {
        let authresult = await axios.post('/api/auth/login', data);
        let userObj = { ...authresult.data?.foundUser };
        userObj.token = authresult.data?.encodedToken;
        setUser(userObj);
        toastsuccess("Login Successfull")
        navigate(location.state.from || '/')
    } catch (err) {
        console.error(err);
        toasterror("Login Failed")
    }
};