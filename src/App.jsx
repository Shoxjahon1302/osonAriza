import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import BarchaArizalar from "./pages/allariza/BarchaArizalar";
import YangiAriza from "./pages/allariza/YangiAriza";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
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
      {/* 2- bajarilmoqda */}
      {/* 3-bajarilgan */}
      {/* 4-muddati utgan */}
    </>
  );
}

export default App;
