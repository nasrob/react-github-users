import Card from "./Card";

const CardList = (props) => (
	<div id="container" className="mt-10">
		{props.cards.map((card) => (
			<Card {...card} />
		))}
	</div>
);

export default CardList;
