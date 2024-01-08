import Button from "./Button";

export default function ButtonGroup({
    hendleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete, handleMarkAllAsIncomplete
}) {
    const secondaryButtons = [
        {
            text: "Mark all as complete",
            onClick: handleMarkAllAsComplete
        },
        {
            text: "Mark all as incomplete",
            onClick: handleMarkAllAsIncomplete
        },
        {
            text: "Reset to initial",
            onClick: handleResetToInitial
        },
        {
            text: "Remove all items",
            onClick: hendleRemoveAllItems
        }
    ]

    return (
        <section className="button-group">
            {
                secondaryButtons.map(({ text, onClick }) => (
                    <Button
                        key={text + onClick.toString()}
                        onClick={onClick} buttonType="secondary"
                    >
                        {text}
                    </Button>
                ))
            }
        </section>
    )
}