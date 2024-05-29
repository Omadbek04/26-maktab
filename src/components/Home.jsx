import { home, h2, h3, h4, t1, t2, t3 } from "../assets"; // Ensure paths to assets are correct

const Home = () => {
  return (
    <>
    <div className=" bg-image">
    <h1 className=" text-white text-[40px] text-center md:text-6xl  leading-9 tracking-wide font-bold">Andijon viloyati Baliqchi tumani 26-sonli umumiy <br /> o’rta ta'lim maktabi </h1>
    </div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">26-maktab to'garaklari</h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img src={t1} alt="Adabiyot to'garagi" className="rounded-lg w-full h-[260px] object-cover" loading="lazy" />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">Adabiyot to'garagi</h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">26-maktab</h6>
                  <span className="text-sm text-indigo-600">2024 yil</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img src={t2} alt="Matematika to'garagi" className="rounded-lg w-full h-[260px] object-cover" loading="lazy"/>
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">Matematika to'garagi</h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">26-maktab</h6>
                  <span className="text-sm text-indigo-600">2024 yil</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img src={t3} alt="Deksikologiya to'garagi" className="rounded-lg w-full h-[260px] object-cover" loading="lazy" />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">Deksikologiya to'garagi</h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">26-maktab</h6>
                  <span className="text-sm text-indigo-600">2024 yil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
