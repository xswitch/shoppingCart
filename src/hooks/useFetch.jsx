import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch(url).then((result) => result.json())
      setData(json)
      console.log(json)
      setLoading(false)
    }

    fetchData();
  }, [url])

  return {data, loading, error}
}