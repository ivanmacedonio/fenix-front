import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loader } from "../src/components/Loader";
import { Catalogo } from "../src/pages/Catalogo";
import { Hub } from "../src/pages/Hub";
import "./App.css";
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
  ]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return loading ? (
    <div className="loader">
      <Loader />
    </div>
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
