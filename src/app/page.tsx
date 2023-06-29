import FilterSidebar from "./component/FilterSidebar";
import JobList from "./component/JobList";
import Nav from "./component/nav";


export default function Home() {
  return (
    <div className="">
      <Nav />
      <main className="mt-5">
        <FilterSidebar />
        <JobList />
      </main>
    </div>
  )
}
