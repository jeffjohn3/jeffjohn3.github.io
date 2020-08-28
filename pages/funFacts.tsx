import NavBar from "../components/navBar";
import Projects from "../components/projects";
import React from "react";
import Header from "../components/header";
import Books from "../components/books";
import Footer from "../components/footer";
import FunFacts from "../components/funFacts";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <NavBar />
        <Books />
        <FunFacts />
        <Footer />
      </main>
    </React.Fragment>
  );
}
