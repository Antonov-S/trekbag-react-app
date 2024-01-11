import { useItemsContext } from "../lib/hooks";

import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
    const { items } = useItemsContext();
    return (
        <header>
            <Logo />
            <Counter
                totalNumberOfItems={items.length}
                numbersOfItemsPacked={items.filter((item) => item.packed).length}
            />
        </header>
    )
}
