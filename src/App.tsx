import React, { Fragment } from "react";

import { Content } from "./styles/elements";
import { Pokerama } from "./pages/Pokerama";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Content>
          <Pokerama />
        </Content>
      </Layout>
    </Fragment>
  );
}

export default App;
