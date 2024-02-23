import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchData = (url, product_id) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {

            try {

                const res = await axios.get(url)
                setData(res.data.products)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }

}
export default useFetchData