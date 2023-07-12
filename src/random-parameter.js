const randomParameter = () => {
  let green = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomId = 1 + Math.floor(Math.random() * 99);
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  return { randomColor, randomId };
};
export default randomParameter;
