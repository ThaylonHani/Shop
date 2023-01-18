import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.css';
import { Head } from '../src/infra/Head';
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (<CartProvider>
    <Head/>
    <Component {...pageProps}/>
    </CartProvider>
  )
}

export default MyApp
