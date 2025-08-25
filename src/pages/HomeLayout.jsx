import React, { useState } from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Header from "../components/Header";

const HomeLayout = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Header setShowForm={setShowForm} />
      <Hero setShowForm={setShowForm} />
      <Form showForm={showForm} />
    </div>
  );
};

export default HomeLayout;
