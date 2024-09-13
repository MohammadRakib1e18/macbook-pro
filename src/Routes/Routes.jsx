import { createBrowserRouter } from "react-router-dom";
import AboutWidget from "../components/AboutWidget/AboutWidget";
import About from "../components/AboutWidget/About";
import Experiences from "../components/AboutWidget/Experiences";
import Recommended from "../components/AboutWidget/Recommended";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <AboutWidget></AboutWidget>,
		children: [
			{
				path: "/",
				element: <About></About>,
			},
			{
				path: "/experiences",
				element: <Experiences></Experiences>,
			},
			{
				path: "/recommended",
				element: <Recommended></Recommended>,
			},
		],
	},
]);
