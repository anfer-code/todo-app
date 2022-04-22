import { useState, useEffect } from 'react'

export function useLocalStoragePlatzi (key, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(key)
        let parsedItem

        if (!localStorageItem) {
          window.localStorage.setItem(key, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, [])

  const saveItem = (newitem) => {
    try {
      const stringfieditem = JSON.stringify(newitem)
      window.localStorage.setItem(key, stringfieditem)
      setItem(newitem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item, saveItem, error, loading
  }
}
