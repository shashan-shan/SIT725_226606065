texts = [
  "Blue book",
  "Black pen",
  "Yellow lamp",
  "Black glasses",
  "White bottle"
];

function changeText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomText = texts[randomIndex];
  document.getElementById("d_text").textContent = randomText;
}