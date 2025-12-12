import React, { useState, useEffect, useRef } from 'react';
import './Typewriter.css';

const Typewriter = () => {
  const texts = ['Ashish Kumar', 'I am problem solver', 'I am developer'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80; // Faster typing speed
  const deletingSpeed = 50; // Faster deleting speed
  const pauseAfterTyping = 2000; // 2 seconds pause after typing
  const pauseTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Start typing immediately on mount
    if (isInitialMount.current && currentText === '') {
      isInitialMount.current = false;
      const firstText = texts[0];
      setCurrentText(firstText.substring(0, 1));
      return;
    }

    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause for 2 seconds then start deleting
          if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
          }
          pauseTimeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseAfterTyping);
          return;
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text immediately
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => {
      clearTimeout(timer);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

export default Typewriter;

