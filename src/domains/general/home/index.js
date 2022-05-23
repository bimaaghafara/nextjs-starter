import { useEffect } from "react";

import Layout from 'src/components/layout';
import homeService from './service';


const Home = () => {
    useEffect(() => {
        homeService.getUsers()
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <Layout>
            <div>homepage</div>
        </Layout>
    );
}

export default Home;