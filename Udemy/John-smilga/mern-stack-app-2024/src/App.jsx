import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  Profile,
  Admin,
  AllJobs
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />
          },
          {
            path: "stats",
            element: <Stats />
          },
          {
            path: "all-jobs",
            element: <AllJobs />
          },
          {
            path: "admin",
            element: <Admin />
          }
        ]
      },
      {
        path: "error",
        element: <Error />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
