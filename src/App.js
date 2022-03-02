import "./App.css";
import BasicTable from "./components/BasicTable";
import FilterColumnWise from "./components/FilterColumnWise";
import FilterGlobally from "./components/FilterGlobally";
import Pagination from "./components/Pagination";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <FilterGlobally /> */}
      {/* <FilterColumnWise /> */}
      {/* <SortingTable /> */}
      <Pagination />
    </div>
  );
}

export default App;
