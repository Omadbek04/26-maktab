import { ustozlar } from "../constants";

const Oqtuvchilar = () => {
  return (
    <div className=" container mx-auto grid grid-cols-1 xl:grid-cols-2">
      {ustozlar.map((item) => {
        return (
          <div key={item.id} className=" m-5 flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg " src={item.image} alt="" loading="lazy" />
            <div className="flex flex-col justify-between  leading-normal border-l pl-2 pt-2 ml-1 w-full h-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-400 ">{item.name}</h5>
              <p className="mb-3 font-medium text-gray-700  text-2xl">{item.lavozim}</p>
              <p className="mb-3 font-medium text-gray-700  text-xl">Tajriba {item.tajriba} yil</p>
              <p className="mb-3  font-medium text-gray-700 ">
                Tel: <span className=" cursor-pointer text-blue-400 font-normal">+989{item.tel}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Oqtuvchilar;
