/* ========== 챗봇 시스템 프롬프트 ========== */
const SYSTEM_PROMPT = `너는 이 포트폴리오 주인의 페르소나 비서야. 방문자에게 밝고 정중하게, 주인을
잘 아는 사람처럼 답해. 답은 2~4문장, 마크다운 기호(별표 등) 없이 평문으로만.
아래 이력 지식을 근거로 답하되, 지식에 없는 질문이 오면 아는 선에서 자연스럽게
답하고 "자세한 건 저에게 직접 물어보시는 게 정확해요. 연락처를 참고해 주세요!"로
부드럽게 연결해. 과장하거나 없는 경력을 만들어내지 마.

이력 지식:
**한 줄 소개**
데이터와 서비스 기획, AI를 결합해 구체적인 결과물로 구현하는 열정적인 대학생 김세은입니다.

---

### 기본 정보
- **소속**: 성균관대학교 글로벌경영학과 재학, 소프트웨어 복수전공 (예정 2027)
- **전공·복수전공**: 글로벌경영·소프트웨어
- **언어**: 한국어(모국어), 영어(업무), 독일어(일상)
- **주요 활동**: 우수 학부 연구생(4개월, A 교수 지도), 프로그래밍 동아리 '멋쟁이사자처럼' 2년, 교내 밴드 동아리 베이스 2년

---

### 경험 요약

| 경험 | 역할 | 주요 결과 |
|------|------|-----------|
| **TassieBirdAl 해커톤 (University of Tasmania, 2025-07)** | Python·TensorFlow 활용 오디오 데이터 전처리·모델 학습 담당 | 멸종위기 조류 보호를 위한 음성 분류 AI 프로토타입 완성, 팀 2위 수상 |
| **University of Tasmania International Internship (2025-여름)** | 오디오 데이터 활용 머신러닝 프로젝트 수행 | 현지 데이터와 AI 모델을 결합한 실험 보고서 제출 |
| **Hanken School of Economics 학점교류 (2025-겨울)** | Sustainable Finance 과목 수강 및 프로젝트 | ESG 기반 금융 전략·지배구조 분석·보고서 작성 |
| **Lund University 학점교류 (2025-겨울)** | Critical Management 과목 수강 및 프로젝트 | 경영 담론 사례 분석 및 사회·환경적 관점 보고서 제출 |
| **HWR Berlin 학점교류 (2024-여름)** | Entrepreneurship and Innovation 과목 수강 및 프로젝트 | 스타트업 비즈니스 모델 개발·시뮬레이션 보고서 제출 |
| **산학협력 A사(뷰티테크) (2025-06)** | 신사업 리서치·전략 수립 | 피부 진단 기기 비즈니스 모델·데이터 가치사슬 조사, 서비스 전략 제안서 도출 |
| **산학협력 B사(가상자산 거래소) (2025-05)** | 유저·거래량 증대 전략 수립 | 웹 크롤링·사용자 인터뷰로 행동 패턴 분석, UX 개선 아이디어 전환 |
| **Bus Stop Safety 보행자 안전 장치 프로토타입 (2024-01-02)** | 하드웨어 프로토타입 설계·제작 | 버스 방향지시등 인식 하드웨어 프로토타입 구현, 현장 테스트 통해 아이디어 검증 |

---

### 강점 다섯 가지

1. **AI·머신러닝·오디오 처리** – 멸종위기 조류 음성 분류 AI를 Python·TensorFlow로 구현 (TassieBirdAl 해커톤).
2. **데이터 기반 비즈니스 모델링** – 뷰티테크·가상자산 거래소와의 산학협력을 통해 비즈니스 모델·데이터 가치사슬을 분석·전략 제안.
3. **UX 리서치·프로토타이핑** – 현장 사용자 리서치와 프로토타입 검증을 바탕으로 Bus Stop Safety 하드웨어·UX 개선 수행.
4. **글로벌 학습·다학제 협업** – 영국, 스웨덴, 독일, 호주 등 4개 해외 대학 학점교류 경험 및 현지 프로젝트 수행.
5. **리더십·조직 운영** – 우수 학부 연구생, 프로그래밍 동아리 '멋쟁이사자처럼' 회장, 학술동아리 회장·명예의 전당 등재 등 조직 경험 보유.

---

### 예상 질문과 답변

| 질문 | 답변 |
|------|------|
| **학력과 전공이 어떻게 되나요?** | 성균관대학교 글로벌경영학과에 재학 중이며, 소프트웨어 복수전공을 병행하고 있습니다. |
| **가장 기억에 남는 프로젝트와 그 성과는?** | TassieBirdAl 해커톤에서 멸종위기 조류를 보호하는 음성 분류 AI를 Python·TensorFlow로 개발해 팀 2위 수상했습니다. |
| **주요 스킬과 활용 경험이 궁금합니다.** | Python·JavaScript·React·Next.js 등 프로그래밍, TensorFlow 기반 머신러닝·오디오 처리, Figma·UX Research·프로토타이핑, Market Research·Data Visualization·Git·Jira 등을 활용해 데이터 분석부터 서비스 기획까지 전 과정을 수행했습니다.`;

/**
 * 포트폴리오 원페이지 — 상호작용 스크립트
 * 다크모드, 스크롤 내비, 섹션 등장 효과, 부드러운 스크롤, 챗봇
 */

(function () {
  "use strict";

  /* ========== DOM 요소 참조 ========== */
  const navbar = document.getElementById("navbar");
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const fadeElements = document.querySelectorAll(".fade-in");
  const sections = document.querySelectorAll("section[id]");

  const THEME_KEY = "portfolio-theme";

  /* ========== 다크모드 — localStorage 저장 및 복원 ========== */
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  applyTheme(getPreferredTheme());

  themeToggle.addEventListener("click", toggleTheme);

  /* ========== 스크롤 시 내비게이션 배경 적용 ========== */
  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ========== IntersectionObserver — 섹션 등장 효과 ========== */
  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  fadeElements.forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ========== 부드러운 스크롤 — 내비 링크 클릭 ========== */
  function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;

    const navHeight = navbar.offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");
      smoothScrollTo(href);
      closeMobileMenu();
    });
  });

  /* 로고 클릭 시에도 부드러운 스크롤 */
  document.querySelector(".nav-logo").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollTo("#hero");
    closeMobileMenu();
  });

  /* 히어로 CTA 버튼 */
  document.querySelector(".hero-cta").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollTo("#about");
  });

  /* ========== 스크롤 위치에 따른 활성 내비 링크 ========== */
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 80;

    let currentId = "hero";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href").slice(1);
      link.classList.toggle("active", href === currentId);
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  /* ========== 모바일 햄버거 메뉴 ========== */
  function closeMobileMenu() {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
  }

  function openMobileMenu() {
    navMenu.classList.add("open");
    navToggle.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "메뉴 닫기");
  }

  navToggle.addEventListener("click", function () {
    if (navMenu.classList.contains("open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  /* 메뉴 외부 클릭 시 닫기 */
  document.addEventListener("click", function (e) {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  /* 화면 크기 변경 시 모바일 메뉴 초기화 */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
})();

/* ========== 챗봇 ========== */
(function () {
  "use strict";

  const UPSTAGE_API_URL = "https://api.upstage.ai/v1/chat/completions";
  const UPSTAGE_MODEL = "solar-pro3";
  const API_KEY_STORAGE = "upstage-api-key";
  const IS_LOCAL_FILE = location.protocol === "file:";

  const chatbot = document.getElementById("chatbot");
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatbotPanel = document.getElementById("chatbotPanel");
  const chatbotClose = document.getElementById("chatbotClose");
  const chatbotMessages = document.getElementById("chatbotMessages");
  const chatbotForm = document.getElementById("chatbotForm");
  const chatbotInput = document.getElementById("chatbotInput");
  const chatbotSend = document.getElementById("chatbotSend");

  let conversationHistory = [];
  let isSending = false;

  /* 패널 열기/닫기 */
  function openChatbot() {
    chatbot.classList.add("open");
    chatbotPanel.setAttribute("aria-hidden", "false");
    chatbotInput.focus();
  }

  function closeChatbot() {
    chatbot.classList.remove("open");
    chatbotPanel.setAttribute("aria-hidden", "true");
  }

  chatbotToggle.addEventListener("click", openChatbot);
  chatbotClose.addEventListener("click", closeChatbot);

  /* 메시지 DOM 추가 */
  function appendMessage(text, type) {
    const div = document.createElement("div");
    div.className = "chatbot-message chatbot-message--" + type;
    const p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return div;
  }

  /* 로딩 표시 */
  function showLoading() {
    const div = document.createElement("div");
    div.className = "chatbot-message chatbot-message--loading";
    div.id = "chatbotLoading";
    div.innerHTML =
      '<div class="chatbot-loading-dots" aria-label="응답 생성 중">' +
      "<span></span><span></span><span></span></div>";
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function hideLoading() {
    const loading = document.getElementById("chatbotLoading");
    if (loading) loading.remove();
  }

  /* 전송 중 UI 잠금 */
  function setSendingState(sending) {
    isSending = sending;
    chatbotInput.disabled = sending;
    chatbotSend.disabled = sending;
  }

  /* 로컬 테스트용 API 키 조회·입력 */
  function getLocalApiKey() {
    const saved = localStorage.getItem(API_KEY_STORAGE);
    if (saved) return saved;

    const input = window.prompt("Upstage API 키를 붙여넣어 주세요 (up_으로 시작)");
    if (!input || !input.trim()) return null;

    const key = input.trim();
    localStorage.setItem(API_KEY_STORAGE, key);
    return key;
  }

  function clearLocalApiKey() {
    localStorage.removeItem(API_KEY_STORAGE);
  }

  /* API 요청 — 환경에 따라 분기 */
  async function requestChatCompletion(messages) {
    if (IS_LOCAL_FILE) {
      const apiKey = getLocalApiKey();
      if (!apiKey) {
        throw new Error("API_KEY_MISSING");
      }

      const response = await fetch(UPSTAGE_API_URL, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: UPSTAGE_MODEL,
          messages: messages,
        }),
      });

      const data = await response.json();

      if (response.status === 401 || response.status === 403) {
        clearLocalApiKey();
        throw new Error("AUTH_ERROR");
      }

      if (!response.ok) {
        throw new Error("API_ERROR");
      }

      return data;
    }

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: messages }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("API_ERROR");
    }

    return data;
  }

  /* 응답 텍스트 추출 */
  function extractReply(data) {
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content.trim();
    }
    return null;
  }

  /* 메시지 전송 */
  async function sendMessage(userText) {
    if (isSending || !userText.trim()) return;

    const text = userText.trim();
    chatbotInput.value = "";
    appendMessage(text, "user");
    conversationHistory.push({ role: "user", content: text });

    setSendingState(true);
    showLoading();

    try {
      const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...conversationHistory,
      ];

      const data = await requestChatCompletion(messages);
      hideLoading();

      const reply = extractReply(data);
      if (!reply) {
        appendMessage("잠시 후 다시 시도해 주세요.", "error");
        conversationHistory.pop();
        return;
      }

      appendMessage(reply, "bot");
      conversationHistory.push({ role: "assistant", content: reply });
    } catch (error) {
      hideLoading();

      if (error.message === "AUTH_ERROR") {
        appendMessage(
          "키가 올바르지 않아요. 다시 질문하시면 새로 입력받을게요.",
          "error"
        );
        conversationHistory.pop();
      } else if (error.message === "API_KEY_MISSING") {
        appendMessage("API 키 입력이 취소되었어요. 다시 시도해 주세요.", "error");
        conversationHistory.pop();
      } else {
        appendMessage("잠시 후 다시 시도해 주세요.", "error");
        conversationHistory.pop();
      }
    } finally {
      setSendingState(false);
      chatbotInput.focus();
    }
  }

  chatbotForm.addEventListener("submit", function (e) {
    e.preventDefault();
    sendMessage(chatbotInput.value);
  });
})();
