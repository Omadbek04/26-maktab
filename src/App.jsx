import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import { Aloqa, Home, NotFound, Yangiliklar } from "./components";
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
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}
