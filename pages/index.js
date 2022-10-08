import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <main className="h-screen">
        <Navbar />
        <div className="flex flex-1 justify-center items-center h-3/4">
          <div className="text-center transition ease-in-out duration-500 hover:text-black px-16">
            <p className="text-sm mt-2">this will be a dashboard.</p>
            <p className="text-sm mt-2">
              the things you list in the marketplace can be found here.
            </p>
            <p className="text-sm mt-2">
              now you only need one place to know where everything is at.
            </p>
          </div>
        </div>
        {/* <div className="mx-4 py-4">
          <ThingTable />
        </div> */}
      </main>

      <footer></footer>
    </div>
  );
}
