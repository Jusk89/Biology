function scrollToTopics() {
  document.getElementById("topics").scrollIntoView({ behavior: "smooth" });
}

const topicTexts = {
  plants: {
    title: "Өсімдіктер биологиясы",
    text: `
Өсімдіктер биологиясы өсімдіктердің құрылысын, өсуін, қоректенуін және көбеюін зерттейді.

Өсімдіктер табиғатта өте маңызды рөл атқарады. Олар фотосинтез процесі арқылы күн сәулесін пайдаланып, көмірқышқыл газын сіңіреді және оттек бөледі. Осы оттек арқылы адамдар мен жануарлар тыныс алады.

Өсімдіктердің негізгі мүшелері: тамыр, сабақ, жапырақ, гүл, жеміс және тұқым. Тамыр өсімдікті топыраққа бекітеді және су мен минералды заттарды сіңіреді. Жапырақта фотосинтез жүреді. Гүл көбею мүшесі болып саналады.

Өсімдіктер адам өмірінде де маңызды. Олар тағам, дәрі-дәрмек, құрылыс материалы және оттек көзі ретінде қолданылады.
`
  },

  animals: {
    title: "Жануарлар биологиясы",
    text: `
Жануарлар биологиясы жануарлардың құрылысын, тіршілігін, қоректенуін, көбеюін және мінез-құлқын зерттейді.

Жануарлар дайын органикалық заттармен қоректенеді. Олар қозғала алады, сыртқы ортаға жауап береді және көбінде жүйке жүйесі жақсы дамыған.

Жануарлар омыртқалы және омыртқасыз болып бөлінеді. Омыртқалы жануарларға балықтар, қосмекенділер, бауырымен жорғалаушылар, құстар және сүтқоректілер жатады. Омыртқасыздарға жәндіктер, құрттар, моллюскалар және өрмекшітәрізділер жатады.

Жануарлар табиғаттағы қоректік тізбекте маңызды орын алады. Олар экожүйедегі тепе-теңдікті сақтауға көмектеседі.
`
  },

  human: {
    title: "Адам анатомиясы",
    text: `
Адам анатомиясы адам денесінің құрылысын зерттейтін ғылым.

Адам ағзасы бірнеше мүшелер жүйесінен тұрады. Мысалы: тірек-қимыл жүйесі, тыныс алу жүйесі, қанайналым жүйесі, ас қорыту жүйесі, жүйке жүйесі және сезім мүшелері.

Жүрек қанды бүкіл денеге айдайды. Өкпе оттекті қабылдап, көмірқышқыл газын шығарады. Ми ағзаның барлық қызметін басқарады. Асқазан мен ішек тағамды қорытады.

Адам ағзасының дұрыс жұмыс істеуі үшін дұрыс тамақтану, қозғалыс, ұйқы және жеке тазалық сақтау өте маңызды.
`
  },

  ecology: {
    title: "Экология",
    text: `
Экология тірі ағзалардың бір-бірімен және қоршаған ортамен байланысын зерттейді.

Экологияда экожүйе, қоректік тізбек, табиғи тепе-теңдік, ластану және табиғатты қорғау сияқты ұғымдар қарастырылады.

Қазіргі кезде экологиялық мәселелер өте маңызды. Ауа, су және топырақтың ластануы адамдарға, жануарларға және өсімдіктерге зиян келтіреді.

Табиғатты қорғау үшін қоқысты азайту, суды үнемдеу, ағаш отырғызу, қайта өңдеу және жануарларды қорғау қажет.
`
  },

  genetics: {
    title: "Генетика",
    text: `
Генетика тұқымқуалаушылық пен өзгергіштікті зерттейтін биология бөлімі.

Тұқымқуалаушылық дегеніміз — ата-анадан ұрпаққа белгілердің берілуі. Мысалы, көз түсі, шаш түсі, бой ұзындығы сияқты белгілер гендер арқылы беріледі.

ДНҚ — ағза туралы ақпарат сақталатын молекула. Гендер ДНҚ-ның белгілі бір бөліктері болып табылады. Олар ағзаның дамуына және белгілердің қалыптасуына әсер етеді.

Генетика медицинада, ауыл шаруашылығында және биотехнологияда кеңінен қолданылады.
`
  },

  microbiology: {
    title: "Микробиология",
    text: `
Микробиология микроағзаларды зерттейтін ғылым.

Микроағзаларға бактериялар, вирустар, саңырауқұлақтар және қарапайымдылар жатады. Олар өте кішкентай болғандықтан, көбінесе микроскоп арқылы ғана көрінеді.

Кейбір микроағзалар адамға пайдалы. Мысалы, айран, йогурт, нан дайындауда пайдалы бактериялар қолданылады. Ал кейбір микроағзалар ауру тудыруы мүмкін.

Микробиология медицина, тағам өндірісі және экология салаларында өте маңызды.
`
  }
};

function openTopic(topicKey) {
  const topic = topicTexts[topicKey];
  document.getElementById("modalTitle").innerText = topic.title;
  document.getElementById("modalText").innerText = topic.text;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function filterTopics(category) {
  const cards = document.querySelectorAll(".topic-card");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
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

// TEST
const questions = [
  {
    question: "Биология нені зерттейді?",
    answers: ["Тек тастарды", "Тірі ағзаларды", "Тек ғарышты"],
    correct: 1
  },
  {
    question: "Фотосинтез қай мүшеде жүреді?",
    answers: ["Жапырақта", "Тамырда", "Сабақта"],
    correct: 0
  },
  {
    question: "ДНҚ нені сақтайды?",
    answers: ["Тек суды", "Ағза туралы ақпаратты", "Тек оттекті"],
    correct: 1
  },
  {
    question: "Экология нені зерттейді?",
    answers: ["Ағзалар мен ортаның байланысын", "Тек адамның сүйегін", "Тек планеталарды"],
    correct: 0
  },
  {
    question: "Жүрек қандай қызмет атқарады?",
    answers: ["Қанды айдайды", "Тағам қорытады", "Оттек шығарады"],
    correct: 0
  },
  {
    question: "Микроағзаларды қандай құралмен көруге болады?",
    answers: ["Телескоппен", "Микроскоппен", "Термометрмен"],
    correct: 1
  },
  {
    question: "Өсімдіктер фотосинтез кезінде не бөледі?",
    answers: ["Оттек", "Пластик", "Түтін"],
    correct: 0
  },
  {
    question: "Адамның ағзасын қай мүше басқарады?",
    answers: ["Ми", "Қол", "Асқазан"],
    correct: 0
  },
  {
    question: "Жануарлар қандай заттармен қоректенеді?",
    answers: ["Дайын органикалық заттармен", "Тек күн сәулесімен", "Тек таспен"],
    correct: 0
  },
  {
    question: "Табиғатты қорғаудың бір жолы қандай?",
    answers: ["Қоқысты көбейту", "Суды ластау", "Ағаш отырғызу"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
  answered = false;

  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkQuizAnswer(index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
  document.getElementById("score").innerText =
    `Ұпай: ${score} / ${questions.length}`;
}

function checkQuizAnswer(index) {
  if (answered) return;

  answered = true;

  const q = questions[currentQuestion];

  if (index === q.correct) {
    score++;
    document.getElementById("result").innerText = "✅ Дұрыс жауап!";
  } else {
    document.getElementById("result").innerText =
      `❌ Қате. Дұрыс жауап: ${q.answers[q.correct]}`;
  }

  document.getElementById("score").innerText =
    `Ұпай: ${score} / ${questions.length}`;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    document.getElementById("question").innerText = "Тест аяқталды!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerText =
      `Сіздің нәтижеңіз: ${score} / ${questions.length}`;

    if (score >= 8) {
      document.getElementById("score").innerText = "Өте жақсы нәтиже! 🌿";
    } else if (score >= 5) {
      document.getElementById("score").innerText = "Жақсы, бірақ тағы қайталауға болады.";
    } else {
      document.getElementById("score").innerText = "Тақырыптарды қайта оқып шыққаныңыз дұрыс.";
    }
  }
}

showQuestion();