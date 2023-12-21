import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import BarchaArizalar from "./pages/allariza/BarchaArizalar";
import YangiAriza from "./pages/allariza/YangiAriza";
import Card from "./pages/allariza/Card";
import Bulimlar from "./pages/allariza/Bulimlar";
import YangiBulim from "./pages/allariza/YangiBulim";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Card />,
        },
        {
          path: "arizalar",
          element: <BarchaArizalar />,
        },
        {
          path: "create",
          element: <YangiAriza />,
        },
        {
          path: "part",
          element: <Bulimlar />,
        },
        {
          path: "create1",
          element: <YangiBulim />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
