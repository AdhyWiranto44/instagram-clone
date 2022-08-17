import Script from "next/script";
import Navbar from "../components/navbar";
import PostModal from "../components/post_modal";

export default function Explore() {
  return (
    <>
      <div className="mb-10">
        <Navbar />
        <div id="main" className="container-fluid lg:px-40 xl:px-56 mt-0 md:mt-6">
          <h1>Explore Page</h1>
        </div>
      </div>
    </>
  );
}