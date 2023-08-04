import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

const about = () => {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    <Navbar />
      <h1 className="text-center mt-10 text-2xl text-opacity-100 text-teal-300">About page</h1>
      {/* INTERNAL IMAGE THROUGH IMAGE COMPONENT IN NEXT AND WIDTH PROPERTY MANDATORY TO WRITE */}
      <Image src="/home-bg.jpg" className="pt-6 m-auto" width={1000}
      height={1000}
      alt="banner" />
      {/* FOR EXTERNEL LINK ADD IMAGE AND DOMAIN FOR EXTERNAL SOURCE IN NEXT.CONFIG.JS  */}
      <Image src="https://images.unsplash.com/photo-1690722763462-2ca402aa163f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="pt-6 m-auto" width={1000}
      height={1000}
      alt="banner" /> 
    </>
  )
}

export default about
