import "./App.css";
import { User } from "@tverstraten/hf-model";

const something = new User();
something.familyName = "fredson";
something.givenName = "fred";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>Look, its ${JSON.stringify(something)}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
