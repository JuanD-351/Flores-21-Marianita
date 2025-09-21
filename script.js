onload = () => {
  document.body.classList.remove("container");
};

function toggleMessage() {
  const overlay = document.getElementById("messageOverlay");
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
}
