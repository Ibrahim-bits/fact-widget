async function loadFact() {
  console.log("Fetching fact...");

  const response = await fetch("https://ibrahim321123-fact-api.hf.space/api/random-fact");
  const data = await response.json();
  console.log(data);

  const container = document.getElementById("fact-widget");
  if (container) {
    container.innerText = data.fact || "No fact returned.";
  }
}

loadFact();
