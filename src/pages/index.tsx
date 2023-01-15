/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import Table from "./../components/Table";

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center p-4">
      <Table />
    </div>
  );
};

export default Home;
