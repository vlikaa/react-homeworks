import './App.css';
import {useState, useEffect} from "react";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";

function App() {
	const [charactersData, setCharactersData] = useState([]);
	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setCharactersData([...charactersData, ...data.results]))
	}, [url]);

	return (
		<>
			<main>
				<Characters charactersData={charactersData}/>
				<Pagination page={charactersData}/>
			</main>
		</>
	);
}

export default App;
