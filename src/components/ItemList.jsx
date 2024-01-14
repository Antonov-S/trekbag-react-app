import { useMemo, useState } from "react";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

import EmptyView from "./EmptyView";

const sortingOptions = [
    {
        label: "Sort by default",
        value: "default"
    },
    {
        label: "Sort by packed",
        value: "packed"
    },
    {
        label: "Sort by unpacked",
        value: "unpacked"
    }
];

export default function ItemList() {
    const items = useItemsStore(state => state.items);
    const deleteItem = useItemsStore(state => state.deleteItem);
    const toggleItem = useItemsStore(state => state.toggleItem);
    const [sortBy, setSortBy] = useState("default");

    const sortedItems = useMemo(() => [...items].sort((a, b) => {
        if (sortBy === "packed") {
            return b.packed - a.packed
        }

        if (sortBy === "unpacked") {
            return a.packed - b.packed
        }

        return;
    }), [items, sortBy]);

    return (
        <ul className="item-list" >
            {
                items.length === 0 && <EmptyView />
            }

            {
                items.length > 0 ? <section className="sorting">
                    <Select
                        options={sortingOptions}
                        defaultValue={sortingOptions[0]}
                        onChange={option => setSortBy(option.value)}
                    />
                </section> : null
            }

            {
                sortedItems.map(item => {
                    return <Item
                        key={item.id}
                        item={item} onDeleteItem={deleteItem}
                        onTogleItem={toggleItem}
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