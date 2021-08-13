import React from "react";
import "../styles/main.scss";
import SearchBar from "../components/SearchBar";
import { Router, Link } from "@reach/router";
import TestComponent from "../components/TestComponent";

const SomeSubPage = (props) => {
	return <div>Hi from SubPage with id: {props.id}</div>;
};
export default function app() {
	return (
		<Router>
			<SomeSubPage path="/app/:id" />
		</Router>
	);
}
