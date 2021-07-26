import Form from "./components/Form";
import { useState } from "react";
import CardList from "./components/CardList";

function App() {
	const [cards, setCards] = useState([]);

	const addNewCard = (card) => {
		setCards([...cards, card]); // creates a new array with the values of cards, adding the new card
	};

	return (
		<div className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
			<h1>Search GitHub User</h1>
			<Form onSubmit={addNewCard} />
			<CardList cards={cards} />
		</div>
	);
}

export default App;
