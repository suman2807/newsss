import Home from "./Pages/Home.jsx";
import Sports from "./Pages/Sports.jsx";
import Entertainment from "./Pages/Entertainment.jsx";
import Science from "./Pages/Science.jsx";
import Business from "./Pages/Business.jsx";
import Technology from "./Pages/Technology.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";

import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Main React component that renders the application.
 *
 * This component sets up the routing for different pages using React Router. It includes a `BrowserRouter` to handle client-side routing without a full page reload.
 * The component renders a `Navbar` at the top and uses a `Routes` component with multiple `Route` elements to define different paths and their corresponding components.
 *
 * @returns {JSX.Element} - The JSX representation of the App component.
 */
function App() 
{
  return (
      <>
        <BrowserRouter>
            
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/NewsBuzz" element={<Home />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/science" element={ <Science />} />
                <Route path="/business" element={<Business />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </BrowserRouter>
      </>
  );
}

export default App