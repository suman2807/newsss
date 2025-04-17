import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=science&apiKey=${API_KEY}`;

/**
 * React component that fetches and displays news articles related to science.
 *
 * @returns {JSX.Element} - Rendered React component.
 */
function Science() 
{
    const [val, setVal] = useState([]);

    /**
     * Asynchronously fetches data from an API endpoint and updates the application state with the fetched articles.
     *
     * @async
     * @function getData
     * @returns {Promise<void>} A promise that resolves when the data has been fetched and processed.
     * @throws {Error} If there is an error during the fetch operation or JSON parsing.
     *
     * Example:
     * getData().then(() => {
     *   console.log('Data fetched successfully');
     * }).catch((error) => {
     *   console.error('Failed to fetch data:', error);
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

export default Science;