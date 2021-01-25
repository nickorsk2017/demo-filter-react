import '../styles/globals.css';
import { AppProps } from 'next/app'
import {ProvidersWrapper} from "../system";

function MyApp({ Component, pageProps } : AppProps) {
  return <ProvidersWrapper>
    <Component {...pageProps} />
  </ProvidersWrapper>
}
export default MyApp;