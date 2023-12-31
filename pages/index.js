import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
        </title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="ad-1 mx-10">
        <div className=" my-14">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="mobile-ad1 h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="mobile-ad2 h-40 w-full"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
