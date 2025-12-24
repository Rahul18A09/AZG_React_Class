import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import MyCard from "./component/MyCard";
import Layout from "./component/Layout";
import Login from "./component/Login";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      {/* <MyCard /> */}
      {/* <Layout /> */}
      {/* <Login /> */}

      <Header />

      <Container fluid className="mt-3">
        <Row>
          <Col md="3" className="border-end">
            <SideBar />
          </Col>
          <Col md="9" >
            <Content />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
