import { useState } from "react";

import { initialItems } from "../lib/constants";


export default function ItemList({ items, handleDeleteItem, handleTogleItem }) {

    return (
        <ul>
            {
                items.map(item => {
                    return <Item
                        key={item.id}
                        item={item} onDeleteItem={handleDeleteItem}
                        onTogleItem={handleTogleItem}
                    />
                })
            }
        </ul>
    )
}

function Item({ item, onDeleteItem, onTogleItem }) {
    return (
        <li className="item">
            <label><input onChange={() => onTogleItem(item.id)} checked={item.packed} type="checkbox" /> {item.name}</label>

            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    )
}