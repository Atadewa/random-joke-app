let data = null;

async function getData() {
  try {
    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Status Response: " + response.status);
    }

    data = await response.json();
    displayJoke(data);

    console.log(data);
  } catch (err) {
    console.log("Terjadi kesalahan: " + err);
  }
}

const textJoke = document.getElementById("joke");
const punchline = document.getElementById("punchline");
const resetButton = document.getElementById("reset");

textJoke.textContent = "Loading...";
punchline.textContent = "";


const displayJoke = (joke) => {
  textJoke.textContent = joke.setup;

  punchlineButton.hidden = false;
};

const displayPunchline = (joke) => {
  punchline.textContent = joke;

  resetButton.hidden = false;
};

const punchlineButton = document.getElementById("punchline-button");

punchlineButton.addEventListener("click", () => {
  displayPunchline(data.punchline);
});

resetButton.addEventListener("click", () => {
  textJoke.textContent = "Loading...";
  punchline.textContent = "";
  punchlineButton.hidden = true;
  getData();
  resetButton.hidden = true;
});

getData();