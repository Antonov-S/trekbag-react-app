import { useState } from "react";

import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  }

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar handleAddItem={handleAddItem} />
      </main>

      <Footer />
    </>
  )
}

export default App;
