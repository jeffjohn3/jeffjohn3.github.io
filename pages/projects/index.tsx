import React from "react";
import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Projects from "../../components/projects";
import Section from "../../components/section";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <NavBar />
        <Projects />
        <Footer />
      </main>
    </React.Fragment>
  );
}
