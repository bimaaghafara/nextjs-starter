import { useEffect } from "react";

import Layout from 'src/components/Layout';
import { getUsers } from './services';


const Home = () => {
    useEffect(() => {
        getUsers()
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