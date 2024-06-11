import Card from "../UI/Card";
const AddWorker = () => {
  return (
    <Card className=' mt-10'>
      <form className="flex flex-col gap-y-2">
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Çalışan ismi yazınız"
          id="name"
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı yazınız"
          id="wage"
        />
        <button className="p-2 text-lg bg-teal-700 text-white mt-2">
          Ekle
        </button>
      </form>
    </Card>
  );
};

export default AddWorker;
