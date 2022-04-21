import { useEffect } from "react";

import loginService from './service';

const Login = () => {
    useEffect(() => {
        loginService.getUsers()
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>loginpage</div>
    );
}

export default Login;