import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import ParticlePage from "./components/particles/ParticlePage";
import BarchaArizalar from "./pages/allariza/BarchaArizalar";
import YangiAriza from "./pages/allariza/YangiAriza";
import Card from "./pages/allariza/Card";
import Particles from "react-particles";
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
      {/* 1-barcha ariza */}
      <ParticlePage />
     
      {/* 2- bajarilmoqda */}
      {/* 3-bajarilgan */}
      {/* 4-muddati utgan */}
    </>
  );
}

export default App;
