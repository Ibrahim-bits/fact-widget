
---

## ✅ ✅ ✅ **2️⃣ Improved `widget.js`**

```javascript
async function loadFact() {
  const response = await fetch("https://ibrahim321123-fact-api.hf.space/api/random-fact");
  const data = await response.json();
  const container = document.getElementById("fact-widget");
  if (container) {
    container.innerText = data.fact;
  }
}

// Load once when page loads
loadFact();

// Optional: Auto-refresh every 60 seconds
// setInterval(loadFact, 60000);
