import React from 'react';
import List from './List';

const ShoppingList = ({ items, onDelete }) => {
	return (
		<>
			<List items={items} onDelete={onDelete} />
		</>
	);
};

export default ShoppingList;