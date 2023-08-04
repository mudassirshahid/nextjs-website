import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className="text-center pt-[50px]">
        <ul className="flex gap-x-8 justify-center align-middle text-xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
