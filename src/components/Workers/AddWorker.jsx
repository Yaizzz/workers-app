import React ,{ useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();
  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault(); //sayfanın yenilenmesini engelliyor
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "İsim alanı zounludur",
        message: "Lütfen bir isim giriniz",
      });
      return;
      //+ numbere çeviriyor
    }
    if (+enteredWage < minimumWage) {
      setError({
        title: "Maaş alanı zounludur",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş giriniz`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredWorkerName("");
    setEnteredWage("");
  };
  //bu errorun içini boşaltıyor errormodalda yer alan butona veya blurlu yere tıklanınca
  //error boş oluyor ve true ise çalışacak olan yer çalışmıyor
  const errorHandler = () => {
    setError(null);
  };
  return (
    //<></> sarmalayıcı olarak boş da yapılabilir
    //<React.Fragment></React.Fragment> bu da bir çözümdür biriken divler için
    <Wrapper>
      {/* error true ise şunu çalıştır dedik*/}
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
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
            onChange={(e) => setEnteredWorkerName(e.target.value)}
            value={enteredWorkerName}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı yazınız"
            id="wage"
            onChange={(e) => setEnteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddWorker;
