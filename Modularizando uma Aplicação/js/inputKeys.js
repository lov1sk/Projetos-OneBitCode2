const input = document.getElementById("input");
const resultInput = document.getElementById("result");

export default function keys() {
  document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value;
      input.value += value;
    });
  });

  document.getElementById("clear").addEventListener("click", function () {
    input.value = "";
    input.focus();
  });
  document
    .getElementById("copyToClipboard")
    .addEventListener("click", function (ev) {
      const button = ev.currentTarget;
      if (button.innerText === "Copy") {
        button.innerText = "Copied!";
        button.classList.add("success");
        navigator.clipboard.writeText(resultInput.value);
      } else {
        button.innerText = "Copy";
        button.classList.remove("success");
      }
    });
}
