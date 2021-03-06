import itemCount from './itemCount';
import React from "react";
import Title from '../Title';

export const ItemListContainer = ({ texto}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} />
            <itemCount initial ={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;