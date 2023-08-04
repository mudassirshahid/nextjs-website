// import Navbar from "@/components/Navbar";
// import { useRouter } from "next/router";

// const pageNo1 = () => {
//   const router = useRouter();
//   const pageNumber = router.query.pageNo1;
//   return (
//     <>
//       <Navbar />
//       <h1>My Blog {pageNumber} Content</h1>
//     </>
//   );
// };

// export default pageNo1;


import Navbar from "@/components/Navbar";

// API DATA
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <div className="text-center mt-10 p-3 bg-violet-700 border">
        <h3>{id}</h3>
        <h3>{title}</h3>
        <h3>{body}</h3>
      </div>
    </>
  );
};

export default myData;

