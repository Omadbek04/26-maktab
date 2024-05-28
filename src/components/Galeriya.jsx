import { card } from "../constants";

const Galeriya = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {card.map((item) => {
            return (
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 " key={item.id}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className=" object-cover h-[350px] w-full cursor-pointer transition-all duration-150" src={item.image} />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">26-Maktab</h2>
                <p className="text-base leading-relaxed mt-2">26-maktab bitivuvchilarining so'ngi qo'ng'iroq bayramiga bag'ishlangan tadbiri</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Galeriya;
