import React, { useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    localStorage.setItem("workers",JSON.stringify(workers))
  }, [workers]);
//uygulama çalıştığında workers listesini localStrorage a attı [] depc içine workers stateini
//yazdık ve her workers da değişiklik olduğunda çalışsın dedik
  return (
    <React.Fragment>
      <h1 className=" text-white text-center mt-6 txt-3xl">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </React.Fragment>
  );
}

export default App;
