import Head from "next/head";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "../components/navBar";
import Banner from "../components/banner";
import SocialMedia from "../components/socialMedia";
import About from "../components/about";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <NavBar />
        <Banner />
        <SocialMedia />
        <About />
        <Footer />
      </main>
    </React.Fragment>
  );
}
