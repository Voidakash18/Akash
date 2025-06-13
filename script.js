let start;

function showBox() {
  const box = document.getElementById("box");
  box.style.top = Math.random() * 500 + "px";
  box.style.left = Math.random() * 500 + "px";
  box.style.background = ["red", "green", "blue"][Math.floor(Math.random() * 3)];
  box.style.display = "block";
  start = Date.now();
}

document.getElementById("box").onclick = function () {
  const time = ((Date.now() - start) / 1000).toFixed(2);
  document.getElementById("message").innerText = `Time: ${time} sec`;
  this.style.display = "none";
  setTimeout(showBox, 1000 + Math.random() * 2000);
};

setTimeout(showBox, 2000);
