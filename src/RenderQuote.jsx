import { useState } from "react";
import randomParameter from "./random-parameter";
import { data } from "./data";

const RenderQuote = () => {
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
    <div>
      <h4 id="text">{quote}</h4>
      <h6 id="author">{author}</h6>
      <button
        id="new-quote"
        className="btn rounded-0"
        style={{ backgroundColor: colorTheme }}
        type="button"
        onClick={handleClick}
      >
        New quote
      </button>
    </div>
  );
};
export default RenderQuote;
