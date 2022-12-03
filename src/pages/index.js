import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Import Components
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Slightly Curious Studio</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <h1>The Slightly Curious</h1>
      </main>
    </>
  );
}
