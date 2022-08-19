import Navbar from "../../components/navbar";
import {
  BsPencilSquare,
  BsChevronDown,
  BsChatText,
} from 'react-icons/bs'
import MessageItem from "../../components/message_item";

export default function Direct() {
  const messages = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const renderMessages = () => messages.map((m, idx) => <MessageItem key={idx} item={m} />)

  return (
    <>
      <div className="mb-10">
        <Navbar />
        <div id="main" className="container mx-auto lg:px-36 mt-0 md:mt-6">
          <div className="bg-white border rounded-md flex">
            <div id="message_list" className="w-full md:w-4/12 md:border-r overflow-auto" style={{ height: "85vh" }}>
              <div id="header" className="bg-white sticky top-0 flex justify-between items-center px-6 py-5 border-b">
                <button className="font-bold mx-auto -mt-2">
                  <p className="inline mr-2">mina_sr_my</p>
                  <BsChevronDown className="inline" />
                </button>
                <BsPencilSquare className="text-xl" />
              </div>
              <div id="messages" className="py-2">
                {renderMessages()}
              </div>
            </div>
            <div id="chat" className="hidden md:flex md:w-9/12 justify-center items-center">
              <div className="">
                <BsChatText className='mx-auto text-8xl' />
                <div className="text-center my-4">
                  <p className="text-2xl font-light">Your Messages</p>
                  <p className="font-light">Send private photos and messages to a friend.</p>
                </div>
                <button className='block mx-auto bg-blue-500 px-3 py-1 rounded-md text-white text-sm'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}