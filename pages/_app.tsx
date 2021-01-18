import '../styles/globals.css';
import {ProvidersWrapper} from "../system";

function MyApp({ Component, pageProps }) {
  return <ProvidersWrapper>
    <Component {...pageProps} />
  </ProvidersWrapper>
}
export default MyApp;