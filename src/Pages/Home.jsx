import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines/?language=en&country=in&apiKey=${API_KEY}`;

/**
 * React component that fetches and displays news data from an API.
 *
 * @returns {JSX.Element} - A JSX element representing the home page with news cards.
 */
function Home() 
{
    const [val, setVal] = useState([]);

    /**
     * Asynchronously fetches data from an API endpoint and updates the value with the articles received.
     *
     * @async
     * @function getData
     * @returns {Promise<void>}
     * @throws {Error} If there is a problem fetching or processing the data.
     *
     * Example usage:
     * getData().then(() => {
     *   console.log('Data fetched and processed successfully.');
     * }).catch(error => {
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

export default Home;