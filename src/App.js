import React from "react";
import Header from "./component/Header";
import Context from "./component/Context";
import Footer from "./component/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  min-height: calc(100vh - 48px);
  `

function App() {
  return (
    <div className="App">
    <Wrapper>
      <Header />
      <Context />
    </Wrapper>
    <Footer />
    </div>
  );
}

export default App;
