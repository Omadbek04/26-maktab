import { Link } from "react-router-dom";

const MakabJaqida = () => {
  return (
    <div className=" flex items-center flex-col justify-center px-4 pt-8 pb-8">
      <h1 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl ">Andijon viloyati Baliqchi tumani 26-sonli umumiy o’rta talim maktab</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
        1965- yilda tashkil etilgan. Maktabimiz 750 o‘rinli, umumiy maydoni 7.3 ga ni tashkil etadi, 80 o‘rinli oshxona ,12×30 sport zal hamda sport maydonchalari, 150 o’rinli Faolar zali, 9352 dona o’quv hamda badiiy adbiyotlar bilan ta’minlangan Axborot-resurs markazi faoliyat yuritib kelmoqdda. Hozirda maktabimizda 50 dan ziyod o’qituvchilar talim berib ,500 ga yaqin o’quvchilar talim olmoqda. Maktabimizda “Avtomobillarga texnik xizmat ko‘rsatish” ustaxona jihozlari, Polsha krediti asosida “Tikuvchilik ishlab chiqarish” ustaxona jihozlari, davlat byudjeti asosida “Metallarga ishlov berish”, “Chilangarlik ishi”, “Elektrchilangarlik ishlari”, “Elektrmontaj ishlari”, “Payvandlash ishlari”, “Umumqurilish ishlari” ustaxona jihozlari bilan
      </p>
      <Link to={"/"} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Yana
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
    </div>
  );
};

export default MakabJaqida;
