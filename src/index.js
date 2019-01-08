import React from "react";
import ReactDOM from "react-dom";
import Key from "./components/Key";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<div className="keys">
				<Key letterCode="65" letter="A" sound="clap" />
				<Key letterCode="83" letter="S" sound="hihat" />
				<Key letterCode="68" letter="D" sound="kick" />
				<Key letterCode="70" letter="F" sound="openhat" />
				<Key letterCode="71" letter="G" sound="boom" />
				<Key letterCode="72" letter="H" sound="ride" />
				<Key letterCode="74" letter="J" sound="snare" />
				<Key letterCode="75" letter="K" sound="tom" />
				<Key letterCode="76" letter="L" sound="tink" />
			</div>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);