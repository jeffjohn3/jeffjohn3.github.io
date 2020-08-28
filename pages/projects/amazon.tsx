import React from "react";
import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Projects from "../../components/projects";
import Section from "../../components/section";
import Footer from "../../components/footer";
import { Content } from "../../src/content";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <NavBar />
        <img src="/imgs/projects/amazon.jpg" style={{ width: "100%" }} />
        <Footer />
      </main>
    </React.Fragment>
  );
}
