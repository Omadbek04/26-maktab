import { Link } from "react-router-dom";
import { y1, y2, y3 } from "../assets";

const Yangiliklar = () => {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">26-maktab Yangiliklari</h2>
        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
            <div className="flex items-center mb-6">
              <img src={y1} alt="Harsh image" className="rounded-lg w-full h-[260px] object-cover"  />
            </div>
            <div className="block">
              <h4 className="text-gray-900 font-medium leading-8 mb-9">Maktabimiz bu yilgi Open Budget 2024 loyihasida g'olib chiqdi</h4>
              <div className="flex items-center justify-between  font-medium">
                <h6 className="text-sm text-gray-500">26-maktab.</h6>
                <span className="text-sm text-indigo-600">2024 yil</span>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
            <div className="flex items-center mb-6">
              <img src={y2} alt="John image" className="rounded-lg w-full h-[260px] object-cover" />
            </div>
            <div className="block">
              <h4 className="text-gray-900 font-medium leading-8 mb-9">Maktablarda bitiruvchilar uchun yakuniy davlat imtihoni bo'lib o'tmoqda.</h4>
              <div className="flex items-center justify-between  font-medium">
                <h6 className="text-sm text-gray-500">26-maktab</h6>
                <span className="text-sm text-indigo-600">2024 yil</span>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
            <div className="flex items-center mb-6">
              <img src={y3} alt="Alexa image" className="rounded-lg w-full h-[260px] object-cover" />
            </div>
            <div className="block">
              <h4 className="text-gray-900 font-medium leading-8 mb-9">bitiruvchilarning ota onalari bitiruv tadbiriga taklif etildi</h4>
              <div className="flex items-center justify-between  font-medium">
                <h6 className="text-sm text-gray-500">26-maktab</h6>
                <span className="text-sm text-indigo-600">2024 yil</span>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/galeriya"} className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">
          View All
        </Link>
      </div>
    </section>
  );
};

export default Yangiliklar;
