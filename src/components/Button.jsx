
export default function Button({ buttonType, children }) {
    return (
        <button className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>{children}</button>
    )
}
