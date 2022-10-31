import { useRoutes } from "react-router-dom";
// ------ PAGES -------
import Home from "../pages/home/home";
import About from "../pages/aboutMe/about";
import Services from "../pages/services/services";
import Projects from "../pages/projects/projects";
import Contacts from "../pages/contactMe/contact";
import MainLayout from "../layouts/index";
// -------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Home />, index: true },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "portfolio", element: <Projects /> },
        { path: "contact", element: <Contacts /> },
      ],
    },
  ]);
}
