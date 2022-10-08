import Header from "../components/Header";
import ThingTable from "../components/ThingTable";

export default function Home() {
  return (
    <div>
      <main className="h-screen">
        <Header />
        <div className="mx-4 py-4">
          <ThingTable />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
