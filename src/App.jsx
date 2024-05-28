import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import { Aloqa, Galeriya, Home, Jadvalar, NotFound, Yangiliklar } from "./components";
import MakabJaqida from "./components/MakabJaqida";
export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "maktab-haqida",
          element: <MakabJaqida />,
        },
        {
          path: "yangiliklar",
          element: <Yangiliklar />,
        },
        {
          path: "galeriya",
          element: <Galeriya />,
        },
        {
          path: "jadvalar",
          element: <Jadvalar />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}
