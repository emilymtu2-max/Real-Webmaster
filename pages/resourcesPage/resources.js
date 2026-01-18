const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const resourceSections = document.querySelectorAll(".resources-container");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  resourceSections.forEach(section => {
    const cards = section.querySelectorAll(".resource-card");
    let sectionHasMatch = false;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = text.includes(query);
      card.style.display = match ? "" : "none"; // <-- important: use "" instead of "block" or "flex"
      if (match) sectionHasMatch = true;
    });

    section.style.display = sectionHasMatch ? "" : "none"; // keep the section itself flex if needed
  });
});

// Category filtering
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    resourceSections.forEach(section => {
      if (category === "All" || section.dataset.category === category) {
        section.style.display = ""; // <-- keep flex layout
      } else {
        section.style.display = "none";
      }
    });

    searchInput.value = "";
  });
});


