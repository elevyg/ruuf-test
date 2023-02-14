import { Poppins } from "@next/font/google";
import { type NextPage } from "next";
import Head from "next/head";


const popins = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Home: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Ruuf Test</title>
        <meta name="description" content="A project to get accepted at Ruuf!☀️" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={"flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary " + popins.variable}>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            H☀️la <span className="text-primary">Ruuf</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;

