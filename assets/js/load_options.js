const videoBtn = document.getElementById("video-btn");
const docBtn = document.getElementById("doc-btn");
const videoContainer = document.getElementById("video-container");
const docContainer = document.getElementById("doc-container");

videoBtn.addEventListener("click", () => {
  videoContainer.classList.remove("hidden");
  docContainer.classList.add("hidden");
});

docBtn.addEventListener("click", () => {
  videoContainer.classList.add("hidden");
  docContainer.classList.remove("hidden");
});