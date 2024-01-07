import React from 'react';

export default function Footer() {
    const currentDate = new Date();

    return (
        <footer>
            <small>&copy; {currentDate.getFullYear()}. Copyright by Svetlozar Antonov</small>
            <p>Version <b>1.5</b></p>
        </footer>
    )
}
