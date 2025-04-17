import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=${API_KEY}`;

/**
 * Represents a React component that fetches and displays sports news articles.
 *
 * @returns {JSX.Element} - The rendered component containing the list of sports news articles.
 */
function Sports() 
{
    const [val, setVal] = useState([]);

    /**
     * Asynchronously fetches data from an API endpoint and processes it.
     *
     * @async
     * @function getData
     * @returns {Promise<void>} A promise that resolves when the data is fetched and processed, or rejects if there's an error.
     *
     * @example
     * // Calling the function to fetch data
     * getData().then(() => {
     *   console.log('Data has been fetched and processed.');
     * }).catch((error) => {
     *   console.error('Error fetching data:', error);
     * });
     */
    async function getData() 
    {
        let res = await fetch(API_URL);
        let ans = await res.json();
        // console.log(ans.articles);
        setVal(ans.articles);
    }

    useEffect(() => {
        getData();
    },[])


    return (
        <>
            <div className="allNews">
            {
            val.map((e) => {
                return (
                    <Card 
                    title={e.title} 
                    description={e.description} 
                    source={e.source.name}
                    date={e.publishedAt}
                    url={e.url}
                    image={e.urlToImage}
                    key={e.url} 
                    />
                );
            })
            }
            </div>
        </>
    );
}

export default Sports;