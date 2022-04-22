import { useState, useEffect } from 'react'

export default function useLocalStorage (key, initialValue) {
  const [storage, setStorage] = useState(initialValue)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.setTimeout(() => {
      try {
        const item = window.localStorage.getItem(key)
        setLoading(false)
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, [])

  const saveItem = (value) => {
    try {
      setStorage(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      setError(error)
      console.error(error)
    }
  }

  return {
    storage,
    error,
    saveItem,
    loading
  }
};
