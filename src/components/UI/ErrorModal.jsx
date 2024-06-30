import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50">
      <Card className="w-[36rem] !p-0 z-20">
        <header className="bg-red-700 p-4 rounded-t-xl">
          <h2 className="text-center text-xl text-white">{props.title}</h2>
        </header>
        <section className="p-4">{props.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={props.onConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { onConfirm, error, setWorkers } = props;
  const { title, message } = error;
  const cleanupRef = useRef();

  useEffect(() => {
    console.log("error modal oluşturuldu");
    
    return () => {
      if (cleanupRef.current) {
        console.log("error modal kaldırıldı");
        setWorkers([]);
      }
    };
  }, [cleanupRef, setWorkers]);

  //sadece component kaldırıldığında çalışacak
  //alttaki kod olmadan error modal oluşturulduğunda modal kaldırıldı diyordu
  //bunu şarta bağladık ve sadece error modal kapanınca true yapsın üstteki çalışsın dedik
  useEffect(() => {
    return () => {
      cleanupRef.current = true;
    };
  }, []);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("errorModal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
