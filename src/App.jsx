import { useState, useEffect } from "react";
import "./App.css";
import randomParameter from "./random-parameter";
import { data } from "./data";
import { FaTwitterSquare, FaTumblrSquare, FaArrowRight } from "react-icons/fa";

function App() {
  const [parameter, setParameter] = useState(randomParameter());
  const { randomColor: colorTheme, randomId: id } = parameter;
  console.log(parameter, colorTheme, id);

  const body = document.querySelector("body");
  body.style.backgroundColor = colorTheme;

  let [{ quote, author }] = data.filter((quote) => quote.id === id);

  const handleClick = () => {
    setParameter(randomParameter());
  };
  return (
    <div
      className=" container bg-light p-3 rounded-5 "
      id="quote-box"
      style={{
        maxWidth: "600px",
        borderStyle: "dashed",
        borderWidth: "5px",
      }}
    >
      <div className="row">
        <h4 id="text">{quote}</h4>
      </div>
      <div className="row justify-content-end">
        <div className="col-6">
          <h6 className="text-decoration-underline" id="author">
            {author}
          </h6>
        </div>
      </div>

      <div className="row">
        <div className="col-4  d-flex justify-content-around">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <FaTwitterSquare style={{ color: colorTheme, fontSize: "40px" }} />
          </a>
          <a href="#">
            <FaTumblrSquare style={{ color: colorTheme, fontSize: "40px" }} />
          </a>
        </div>
        <div className="col-8  d-flex justify-content-end">
          <button
            id="new-quote"
            className="btn btn-primary"
            style={{
              backgroundColor: colorTheme,
            }}
            type="button"
            onClick={handleClick}
          >
            <FaArrowRight style={{ margin: "5px" }} />
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
