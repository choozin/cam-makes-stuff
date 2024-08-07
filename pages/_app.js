import '../styles/globals.css'

import { MenuProvider } from "../contexts/MenuContext";
import { GeneralProvider } from "../contexts/generalContext";

function MyApp({ Component, pageProps }) {
  return (

    <GeneralProvider>
      <MenuProvider>
        <Component {...pageProps} />

      </MenuProvider>
    </GeneralProvider>
  )
}

export default MyApp
