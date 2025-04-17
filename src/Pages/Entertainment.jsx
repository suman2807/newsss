import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=${API_KEY}`;

/**
 * React component that fetches and displays news articles from an API.
 *
 * @returns {JSX.Element} - The rendered JSX for the entertainment section.
 */
function Entertainment() 
{
    const [val, setVal] = useState([]);

    /**
     * Fetches data from an API endpoint and sets the retrieved articles.
     *
     * This function performs an asynchronous fetch operation to retrieve data from the specified API URL.
     * It then parses the JSON response and calls a function `setVal` with the parsed articles.
     *
     * @returns {Promise<void>} - A promise that resolves when the data has been fetched and processed.
     * @throws {Error} If there is an error during the fetch operation or parsing of the response.
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

export default Entertainment;