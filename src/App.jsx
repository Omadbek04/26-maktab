import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <h1>sad</h1>,
    },
  ]);
  return <RouterProvider router={route} />;
}