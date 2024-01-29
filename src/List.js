import React from 'react';
import ListItem from './ListItem';

const List = ({ items, onDelete }) => {
	return (
		<ul className="shoppingList--list">
			{items.map((item, index) => (
				<ListItem key={index} item={item} onDelete={() => onDelete(index)} />
			))}
		</ul>
	);
};

export default List;