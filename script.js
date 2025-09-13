
const questions = [
      {
        text: "Pick a perfect first date:",
        options: [
          { text: "Stargazing on rooftop", value: "Wonwoo" },
          { text: "Theme park adventure", value: "Hoshi" },
          { text: "Fancy dinner & flowers", value: "Joshua" },
          { text: "Dancing in the rain", value: "Dino" }
        ]
      },
      {
        text: "Which personality melts your heart?",
        options: [
          { text: "Cold but caring", value: "Vernon" },
          { text: "Sweet & clingy", value: "Mingyu" },
          { text: "Protective leader", value: "S.Coups" },
          { text: "Chill & artistic", value: "The8" }
        ]
      },
      {
        text: "Which talent attracts you the most?",
        options: [
          { text: "Deep vocals", value: "DK" },
          { text: "Sharp dance", value: "Jun" },
          { text: "High notes", value: "Woozi" },
          { text: "Stage energy", value: "Hoshi" }
        ]
      },
      {
        text: "Choose a love language:",
        options: [
          { text: "Words of affirmation", value: "Joshua" },
          { text: "Physical touch", value: "Mingyu" },
          { text: "Quality time", value: "Wonwoo" },
          { text: "Acts of service", value: "DK" }
        ]
      },
      {
        text: "What kind of vibe do you love?",
        options: [
          { text: "Quiet but thoughtful", value: "Jeonghan" },
          { text: "Funny and cute", value: "Seungkwan" },
          { text: "Mature and elegant", value: "The8" },
          { text: "Cool but warm", value: "Vernon" }
        ]
      },
      {
        text: "Pick something to do together:",
        options: [
          { text: "Play games all night", value: "Wonwoo" },
          { text: "Cook dinner", value: "Woozi" },
          { text: "Go dancing", value: "Hoshi" },
          { text: "Make silly TikToks", value: "Dino" }
        ]
      },
      {
        text: "You’d love if he...",
        options: [
          { text: "Carries your bag", value: "Mingyu" },
          { text: "Writes you a song", value: "Woozi" },
          { text: "Makes you laugh nonstop", value: "Seungkwan" },
          { text: "Stares at you lovingly", value: "Jun" }
        ]
      },
      {
        text: "Which look do you fall for?",
        options: [
          { text: "Soft and angelic", value: "Jeonghan" },
          { text: "Manly and tall", value: "S.Coups" },
          { text: "Chic and stylish", value: "The8" },
          { text: "Cute and goofy", value: "DK" }
        ]
      },
      {
        text: "Pick a place to go together:",
        options: [
          { text: "A calm beach", value: "Vernon" },
          { text: "Luxury hotel", value: "Mingyu" },
          { text: "Art museum", value: "The8" },
          { text: "Backyard picnic", value: "Joshua" }
        ]
      },
      {
        text: "What's your dream boyfriend trait?",
        options: [
          { text: "Funny & caring", value: "Seungkwan" },
          { text: "Gentle & musical", value: "Woozi" },
          { text: "Protective & honest", value: "S.Coups" },
          { text: "Beautiful & mysterious", value: "Jun" }
        ]
      }
    ];

    let currentQuestion = 0;
    const scores = {};

    function showQuestion() {
      const q = questions[currentQuestion];
      document.getElementById("question-text").textContent = q.text;

      const optionsDiv = document.getElementById("options-container");
      optionsDiv.innerHTML = "";

      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = option.text;
        btn.onclick = () => {
          scores[option.value] = (scores[option.value] || 0) + 1;
          currentQuestion++;
          if (currentQuestion < questions.length) {
            showQuestion();
          } else {
            showResult();
          }
        };
        optionsDiv.appendChild(btn);
      });
    }

    function showResult() {
      document.getElementById("quiz-container").style.display = "none";
      let max = 0;
      let boyfriend = "";

      for (const member in scores) {
        if (scores[member] > max) {
          max = scores[member];
          boyfriend = member;
        }
      }

      document.getElementById("result").textContent =
        ` Your boyfriend is: ${boyfriend}! 💘`;
    }

    showQuestion();