import FilterSidebar from "./component/FilterSidebar";
import Nav from "./component/nav";


export default function Home() {
  return (
    <div className="">
      <Nav />
      <main className="mt-5">
        <FilterSidebar />
      </main>
    </div>
  )
}
