import Button from "./Button";

export default function ButtonGroup() {
    const secondaryButtons = ["Mark all as complete", "Mark all as incomplete", "Reset to initial", "Remove all items"];

    return (
        <section className="button-group">
            {
                secondaryButtons.map((text) => {
                    return (
                        <Button
                            key={text} buttonType="secondary" >{text}
                        </Button>
                    )
                })
            }
        </section>
    )
}
