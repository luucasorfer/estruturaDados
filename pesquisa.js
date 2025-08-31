// pesquisa.js

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('input[type="text"]');
  const resultsContainer = document.getElementById("search-results");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    resultsContainer.innerHTML = "";

    if (query.length < 2) {
      resultsContainer.classList.add("hidden");
      return;
    }

    const links = document.querySelectorAll("[data-html]");
    const matches = [];

    links.forEach((link) => {
      const text = link.textContent.toLowerCase().trim();
      const explanation = link.getAttribute("data-explanation") || "";
      if (text.includes(query) || explanation.toLowerCase().includes(query)) {
        matches.push({ element: link, text });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML =
        "<p class='p-2 text-gray-500'>Nenhum resultado encontrado.</p>";
    } else {
      matches.forEach((match) => {
        const item = document.createElement("div");
        item.className =
          "px-4 py-2 hover:bg-blue-100 cursor-pointer text-blue-700 text-sm";
        item.innerText = match.text;
        item.addEventListener("click", () => {
          match.element.click();
          resultsContainer.classList.add("hidden");
          input.value = "";
        });
        resultsContainer.appendChild(item);
      });
    }

    resultsContainer.classList.remove("hidden");
  });

  // Ocultar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.add("hidden");
    }
  });
});
