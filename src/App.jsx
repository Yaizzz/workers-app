import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  return (
    <div className="App">
      <h1 className=" text-white text-center mt-6 txt-3xl">Maaş Otomasyonu</h1>
      <AddWorker />
      <WorkerList workers={[]} />
    </div>
  );
}

export default App;
