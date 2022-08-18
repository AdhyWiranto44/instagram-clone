import Script from "next/script";
import Navbar from "../components/navbar";
import PostModal from "../components/post_modal";

export default function DirectMessage() {
  return (
    <>
      <div className="mb-10">
        <Navbar />
        <div id="main" className="container mx-auto lg:px-40 mt-0 md:mt-6">
          <div className="bg-white border rounded-md p-3">
            <h1>Direct Message Page</h1>
          </div>
        </div>
      </div>
    </>
  );
}