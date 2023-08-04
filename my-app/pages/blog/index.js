import Navbar from "@/components/Navbar";
import Link from "next/link";

// FETCH API DATA USING NEXT JS HOOK
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    }
  };
};
const Blog = ({data}) => {
  return (
    <>
    <Navbar />
    {/* INLINE STYLE */}
      {/* <h1 style={{color: "green"}}>Blog Page</h1> */}
      <h1>Blog Page</h1>
      <p className="follow">Follow</p>
      <style>
        {`
        h1 {
          color: green;
          background: white;
          text-align: center;
        }
        .follow {
          color: cyan;
          text-align: center;
        }
        `}
      </style>
      {/* API DATA */}
      {data.slice(0,5).map((curElem) => {
        return (
          <div className="text-center mt-10 p-3 bg-violet-700 border" key={curElem.id}>
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
            <h3>{curElem.title}</h3></Link>
          </div>
        )
      })}
    </>
  )
}

export default Blog

//YOU CAN SIMPLY ADD FILES/PAGES LIKE HOME.JS ABOUT.JS CONTACT.JS THEY WILL ROUTE AUTO IN NEXT JS
//AND IF WE CREATE FOLDER LIKE BLOG OR ADD FILE IN THIS FOLDER WE CAN ACCESS THIS PAGE JUST WRITE IN URL /BLOG BUT THE FILE NAME IN FOLDER SHOULD BE NAME LIKE INDEX.JS 
//AND FOR NESTED ROUTING YOU CAN SIMPLY ADD FILES LIKE THIS BLOG1 OR BLOG2 THEN ACCESS LIKE THIS /BLOG/BLOG1
//FOR DYNAMIC ROUTING WE USE [] BRACKETS AND FILE NAME IN THIS BRACKET FOR DYNAMIC ROUTING FOR THIS WE USE USEROUTER HOOK
// TO SEE THE DYNAMIC ROUTING OPEN FILE [pageNo].js
