import { Chart } from "react-google-charts";

import "./App.css";

function App() {
	return (
		<Chart
			chartType="ScatterChart"
			data={[
				["Age", "Weight"],
				[4, 5.5],
				[8, 12],
				[3, 1],
				[5, 11],
			]}
			width="100%"
			height="400px"
			legendToggle
		/>
	);
}

export default App;
