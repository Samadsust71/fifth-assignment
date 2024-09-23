document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function () {
    makeDonation(
      "donate-noakhali-input",
      "donate-noakhali",
      "donate-noakhali-title"
    );
  });
document
  .getElementById("donate-feni-btn")
  .addEventListener("click", function () {
    makeDonation("donate-feni-input", "donate-feni", "donate-feni-title");
  });
document
  .getElementById("donate-quota-btn")
  .addEventListener("click", function () {
    makeDonation("donate-quota-input", "donate-quota", "donate-quota-title");
  });

document
  .getElementById("history-page-btn")
  .addEventListener("click", function (e) {
    targetAttributeAdd(e);
    addRemoveClass("donation-page-btn");
    showSection("main-section", "history-container");
  });
document
  .getElementById("donation-page-btn")
  .addEventListener("click", function (e) {
    targetAttributeAdd(e);
    addRemoveClass("history-page-btn");
    showSection("history-container", "main-section");
  });
