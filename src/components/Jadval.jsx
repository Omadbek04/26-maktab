import { jadval } from "../assets";

const Jadval = () => {
  return (
    <>
      <h1 className="text-center font-bold sm:text-[40px] text-[24px] tracking-widest">Dars Jadvalari</h1>
      <div className=" py-2 flex justify-center">
        <img src={jadval}  className=" object-cover" loading="lazy"/>
      </div>
    </>
  );
};

export default Jadval;
