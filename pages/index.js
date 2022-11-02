import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import ThingTable from "../components/ThingTable";

export default function Home() {
  return (
    <div>
      <Head>
        <title>everything | dashboard</title>
      </Head>
      <main className="h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Navbar />
        {/* <div className="flex flex-1 justify-center items-center h-3/4">
          <div className="text-center transition ease-in-out duration-500 hover:text-black px-16">
            <p className="text-sm mt-2">this will be a dashboard.</p>
            <p className="text-sm mt-2">
              the things you list in the marketplace can be found here.
            </p>
            <p className="text-sm mt-2">
              now you only need one place to know where everything is at.
            </p>
          </div>
        </div> */}
        <div className="mx-4 py-4">
          <ThingTable />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
