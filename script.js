const scraping = () => {
  console.log("scraping");
};

const input = (e) => {
  const value = e.target.value;
  console.log(value);
};

const url = document.getElementById("url");
const button = document.getElementById("button");

url.addEventListener("change", input, false);
button.addEventListener("click", scraping, false);
