import Character from "./Character/Character";
import "./Characters.css";

const Characters = ({charactersData}) => {
	return (
		<ul className="characters">
			{
				charactersData.map(character => (
					<li>
						<Character characterData={character}/>
					</li>
				))
			}
		</ul>
	);
};

export default Characters;