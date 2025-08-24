import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
    </div>
  );
};

export default HomeLayout;
