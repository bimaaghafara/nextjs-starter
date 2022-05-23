import { useEffect } from "react";

import { getUsers } from './services';

const Login = () => {
    useEffect(() => {
        getUsers()
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