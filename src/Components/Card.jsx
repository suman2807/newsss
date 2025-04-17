import "../Styles/App.css";
import "../Styles/Card.css";

/**
 * React component to display news card.
 *
 * @param {Object} props - Properties for the Card component.
 * @prop {string} props.image - URL of the image to be displayed.
 * @prop {string} props.title - Title of the news item, truncated at 230 characters if longer.
 * @prop {string} props.description - Description of the news item. If longer than 5 characters, it will be sliced to 180 characters.
 * @prop {string} props.source - Source of the news item.
 * @prop {string} props.date - Date of the news item, formatted to show only the first 10 characters.
 * @prop {string} props.url - URL link to the full article.
 * @returns {JSX.Element} JSX representing a news card component.
 */
function Card(props) 
{
    return (
        <div className="NewsContainer">
            <img src={props.image} alt="News image" id="image" />
            <h2 id="title">{props.title.slice(0, 230)}</h2> 
            <br/>
            <h4 id="description">
                <span>Description :</span> {
                    //If description length > 5, only then display it with slicing otherwise display it without slicing
                    (String(props.description).length > 5) ? props.description.slice(0, 180) : props.description
                }
            </h4>
            <p id="source">[{props.source}, {props.date.slice(0, 10)}]</p>
            <br/>
            <a href={props.url} id="url">Click to read full article🔗</a>
        </div>
    );
}

export default Card