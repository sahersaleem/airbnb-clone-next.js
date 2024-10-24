import Image from "next/image";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SecondNavBar from "./components/SecondNavBar";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <div className="h-screen w-full bg-white">

<Navbar/>
<SecondNavBar/>
   <Card/>
   <Footer/>




  </div>
  );
}
