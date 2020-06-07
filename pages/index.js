import Head from "next/head";
import React from "react";
import List from "../components/List";
import TodoForm from "../components/Form";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>My todo list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <List></List>
        <TodoForm></TodoForm>
      </main>
    </div>
  );
};
export default Home;
