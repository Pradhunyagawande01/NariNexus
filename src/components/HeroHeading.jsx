import React, { useEffect, useState } from "react";

const HeroHeading = () => {
  const texts = [" In Innovation , There Is Progress. In Connection, There Is Strength "];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
 
  useEffect(() => {
    const current = texts[currentTextIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <h1 className="font-bold leading-tight mb-6 transform translate-x-4 md:translate-x-18 transition-all duration-500"

    style={{ fontFamily: '"Playfair Display", serif' }}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </h1>
  );
};

export default HeroHeading;
