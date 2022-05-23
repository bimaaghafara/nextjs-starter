import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        const privatePaths = ['/', '/home', '/test'];
        const path = url.split('?')[0];

        // TODO: add logic isLogin
        const isLogin = false;

        if (!isLogin && privatePaths.includes(path)) {
            const addReturnUrl = router.asPath && router.asPath !== '/';
            const returnUrl = router.asPath;
            const query = { ...(addReturnUrl && { returnUrl })}
            setAuthorized(false);
            router.push({ pathname: '/login', query });
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children);
}