import "../Styles/ErrorPage.css";
import gif from "../Components/error.gif";

/**
 * A functional component that renders an error page with a heading, subheading, and an animated GIF.
 *
 * @returns {JSX.Element} - The JSX element representing the error page.
 */
function ErrorPage() 
{
  return (
    <>
        <div className="ErrorContainer">
            <h1 id="heading1">Whoops!</h1>
            <h2 id="heading2">404 page not found..</h2>
            <img src={gif} alt="Error GIF" id="gif" />
        </div>
    </>
  )
}

export default ErrorPage