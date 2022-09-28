import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Services;
