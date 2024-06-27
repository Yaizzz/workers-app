import React, { useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  //bununlar localStrage da veri varsa ilk değer olarak o veriyi al .parse ile JSON ı js çevir ve kullan yoksa boş dizi al
  //sayfayı yenileyince veri kalsın diye yaptık
  const [workers, setWorkers] = useState(localStorage.getItem("workers") 
  ? JSON.parse(localStorage.getItem("workers")) 
  : []
);

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);
  //hiç depc [] olmazsa hep çalışır , [] olursa bir kere [workers] ilk açıldığında ve workers değişince
  //uygulama çalıştığında workers listesini localStrorage a attı [] depc içine workers stateini
  //yazdık ve her workers da değişiklik olduğunda çalışsın dedik

  // useEffect(() => {
  //   console.log("run");
  // }, []);
  
  return (
    <React.Fragment>
      <h1 className=" text-white text-center mt-6 txt-3xl">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </React.Fragment>
  );
}

export default App;
