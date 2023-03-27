function switchHomeLayout() {
  const pageDiv = document.getElementById("page");
  const profileDiv = document.getElementById("profile");
  const layoutCode = document.querySelectorAll("code[id=layout]");
  if (pageDiv.style.display === "none") {
    pageDiv.style.display = "block";
    profileDiv.style.display = "none";
    layoutCode.forEach(function (el) {
      el.innerText = "page";
    });
  } else {
    pageDiv.style.display = "none";
    profileDiv.style.display = "block";
    layoutCode.forEach(function (el) {
      el.innerText = "profile";
    });
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-layout-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchHomeLayout();
    })
  );
});

function toggleSubmenu(event) {
	event.getElementsByTagName("svg").item(0).classList.toggle("rotate-180");
	['hidden'].map(v => event.nextSibling.nextSibling.classList.toggle(v))
}