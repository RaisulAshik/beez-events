import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
const AboutUsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default AboutUsPage;
