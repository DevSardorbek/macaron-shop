import React, { useState } from "react";
import Modal from "./components/modal/Modal";
import Products from "./components/products/Products";
import SubHeader from "./components/subHeader/SubHeader";
import SupHeader from "./components/supHeader/SupHeader";
import Single from "./components/single/Single";
import Footer from "./components/footer/footer";
import "./sass/style.scss";

function App() {
  const [single, setSingle] = useState(false);
  return (
    <>
      <SupHeader />
      <SubHeader />
      <Products />

      {single ? (
        <Modal width={"70%"} close={setSingle}>
          <>
            <Single />
          </>
        </Modal>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}

export default App;
