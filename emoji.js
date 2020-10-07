console.log("here");

const emojiBtn = document.querySelector("#emojiBtn");
const modalContent = document.querySelector(".modal-body");
const emojiArr = [];
const textArea = document.querySelector("#exampleFormControlTextarea1");
const categories = document.querySelector("#emojiCategories");

//fetch emoji json
fetch("https://unpkg.com/emoji.json@13.0.0/emoji.json")
  .then((res) => res.json())
  .then((data) => emojiArr.push(...data));

function showEmojis(e, emoji = emojiArr) {
  modalContent.innerHTML = emoji
    .map((emoji) => `<span>${emoji.char}</span> `)
    .join("");
}

function insertEmoji(e) {
  textArea.value += e.target.textContent;
}

function filterDisplay(e) {
  if (!e.target.matches("img")) return;

  const category = e.target.dataset.category;
  debugger;
  const filteredArray = emojiArr.filter((emoji) =>
    emoji.category.toLowerCase().includes(category)
  );
  console.log(filteredArray);

  showEmojis(null, filteredArray);
}

/* console on browser

var a=emojiArr.filter((emoji) =>{
console.log(emoji.category.toLowerCase().includes("symbols")) 

   return emoji.category.toLowerCase().includes(category)
} 
);

*/

emojiBtn.addEventListener("click", showEmojis);
modalContent.addEventListener("click", insertEmoji);
categories.addEventListener("click", filterDisplay);
