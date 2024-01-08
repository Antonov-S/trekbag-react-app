import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleAddItem, hendleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsIncomplete }) {
    return (
        <div className="sidebar">
            <AddItemForm onAddItem={handleAddItem} />

            <ButtonGroup
                hendleRemoveAllItems={hendleRemoveAllItems} handleResetToInitial={handleResetToInitial}
                handleMarkAllAsComplete={handleMarkAllAsComplete}
                handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
            />
        </div>
    )
}
