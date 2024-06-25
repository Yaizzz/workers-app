import React from "react";
import Card from "../UI/Card";

const WorkerList = (props) => {
  const {workers , setWorkers} = props

  //workers boşsa WorkerList çalışmayacak
  if(workers.length < 1){
    return;
  }


  //filter burada tıklanan id yi aldı id ile eğer id tıklanan id değilse döndür dedik
  //item her dönülen değeri temsil eder
  const deleteWorker = (id) => {
    setWorkers(
      workers.filter((item) => item.id !== id)
    );
  };
  return (
    <Card className="mt-10">
      <ul>
        <li className=" flex justify-between p-2">
          <span className=" font-bold">İsim</span>
          <span className=" font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            className=" flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow"
            key={worker.id}
            //dönen id yi almak için arrow func yaptık yoksa olmaz 
            onClick={() => deleteWorker(worker.id)}
          >
            <span>{worker.name}</span>
            <span className=" text-teal-700 font-medium">{worker.wage}₺</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
