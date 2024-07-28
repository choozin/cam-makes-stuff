import { MenuProvider } from "../contexts/MenuContext";
import { GeneralProvider } from "../contexts/generalContext";

import Container from '../components/Container/Container'

export default function CatchAllPage() {
  return (

    <GeneralProvider>
      <MenuProvider>
        <Container />
      </MenuProvider>
    </GeneralProvider>
  );
}