import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddWorker = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();
  const minimumWage = 5000;

  useEffect(() => {

  },[])

  const addWorkerHandler = (e) => {
    e.preventDefault();//sayfanın yenilenmesini engelliyor
    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim alanı zounludur",
        message: "Lütfen bir isim giriniz",
      });
      return;
      //+ numbere çeviriyor
    }
    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Maaş alanı zounludur",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş giriniz`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        /* bu değerleri böyle set edersek ilk eklemeden sonra ref altta değerleri boşalttığımız için
        boş değerleri alıp doldurulan değeri önemsemez
        name: nameInputRef.current.value,
        wage: wageInputRef.current.value,
        */
       name:enteredName,
       wage:enteredWage
      },
      ...prevState,
    ]);
    //sıfırlama burda böyle o.i kendimiz değer yazınca boş atıyor üstte değişkene atadık o değişkenleri verdik
    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
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
            ref={nameInputRef}
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan ismi yazınız"
            id="name"
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            ref={wageInputRef}
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı yazınız"
            id="wage"
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
