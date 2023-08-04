import Navbar from "@/components/Navbar"
import styles from "../styles/index.module.css"

const home = () => {
  return (
    <>
    <Navbar />
      <h1 className={styles.home}>Welcome to home</h1>
    </>
  )
}

export default home
