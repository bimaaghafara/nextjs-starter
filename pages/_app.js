import 'styles/globals.css';
import RouteGuard from 'src/components/routhGuard';

function MyApp({ Component, pageProps }) {
  return (
    <RouteGuard>
      <Component {...pageProps} />
    </RouteGuard>
  );
}

export default MyApp
