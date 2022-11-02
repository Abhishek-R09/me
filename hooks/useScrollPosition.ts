import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollUp, setScrollUp] = useState(true)

  useEffect(() => {
    const updatePosition = () => {
      setScrollUp(window.pageYOffset - scrollPosition < 0 ? true : false)
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollUp
}