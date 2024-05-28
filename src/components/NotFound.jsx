import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-white flex items-center h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p className="mb-4 text-lg  text-black  font-medium">Kechirasiz, biz bu sahifani topa olmadik. Bosh sahifada kashf qilish uchun ko'p narsalarni topasiz. </p>
          <Link to={"/"} className="inline-flex border border-black text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
            Asosiy sahifaga
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
