import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import { Aloqa, Galeriya, Home, Jadvalar, NotFound, Yangiliklar } from "./components";
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
          path: "aloqa",
          element: <Aloqa />,
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
