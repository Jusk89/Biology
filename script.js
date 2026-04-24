function scrollToTopics() {
  document.getElementById("topics").scrollIntoView({
    behavior: "smooth"
  });
}

function filterTopics(category) {
  const cards = document.querySelectorAll(".topic-card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

function openModal(title, text) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function checkAnswer(isCorrect) {
  const result = document.getElementById("result");

  if (isCorrect) {
    result.innerText = "✅ Дұрыс! Биология тірі ағзаларды зерттейді.";
  } else {
    result.innerText = "❌ Қате. Дұрыс жауап: тірі ағзаларды.";
  }
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".topic-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const text = card.querySelector("p").innerText.toLowerCase();

    if (title.includes(searchText) || text.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

window.onclick = function(event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    closeModal();
  }
};