import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const ErrorPage = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  }

  // USING THIS HOOK OUR HOMEPAGE AUTOMATICALLY APPEAR IF USER WRITE WRONG ANYTHING IN URL BUT WE SET SOME TIME TO SHOW HOME PAGE
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
     <Navbar />
      <div className="flex justify-center mt-[150px] pb-12">
        <div className="error-content">
        <h2 className="text-5xl mb-10">We are sorry, Page not found!</h2>
        <button className="bg-teal-500 flex m-auto px-[20px] py-[10px] rounded-2xl hover:bg-teal-950">
          {/* <Link href="/">Back To Homepage</Link> */}
          {/* REDIRECT TO HOMEPAGE BY USING ONCLICK JS FUNCTION 1ST WAY  */}
          {/* <a onClick={() => router.push("/")}>Back To Homepage</a> */}
          {/* 2ND WAY */}
          <a onClick={handleInput}>Back To Homepage</a>
        </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

//FILE NAME SHOULD BE 404.JS
