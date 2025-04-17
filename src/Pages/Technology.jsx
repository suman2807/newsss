import Card from "../Components/Card";
import { useState, useEffect } from "react";
const API_KEY = "05753ec938144818a39ba6e341df1b4d";
const API_URL = `https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=${API_KEY}`;

function Technology() 
{
    const [val, setVal] = useState([]);

    /**
     * Asynchronously fetches data from an API and updates the application state with the fetched articles.
     *
     * @async
     * @function getData
     * @throws {Error} Throws an error if the fetch request fails or if the response is not in JSON format.
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

export default Technology;