const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

let index = 0;

document.body.addEventListener('keydown', (event) => {
console.log(event.key);
if (event.key === codes[index]) {
  index++;
  if (index === codes.length) {
    window.alert("Hurray - YES BITCH");
    index = 0
  }
} else {
  index = 0;
}
})
}
