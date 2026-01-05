const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeLogin");
const modal = document.getElementById("loginModal");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

/* OPEN */
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

/* TAB SWITCH */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
