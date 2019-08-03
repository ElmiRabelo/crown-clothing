import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Route path="/" component={HomePage} />
		</div>
	);
}

export default App;
