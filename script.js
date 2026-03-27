const cvData = {
  it: {
    location: "Milano, Italia [DA CONFERMARE]",
    title: "Mobile Software Developer | Flutter Specialist | Team Lead",
    summaryLabel: "Profilo",
    summary:
      "Software Developer con oltre 7 anni di esperienza nello sviluppo digitale, cresciuto da Software Developer a Team Leader in Engitel S.p.A. Specializzato in sviluppo mobile cross-platform (Flutter, Xamarin), integrazione REST API e delivery end-to-end. Esperienza concreta nel coordinamento di 5 sviluppatori e nella realizzazione di prodotti ad ampia adozione.",
    experienceLabel: "Esperienza",
    experiences: [
      {
        role: "Engitel S.p.A. - Team Leader",
        period: "2021-2025",
        bullets: [
          "Sviluppo app mobile cross-platform con Flutter.",
          "Integrazione con backend via REST API (C#, SQL).",
          "Coordinamento di un team di 5 sviluppatori e gestione scadenze.",
          "Supporto alla delivery con focus su qualita e stabilita."
        ]
      },
      {
        role: "Engitel S.p.A. - Software Developer",
        period: "2017-2021",
        bullets: [
          "Sviluppo mobile cross-platform con Xamarin.",
          "Code review, testing e supporto ai rilasci.",
          "Collaborazione con clienti e stakeholder su analisi funzionali."
        ]
      },
      {
        role: "Progetto ATM Milano - Full Stack Developer",
        period: "2018-2024",
        bullets: [
          "Sviluppo full stack della nuova app ufficiale ATM Milano.",
          "Integrazione sistemi per titoli di viaggio, pagamenti, mappe e percorsi.",
          "Ottimizzazione performance per fluidita anche su device mid-range.",
          "Impatto: oltre 2 milioni di utenti attivi."
        ]
      }
    ],
    skillsLabel: "Competenze Tecniche",
    skills: [
      "Flutter",
      "Dart",
      "Xamarin",
      "C#",
      "SQL",
      "REST API",
      ".NET",
      "Git",
      "CI/CD",
      "Code Review",
      "Testing"
    ],
    leadershipLabel: "Leadership & PM",
    leadership: [
      "Team leadership",
      "Project management",
      "Stakeholder management",
      "Problem solving"
    ],
    educationLabel: "Formazione",
    education: "Diploma di Perito Informatico - IS Curie Sraffa, Milano (2012-2017)",
    languagesLabel: "Lingue",
    languages: [
      "Italiano: [DA CONFERMARE livello]",
      "Inglese: [DA CONFERMARE livello]",
      "Francese: [DA CONFERMARE livello]"
    ],
    keywordsLabel: "Keyword ATS",
    keywords:
      "Flutter, Dart, Mobile Development, Cross-platform, Xamarin, REST API, C#, SQL, CI/CD, Code Review, Testing, Team Leadership, Stakeholder Management, Performance Optimization, Scalability",
    printCta: "Esporta PDF"
  },
  en: {
    location: "Milan, Italy [TO BE CONFIRMED]",
    title: "Mobile Software Developer | Flutter Specialist | Team Lead",
    summaryLabel: "Summary",
    summary:
      "Software Developer with 7+ years of experience in digital product development, grown from Software Developer to Team Lead at Engitel S.p.A. Specialized in cross-platform mobile development (Flutter, Xamarin), REST API integration, and end-to-end delivery. Hands-on experience coordinating 5 developers and shipping products at large scale.",
    experienceLabel: "Experience",
    experiences: [
      {
        role: "Engitel S.p.A. - Team Leader",
        period: "2021-2025",
        bullets: [
          "Developed cross-platform mobile apps with Flutter.",
          "Integrated backend systems through REST APIs (C#, SQL).",
          "Coordinated a team of 5 developers and delivery timelines.",
          "Supported release quality with a strong engineering focus."
        ]
      },
      {
        role: "Engitel S.p.A. - Software Developer",
        period: "2017-2021",
        bullets: [
          "Built cross-platform mobile applications with Xamarin.",
          "Performed code reviews, testing, and release support.",
          "Worked with clients and stakeholders on functional analysis."
        ]
      },
      {
        role: "ATM Milan Official App - Full Stack Developer",
        period: "2018-2024",
        bullets: [
          "Core contributor to the new official ATM Milan app.",
          "Integrated ticket validation, payments, maps, and route planning.",
          "Optimized performance for smooth behavior on mid-range devices.",
          "Impact: more than 2 million active users."
        ]
      }
    ],
    skillsLabel: "Technical Skills",
    skills: [
      "Flutter",
      "Dart",
      "Xamarin",
      "C#",
      "SQL",
      "REST API",
      ".NET",
      "Git",
      "CI/CD",
      "Code Review",
      "Testing"
    ],
    leadershipLabel: "Leadership & PM",
    leadership: [
      "Team leadership",
      "Project management",
      "Stakeholder management",
      "Problem solving"
    ],
    educationLabel: "Education",
    education: "IT Technical Diploma - IS Curie Sraffa, Milan (2012-2017)",
    languagesLabel: "Languages",
    languages: [
      "Italian: [TO BE CONFIRMED]",
      "English: [TO BE CONFIRMED]",
      "French: [TO BE CONFIRMED]"
    ],
    keywordsLabel: "ATS Keywords",
    keywords:
      "Flutter, Dart, Mobile Development, Cross-platform, Xamarin, REST API, C#, SQL, CI/CD, Code Review, Testing, Team Leadership, Stakeholder Management, Performance Optimization, Scalability",
    printCta: "Export PDF"
  }
};

const languageSelect = document.getElementById("language-select");
const themeSelect = document.getElementById("theme-select");
const printBtn = document.getElementById("print-btn");

function renderCV(lang) {
  const data = cvData[lang];

  document.documentElement.lang = lang;
  document.getElementById("cv-location").textContent = data.location;
  document.getElementById("cv-title").textContent = data.title;
  document.getElementById("label-summary").textContent = data.summaryLabel;
  document.getElementById("cv-summary").textContent = data.summary;
  document.getElementById("label-experience").textContent = data.experienceLabel;
  document.getElementById("label-skills").textContent = data.skillsLabel;
  document.getElementById("label-leadership").textContent = data.leadershipLabel;
  document.getElementById("label-education").textContent = data.educationLabel;
  document.getElementById("label-languages").textContent = data.languagesLabel;
  document.getElementById("label-keywords").textContent = data.keywordsLabel;
  document.getElementById("cv-education").textContent = data.education;
  document.getElementById("cv-keywords").textContent = data.keywords;
  printBtn.textContent = data.printCta;

  const expRoot = document.getElementById("cv-experience");
  expRoot.innerHTML = "";
  data.experiences.forEach((exp) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3>${exp.role}</h3>
      <small>${exp.period}</small>
      <ul>${exp.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    `;
    expRoot.appendChild(article);
  });

  const skillRoot = document.getElementById("cv-skills");
  skillRoot.innerHTML = data.skills.map((s) => `<li>${s}</li>`).join("");

  const leadRoot = document.getElementById("cv-leadership");
  leadRoot.innerHTML = data.leadership.map((s) => `<li>${s}</li>`).join("");

  const langRoot = document.getElementById("cv-languages");
  langRoot.innerHTML = data.languages.map((s) => `<li>${s}</li>`).join("");
}

languageSelect.addEventListener("change", (event) => {
  const lang = event.target.value;
  localStorage.setItem("cv_lang", lang);
  renderCV(lang);
});

themeSelect.addEventListener("change", (event) => {
  const theme = event.target.value;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("cv_theme", theme);
});

printBtn.addEventListener("click", () => {
  window.print();
});

const savedLang = localStorage.getItem("cv_lang") || "it";
const savedTheme = localStorage.getItem("cv_theme") || "siena";

languageSelect.value = savedLang;
themeSelect.value = savedTheme;
document.documentElement.dataset.theme = savedTheme;
renderCV(savedLang);
