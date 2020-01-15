import React from 'react';
import {Container} from "reactstrap";

const Layout = ({children}) => (
  <Container>
    <main className="Layout-Content">
        {children}
    </main>
  </Container>
);

export default Layout;
