import { useEffect } from "react";

import homeService from './service';

const Home = () => {
    useEffect(() => {
        homeService.getUsers()
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    });

    return (
        <div>homepage</div>
    );
}

export default Home;