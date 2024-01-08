import { useState } from "react";

import { initialItems } from "../lib/constants";
import EmptyView from "./EmptyView";


export default function ItemList({ items, handleDeleteItem, handleTogleItem }) {

    return (
        <ul className="item-list" >
            {
                items.length === 0 && <EmptyView />
            }

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