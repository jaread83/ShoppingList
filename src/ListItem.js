import React from 'react';

const ListItem = ({ item, onDelete }) => {
	return (
		<li className="shoppingList--item">
			{item}
			<button className="button button--delete" onClick={onDelete}>X</button>
		</li>
	);
};

export default ListItem;