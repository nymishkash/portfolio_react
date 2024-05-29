import React, { useEffect, useState } from "react";

function Typing({
    text = [
        "Hi there!",
        "Glad you came by to take a look at my website :)",
        "Have a look at this cool typing effect.",
        "Hope you like it :D",
    ],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseBeforeDelete = 1500,
    pauseBeforeType = 500
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (text.length === 0) return;

        const currentText = text[index];

        const handleTyping = () => {
            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayedText(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setIndex((index + 1) % text.length);
                    setCharIndex(0);
                    setTimeout(() => {}, pauseBeforeType); // Pause before typing next sentence
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, text, index, typingSpeed, deletingSpeed, pauseBeforeDelete, pauseBeforeType]);

    return (
        <span className="typing-text">
            {displayedText}
            <span className="blinking-cursor">|</span>
        </span>
    );
}

export default Typing;
