import { Link } from "react-router-dom";

const Aloqa = () => {
  return (
    <div className="flex-3 ">
      <div className="dark:bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="widget_text widget_custom_html">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Maktab haqida</h2>
                <div className="textwidget">
                  <p>Andijon viloyati Baliqchi tumani 26-sonli umumiy o’rta talim maktabi </p>
                </div>
              </div>
            </div>
            <div className="widget_nav_menu">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Navigatsiya</h2>
                <ul className="list-none p-0">
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" to={"/"}>
                      Asosiy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" to={"/yangiliklar"}>
                      Yangiliklar
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" to={"/maktab-haqida"}>
                      Maktab haqida
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" to="/galeriya">
                      Galeriya
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="text-blue-500 hover:underline" href="https://97-maktab.uz/kundalik-com-tizimi-haqida-ha-tizimga-kirish/">
                      Kundalik.com tizimi haqida
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget_text">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Biz bilan bog’laning</h2>
                <div className="textwidget flex flex-col gap-2">
                  <p>
                    <strong>Manzil:</strong>Andijon viloyati Baliqchi tumani Tulkiobod ko'chasi 117-uy {" "}
                  </p>
                  <p>
                    <strong>Telefon :</strong>{" "}
                    <a className=" cursor-pointer" href="tel:+99897 2724467">
                      +99897 2724467
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a className="text-blue-500 hover:underline" href="26maktabtalim@gmail.com  ">
                      26maktabtalim@gmail.com{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="widget_custom_html">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Xaritadan ko’rinishi</h2>
                <div className="textwidget">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d897.0000603909865!2d72.04792098741804!3d40.84205618105971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca361eb65c7c5%3A0x4269d118597b3800!2s26-umumiy%20o&#39;rta%20ta%CA%BClim%20maktabi!5e0!3m2!1sru!2s!4v1716913987646!5m2!1sru!2s" allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aloqa;
