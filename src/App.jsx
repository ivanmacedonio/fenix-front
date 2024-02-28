import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalogo } from "../src/pages/Catalogo";
import { Hub } from "../src/pages/Hub";
import "./App.css";
import { Admin } from "./pages/Admin";
import { Checkout } from "./pages/Checkout";
import { Detail } from "./pages/Detail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hub></Hub>,
    },
    {
      path: "/products",
      element: <Catalogo></Catalogo>,
    },
    {
      path: "/detail/:id",
      element: <Detail></Detail>,
    },
    {
      path: "/checkout",
      element: <Checkout></Checkout>,
    },
    {
      path: "/panel/fenix",
      element: <Admin></Admin>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
