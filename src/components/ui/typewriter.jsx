"use client"

import React, { useEffect, useState } from "react"
import { cn } from "../../lib/utils"

export function Typewriter({
  words,
  speed = 80,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  className,
}) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const wordsString = JSON.stringify(words);

  useEffect(() => {
    const parsedWords = JSON.parse(wordsString);
    const currentWord = parsedWords[wordIndex];
    let delay = isDeleting ? speed / 2 : speed

    if (!isDeleting && charIndex === currentWord.length) {
      delay = delayBetweenWords
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setIsDeleting(true)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % parsedWords.length)
          }
        }
      },
      delay,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, speed, delayBetweenWords, wordIndex, wordsString])

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [cursor])

  return (
    <div className={cn("inline-block", className)}>
      <span>
        {displayText}
        {cursor && (
          <span className="ml-[2px] transition-opacity duration-75 text-white" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  )
}
