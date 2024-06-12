import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
const AddWorker = () => {
  const [enteredWorkerName,setEnteredWorkerName] = useState("")
  const [enteredWage,setEnteredWage] = useState("")
  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value)
  }
  const workerWageChangeHandler = (e) => {
    setEnteredWage(e.target.value)
  }
  const addWorkerHandler = (e) =>{
    e.preventDefault()//sayfanın yenilenmesini engelliyor
    console.log(enteredWorkerName +" "+ enteredWage);
  }
  return (
    <Card className=" mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Çalışan ismi yazınız"
          id="name"
          onChange={workerNameChangeHandler}
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı yazınız"
          id="wage"
          onChange={workerWageChangeHandler}
        />
        <Button className="mt-2 bg-yellow-600" type="submit">
          Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;
