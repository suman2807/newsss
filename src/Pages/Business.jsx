import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=${API_KEY}`;

/**
 * A functional component that fetches business news articles and renders them using Card components.
 *
 * @returns {JSX.Element} - The rendered JSX element containing the fetched business news articles.
 */
function Business() 
{
    const [val, setVal] = useState([]);

    /**
     * Asynchronously fetches data from an API endpoint and sets it to a value.
     *
     * @async
     * @function getData
     * @throws {Error} If the request fails or if the response is not in JSON format.
     * @returns {Promise<void>}
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

export default Business;