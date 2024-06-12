import React from "react";
import Button from "./Button";

const ErrorModal = () => {
  return (
    <div>
      <header>
        <h2>İsim Alanı Zorunludur</h2>
      </header>
      <section>Lütfen bir isim giriniz.</section>
      <footer>
        <Button>Tamam</Button>
      </footer>
    </div>
  );
};

export default ErrorModal;
