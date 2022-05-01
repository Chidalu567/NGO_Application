import { Layout } from "../Components/Layout";
// font awesome disable css addition
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

