import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/Banner";
import Complements from "../components/home/Complements";
import ExploreEvents from "../components/home/ExploreEvents";
import Footer from "../components/home/Footer";
import HomeGallary from "../components/home/HomeGallary";
import IntroAbout from "../components/home/IntroAbout";
import OurClients from "../components/home/OurClients";
import Navbar from "../components/Navbar";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beez Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Banner />
        <IntroAbout />
        <ExploreEvents />
        <Complements />
        <HomeGallary />
        <OurClients />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
