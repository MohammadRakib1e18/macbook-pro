import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReactNotifications />
		<App />
	</StrictMode>
);
