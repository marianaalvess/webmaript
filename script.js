(() => {
  // alert("Flow: Start"); // Removed debug
  window.onerror = function (msg, url, line) {
    console.error("Global Error: " + msg + " at " + line);
    // alert("Error: " + msg); // Uncomment if needed for extreme debugging
  };
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  const STORAGE = {
    theme: "webmari.theme.v2", // Reboot: force fresh start
    lang: "webmari.lang",
  };

  // Defensive init
  const i18n = window.i18n || {};
  if (!window.i18n) console.error("CRITICAL: Translations missing!");
  /* =========================================
     WHATSAPP DYNAMIC LINK
     ========================================= */
  const updateWhatsAppLink = () => {
    try {
      const btn = $(".contact-btn--whatsapp");
      if (!btn) return;

      // Get current message based on active language
      const lang = document.documentElement.lang || "pt";
      const currentLangData = i18n[lang] || i18n["pt"];
      const msg = currentLangData["contact.whatsapp_msg"] || "Olá! Vim através do site.";

      // Phone number
      const phone = "351925928900";

      // Update href
      btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    } catch (e) {
      console.error("WhatsApp link update failed:", e);
    }
  };

  // NEW: swap brand logos based on theme AND device
  const applyBrandLogoForTheme = (theme) => {
    const isMobile = window.matchMedia("(max-width: 860px)").matches;

    $$("img.brand__logo").forEach((img) => {
      const desktopLight = img.getAttribute("data-logo-light");
      const desktopDark = img.getAttribute("data-logo-dark");
      const mobileLight = img.getAttribute("data-logo-mobile-light");
      const mobileDark = img.getAttribute("data-logo-mobile-dark");

      let nextSrc = "";
      if (isMobile && mobileLight && mobileDark) {
        nextSrc = theme === "dark" ? (mobileDark || desktopDark) : (mobileLight || desktopLight);
      } else {
        nextSrc = theme === "dark" ? (desktopDark || desktopLight) : (desktopLight || desktopDark);
      }

      if (nextSrc && img.getAttribute("src") !== nextSrc) {
        // Fade out → swap src → fade in to avoid flash
        img.style.transition = "opacity 0.15s ease";
        img.style.opacity = "0";
        setTimeout(() => {
          img.setAttribute("src", nextSrc);
          img.style.opacity = "1";
        }, 150);
      }
    });
  };

  // Theme
  const applyTheme = (theme) => {
    // Suppress all CSS transitions briefly to avoid color flash
    const style = document.createElement("style");
    style.id = "no-transition-override";
    style.textContent = "*, *::before, *::after { transition: none !important; }";
    document.head.appendChild(style);

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE.theme, theme);

    const t = $("[data-theme-toggle]");
    if (t) t.setAttribute("aria-checked", theme === "dark" ? "true" : "false");

    // Re-enable transitions after one paint
    // Use both rAF and setTimeout for iOS Safari compatibility
    const reEnable = () => {
      const el = document.getElementById("no-transition-override");
      if (el) el.remove();
      // Swap logo after transitions are re-enabled
      applyBrandLogoForTheme(theme);
    };
    let done = false;
    const once = () => { if (!done) { done = true; reEnable(); } };
    requestAnimationFrame(() => requestAnimationFrame(once));
    setTimeout(once, 50); // iOS Safari fallback
  };

  // Listen for resize to update logo if needed
  window.addEventListener("resize", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    applyBrandLogoForTheme(currentTheme);
  });

  const getInitialTheme = () => {
    const saved = localStorage.getItem(STORAGE.theme);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
  };

  // Language
  const applyLang = (lang) => {
    const dict = i18n[lang] || i18n.pt;

    document.documentElement.lang = lang === "pt" ? "pt" : lang;
    localStorage.setItem(STORAGE.lang, lang);

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val === "string") {
        if (key === "seo.text") {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    const current = $("[data-lang-current]");
    if (current) current.textContent = lang.toUpperCase();

    // NEW: Notify other components (like chatbot)
    document.dispatchEvent(new CustomEvent("webmari:lang-change", { detail: { lang } }));

    updateWhatsAppLink(); // Update link when language changes
  };

  const getInitialLang = () => {
    const saved = localStorage.getItem(STORAGE.lang);
    if (saved && i18n[saved]) return saved;
    return "pt";
  };

  // Header elevate on scroll
  const header = $(".header");

  // NEW: keep CSS --header-h in sync with actual header height (fixed header spacing)


  const syncHeaderHeightVar = () => {
    if (!header) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const h = Math.ceil(entry.contentRect.height || 0);
        if (h > 0) document.documentElement.style.setProperty("--header-h", `${h}px`);
      }
    });
    observer.observe(header);
  };

  const setElevated = () => {
    const elevated = window.scrollY > 8;
    header?.setAttribute("data-elevated", elevated ? "true" : "false");
  };

  // Smooth scroll + close nav
  const closeNav = () => {
    const toggle = $("[data-nav-toggle]");
    const panel = $("[data-nav-panel]");
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", "false");
    panel.setAttribute("data-open", "false");
    document.body.style.overflow = "";
  };

  const openNav = () => {
    const toggle = $("[data-nav-toggle]");
    const panel = $("[data-nav-panel]");
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", "true");
    panel.setAttribute("data-open", "true");
    document.body.style.overflow = "hidden";
  };

  const toggleNav = () => {
    const toggle = $("[data-nav-toggle]");
    const expanded = toggle?.getAttribute("aria-expanded") === "true";
    expanded ? closeNav() : openNav();
  };

  // Language menu
  const setLangMenuOpen = (open) => {
    const btn = $("[data-lang-toggle]");
    const menu = $("[data-lang-menu]");
    if (!btn || !menu) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("data-open", open ? "true" : "false");
  };

  // Reveal on scroll (fade-in + slide-up)
  const setupReveal = () => {
    const els = $$(".reveal");
    if (!els.length) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px", // trigger slightly before fully in view
      }
    );

    els.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      io.observe(el);
    });
  };

  // NEW: trigger hero entrance after first paint (no scroll dependency)
  const setLoadedFlag = () => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body?.setAttribute("data-loaded", "true");

        if (!reduceMotion && window.matchMedia("(min-width: 768px)").matches) {
          // ensure hero items animate in immediately on load
          $$("#top .reveal").forEach((el) => el.classList.add("is-visible"));

          // Trigger hero typing animation
          const heroLines = [
            $('[data-i18n="hero.h1.a"]'),
            $('[data-i18n="hero.h1.b"]'),
            $('[data-i18n="hero.h1.c"]'),
          ];
          typewriterEffect(heroLines, 500);

          // Setup observer for other sections
          setupTypewriterObserver();
        }
      });
    });
  };


  // FAQ: single-open behavior (optional)
  const setupFaq = () => {
    const root = $("[data-faq]");
    if (!root) return;
    const items = $$("details", root);
    items.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (!d.open) return;
        items.forEach((other) => {
          if (other !== d) other.open = false;
        });
      });
    });
  };

  // Form handling removed

  const setupBackToTop = () => {
    const btn = $("[data-backtotop]");
    if (!btn) return;
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  // ADD: minimal client-side error overlay (helps differentiate JS errors vs server 500)
  const installClientErrorOverlay = () => {
    let shown = false;

    const show = (title, message) => {
      if (shown) return;
      shown = true;

      const el = document.createElement("div");
      el.className = "debug-overlay";
      el.setAttribute("role", "status");
      el.innerHTML = `
        <div class="debug-overlay__title">${title}</div>
        <p class="debug-overlay__msg"></p>
      `;

      el.querySelector(".debug-overlay__msg").textContent =
        `${message}\n\n` +
        `Nota: HTTP 500 é erro do servidor. Verifique o Network/Logs para o request que falhou.`;

      document.body.appendChild(el);
    };

    window.addEventListener(
      "error",
      (e) => {
        // Resource loading errors (img, script, css) return a generic Event, not ErrorEvent
        if (e instanceof Event && e.target instanceof HTMLElement) {
          const src = e.target.src || e.target.href || "unknown source";
          const tag = e.target.tagName.toLowerCase();
          console.warn(`Resource failed to load: <${tag}> at ${src}`);
          // Optional: don't show overlay for missing images to avoid scaring the user, 
          // or show a milder warning. For now, let's just log it to console and NOT show the overlay.
          return;
        }

        const msg = e?.error?.stack || e?.message || String(e);
        show("Erro no JavaScript (cliente)", msg);
      },
      true
    );

    window.addEventListener("unhandledrejection", (e) => {
      const reason = e?.reason;
      const msg = reason?.stack || reason?.message || String(reason);
      show("Promise rejeitada (cliente)", msg);
    });
  };

  // Init
  applyTheme(getInitialTheme());
  applyLang(getInitialLang());

  // ADD: diagnostics overlay (only activates on errors)
  installClientErrorOverlay();


  // NEW: hard reset interactive menus on load (prevents stuck states)
  closeNav();
  setLangMenuOpen(false);

  // NEW: if user rotates/resizes to desktop, force-close mobile drawer
  const mqDesktop = window.matchMedia?.("(min-width: 861px)");
  mqDesktop?.addEventListener?.("change", (e) => {
    if (e.matches) closeNav();
  });

  // NEW: measure once after first layout, and keep updated via Observer
  syncHeaderHeightVar();
  // removed window resize listener for syncHeaderHeightVar as it now uses ResizeObserver

  // Header + scroll
  setElevated();
  window.addEventListener("scroll", setElevated, { passive: true });

  // Nav events
  $("[data-nav-toggle]")?.addEventListener("click", toggleNav);
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      closeNav();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  });

  // Close nav on escape / outside click
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNav();
      setLangMenuOpen(false);
    }
  });
  document.addEventListener("click", (e) => {
    const panel = $("[data-nav-panel]");
    const toggle = $("[data-nav-toggle]");
    if (panel?.getAttribute("data-open") === "true") {
      const inside = panel.contains(e.target) || toggle?.contains(e.target);
      if (!inside) closeNav();
    }

    const lang = $(".lang");
    const menuOpen = $("[data-lang-menu]")?.getAttribute("data-open") === "true";
    if (menuOpen && lang && !lang.contains(e.target)) setLangMenuOpen(false);
  });

  // Theme toggle
  $("[data-theme-toggle]")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "light" ? "dark" : "light");
  });

  // Language toggle + selection
  $("[data-lang-toggle]")?.addEventListener("click", () => {
    const open = $("[data-lang-toggle]")?.getAttribute("aria-expanded") === "true";
    setLangMenuOpen(!open);
  });
  $$("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      const lang = b.getAttribute("data-lang");
      if (!lang) return;
      applyLang(lang);
      setLangMenuOpen(false);
    });
  });

  // Fix: year
  const year = $("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const setupTypewriterObserver = () => {
    // About Us Title
    const aboutSection = $("#sobre");
    if (!aboutSection) return;

    const aboutLines = [
      $('[data-i18n="about.title.a"]'),
      $('[data-i18n="about.title.b"]'),
    ];

    if (!aboutLines[0]) return;

    // Prepare elements (hide text initially)
    if (!window.matchMedia("(max-width: 768px)").matches) {
      aboutLines.forEach(el => el.style.opacity = "0");
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutLines.forEach(el => el.style.opacity = "1"); // Make visible for typing
          typewriterEffect(aboutLines, 200);
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });

    io.observe(aboutSection);
  };

  const typewriterEffect = async (lines, initialDelay = 0) => {
    // Disable on mobile
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (!lines || !lines[0]) return;

    // Filter out nulls just in case
    const validLines = lines.filter(l => l);

    // Get current text to type
    const texts = validLines.map((el) => el.textContent);

    // Clear content but lock height first to prevent CLS
    validLines.forEach((el) => {
      el.style.minHeight = `${el.offsetHeight}px`;
      el.textContent = "";
    });

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    if (initialDelay > 0) await wait(initialDelay);

    for (let i = 0; i < validLines.length; i++) {
      const el = validLines[i];
      const text = texts[i];

      el.classList.add("typing-cursor");

      for (let j = 0; j <= text.length; j++) {
        el.textContent = text.substring(0, j);
        await wait(random(30, 70));
      }

      // Keep cursor on last line for a bit, otherwise remove immediately
      if (i < validLines.length - 1) {
        el.classList.remove("typing-cursor");
      } else {
        // Blink for a while on last line then remove
        await wait(500);
        el.classList.remove("typing-cursor");
      }
    }
  };

  /* =========================================
     CHATBOT LOGIC
     ========================================= */
  /* =========================================
     CHATBOT LOGIC (Multilingual)
     ========================================= */

  const initChatbot = () => {
    const chatbot = document.getElementById("chatbot");
    const toggleBtn = document.getElementById("chat-toggle");
    const closeBtn = document.querySelector(".chatbot__close");
    const messagesEl = document.getElementById("chat-messages");
    const optionsEl = document.getElementById("chat-options");
    const inputEl = document.getElementById("chat-input-text"); // NEW: Select input

    if (!chatbot || !toggleBtn) return;

    let currentState = "welcome";
    let history = [];
    let currentLang = localStorage.getItem(STORAGE.lang) || "pt";

    // --- TRANSLATIONS ---
    const chatI18n = i18n;
    // Helper to get text safely
    const t = (key) => {
      const langData = (chatI18n && chatI18n[currentLang]) || (chatI18n && chatI18n["pt"]) || {};
      return langData[key] || key;
    };

    // --- CHAT DATA GENERATOR ---
    const getChatData = () => ({
      input_placeholder: t("input_placeholder"),
      welcome: {
        msg: t("welcome"),
        options: [
          { text: t("opt_faq"), next: "faq_menu" },
          { text: t("opt_budget"), next: "ask_name" }, // Go to name input first
          { text: t("opt_explore"), next: "explore" }
        ]
      },
      explore: {
        msg: t("explore_msg"),
        options: [
          { text: t("opt_portfolio"), action: "scroll_portfolio" },
          { text: t("opt_reset"), next: "welcome" }
        ]
      },
      // --- ASK NAME ---
      ask_name: {
        msg: t("ask_name"),
        input: true,
        next: "budget_type"
      },
      // --- FAQ FLOW ---
      faq_menu: {
        msg: t("faq_msg"),
        options: [
          { text: t("faq_opt_price"), next: "faq_price" },
          { text: t("faq_opt_deadline"), next: "faq_deadline" },
          { text: t("faq_opt_wp"), next: "faq_wp" },
          { text: t("faq_opt_seo"), next: "faq_seo" },
          { text: t("faq_opt_mobile"), next: "faq_mobile" },
          { text: t("faq_opt_support"), next: "faq_support_info" }
        ]
      },
      faq_price: {
        msg: t("price_msg"),
        options: [
          { text: t("opt_yes_budget"), next: "ask_name" },
          { text: t("opt_back_faq"), next: "faq_menu" }
        ]
      },
      faq_deadline: {
        msg: t("deadline_msg"),
        options: [{ text: t("opt_back_faq"), next: "faq_menu" }]
      },
      faq_wp: {
        msg: t("wp_msg"),
        options: [{ text: t("opt_back_faq"), next: "faq_menu" }]
      },
      faq_seo: {
        msg: t("seo_msg"),
        options: [{ text: t("opt_back_faq"), next: "faq_menu" }]
      },
      faq_mobile: {
        msg: t("mobile_msg"),
        options: [{ text: t("opt_back_faq"), next: "faq_menu" }]
      },
      faq_support_info: {
        msg: t("support_msg"),
        options: [
          { text: t("opt_yes_budget"), next: "ask_name" },
          { text: t("opt_back_faq"), next: "faq_menu" }
        ]
      },
      faq_target: {
        msg: t("target_msg"),
        options: [{ text: t("opt_back_faq"), next: "faq_menu" }]
      },
      // --- SUPPORT FLOW ---
      faq_support_filter: {
        msg: t("support_filter_msg"),
        options: [
          { text: t("opt_client"), next: "support_client" },
          { text: t("opt_new"), next: "support_new" }
        ]
      },
      support_client: {
        msg: t("client_msg"),
        options: [
          { text: t("opt_tech"), next: "support_tech" },
          { text: t("opt_content"), next: "support_content" },
          { text: t("opt_feature"), next: "support_feature" }
        ]
      },
      support_tech: {
        msg: t("tech_contact"),
        options: [{ text: t("opt_whatsapp"), action: "whatsapp_support" }]
      },
      support_content: {
        msg: t("content_contact"),
        options: [{ text: t("opt_understood"), next: "welcome" }]
      },
      support_feature: {
        msg: t("feature_contact"),
        options: [{ text: t("opt_whatsapp"), action: "whatsapp_general" }]
      },
      support_new: {
        msg: t("new_contact"),
        options: [
          { text: t("opt_budget"), next: "budget_type" },
          { text: t("opt_whatsapp"), action: "whatsapp_general" }
        ]
      },
      // --- BUDGET FLOW ---
      budget_type: {
        msg: t("budget_intro"),
        storeKey: "Tipo",
        options: [
          { text: t("budget_opt_web"), next: "budget_segment" },
          { text: t("budget_opt_landing"), next: "budget_segment" },
          { text: t("budget_opt_ecom"), next: "budget_segment" },
          { text: t("budget_opt_redesign"), next: "budget_segment" }
        ]
      },
      budget_segment: {
        msg: t("budget_segment"),
        storeKey: "Segmento",
        options: [
          { text: t("budget_seg_services"), next: "budget_ready" },
          { text: t("budget_seg_commerce"), next: "budget_ready" },
          { text: t("budget_seg_health"), next: "budget_ready" },
          { text: t("budget_seg_other"), next: "budget_ready" }
        ]
      },
      budget_ready: {
        msg: t("budget_ready"),
        storeKey: "Materiais",
        options: [
          { text: t("budget_ans_yes"), next: "budget_deadline" },
          { text: t("budget_ans_no"), next: "budget_deadline" }
        ]
      },
      budget_deadline: {
        msg: t("budget_deadline"),
        storeKey: "Prazo",
        options: [
          { text: t("budget_time_1m"), next: "budget_value" },
          { text: t("budget_time_23m"), next: "budget_value" },
          { text: t("budget_time_norush"), next: "budget_value" }
        ]
      },
      budget_value: {
        msg: t("budget_value"),
        storeKey: "Budget",
        options: [
          { text: t("budget_range_low"), next: "budget_final" },
          { text: t("budget_range_mid"), next: "budget_final" },
          { text: t("budget_range_high"), next: "budget_final" },
          { text: t("budget_range_micro"), next: "budget_low" }
        ]
      },
      budget_low: {
        msg: t("budget_low"),
        options: [{ text: t("opt_whatsapp"), action: "whatsapp_budget" }]
      },
      budget_final: {
        msg: t("budget_final"),
        options: [{ text: t("opt_send_wa"), action: "whatsapp_budget_send" }]
      }
    });

    // --- RENDER FUNCTIONS ---
    const renderMessage = (text, type = "bot") => {
      const div = document.createElement("div");
      div.className = `msg msg--${type}`;
      div.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const renderOptions = (options, inputMode = false) => {
      optionsEl.innerHTML = "";

      const form = document.getElementById("chat-input-form");
      const input = document.getElementById("chat-input-text");

      if (inputMode) {
        if (form) {
          form.hidden = false;
          input.value = "";
          setTimeout(() => input.focus(), 100);
        }
        return;
      }

      // Keep form hidden if not input mode
      if (form) form.hidden = true;

      if (!options) return;
      options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "chatbot__opt";
        btn.textContent = opt.text;
        btn.onclick = () => handleOption(opt);
        optionsEl.appendChild(btn);
      });
    };

    const handleOption = (opt) => {
      // User bubble
      renderMessage(opt.text, "user");

      // Store value if needed
      const data = getChatData();
      const stateObj = data[currentState];
      if (stateObj && stateObj.storeKey) {
        history.push({ key: stateObj.storeKey, value: opt.text });
      }

      // Action?
      if (opt.action) {
        handleAction(opt.action);
        return;
      }

      // Next state
      if (opt.next) {
        currentState = opt.next;
        const nextData = data[currentState];
        if (nextData) {
          setTimeout(() => {
            renderMessage(nextData.msg, "bot");
            renderOptions(nextData.options, nextData.input); // Pass input flag
          }, 400);
        }
      }
    };

    // INPUT FORM HANDLER
    const form = document.getElementById("chat-input-form");
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById("chat-input-text");
        const val = input.value.trim();
        if (!val) return;

        // Save name
        history.push({ key: "Nome", value: val });

        // Show as user message
        renderMessage(val, "user");

        // Move to next state (hardcoded logic based on flow: ask_name -> budget_type)
        // We look up current state "ask_name" to find "next"
        const data = getChatData();
        const stateObj = data[currentState];

        // Hide form
        form.hidden = true;

        if (stateObj && stateObj.next) {
          currentState = stateObj.next;
          const nextData = data[currentState];
          if (nextData) {
            setTimeout(() => {
              renderMessage(nextData.msg, "bot");
              renderOptions(nextData.options, nextData.input);
            }, 500);
          }
        }
      };
    }

    const handleAction = (action) => {
      const phone = "351925928900";
      if (action === "scroll_portfolio") {
        document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
        closeNav();
      } else if (action === "whatsapp_support") {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent("Olá, preciso de suporte técnico.")}`, "_blank");
      } else if (action === "whatsapp_general") {
        window.open(`https://wa.me/${phone}`, "_blank");
      } else if (action === "whatsapp_budget") {
        // Low budget
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent("Olá, tenho um orçamento reduzido (<400€) mas gostaria de conversar.")}`, "_blank");
      } else if (action === "whatsapp_budget_send") {
        // Compile history
        // history = [{ key: "Nome", value: "..." }, {key: "Tipo", ...} ...]

        // Extract name
        const nameItem = history.find(h => h.key === "Nome");
        const name = nameItem ? nameItem.value : "Cliente";

        // Format details
        const details = history
          .filter(h => h.key !== "Nome")
          .map((h) => `${h.key}: ${h.value}`)
          .join("\n- ");

        const template = t("wa_template");
        const finalMsg = template.replace("{name}", name).replace("{details}", `\n- ${details}`);

        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(finalMsg)}`, "_blank");
      }

      // Reset after action? Or just leave it open. 
      // Let's scroll to bottom
      messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    // --- TOGGLE LOGIC ---
    let isOpen = false;
    const toggleChat = () => {
      // alert("Debug: Toggle clicked. State before: " + isOpen); 
      isOpen = !isOpen;
      chatbot.setAttribute("data-state", isOpen ? "open" : "closed");
      toggleBtn.setAttribute("aria-expanded", isOpen);

      if (isOpen && messagesEl.children.length === 0) {
        // First open
        const d = getChatData();
        renderMessage(d.welcome.msg, "bot");
        renderOptions(d.welcome.options);
      }
    };

    toggleBtn.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", () => {
      isOpen = false;
      chatbot.setAttribute("data-state", "closed");
    });

    // --- REFRESH ON LANG CHANGE ---
    document.addEventListener("webmari:lang-change", (e) => {
      const newLang = e.detail.lang;
      if (newLang === currentLang) return;
      currentLang = newLang;

      // Clear chat and restart with new language
      messagesEl.innerHTML = "";
      optionsEl.innerHTML = "";
      history = []; // Reset history
      currentState = "welcome";

      // Update placeholder for new language (ALWAYS)
      const d = getChatData();
      if (inputEl && d.input_placeholder) inputEl.placeholder = d.input_placeholder;

      // If open, re-render immediately
      if (isOpen) {
        renderMessage(d.welcome.msg, "bot");
        renderOptions(d.welcome.options);
      }
    });

    // Helper to get data
    // Initial placeholder set
    if (inputEl) {
      const initialD = getChatData();
      if (initialD && initialD.input_placeholder) inputEl.placeholder = initialD.input_placeholder;
    }
  };


  // Setup extras
  setupReveal();
  setupFaq();
  // setupForm(); // Removed
  setupBackToTop();
  setLoadedFlag();
  // Safe init for dynamic link
  try {
    updateWhatsAppLink();
  } catch (e) {
    console.error("Init WhatsApp link failed", e);
  }
  // initChatbot(); // Moved to end

  // NOTE: serviços (#servicos) layout is controlled via CSS (.services__grid) to match screenshot.

  // --- PORTFOLIO VIRTUAL WINDOW LOGIC ---
  const initPortfolioModal = () => {
    const modal = $("#portfolio-modal");
    if (!modal) return;

    const iframe = $("#portfolio-iframe");
    const iframeWrapper = $("#iframe-wrapper");
    const loader = $(".portfolio-loader");
    const externalLink = $("#portfolio-external-link");
    const closeBtns = $$("[data-close-portfolio]");

    // Device controls
    const btnDesktop = $("#view-desktop");
    const btnMobile = $("#view-mobile");

    // Open Modal
    const openModal = (url) => {
      // Reset to desktop view by default
      if (iframeWrapper) {
        iframeWrapper.className = "iframe-wrapper iframe-wrapper--desktop";
        btnDesktop?.classList.add("active");
        btnMobile?.classList.remove("active");
      }

      // Show loader
      if (loader) loader.hidden = false;

      // Set src
      if (iframe) {
        iframe.onload = () => {
          if (loader) loader.hidden = true;
        };
        iframe.src = url;
      }

      // Update external link
      if (externalLink) externalLink.href = url;

      // Show modal
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    // Close Modal
    const closeModal = () => {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";

      // Clear src to stop video/audio and save memory
      setTimeout(() => {
        if (iframe) iframe.src = "";
      }, 300);
    };

    // Bind Click Events on Project Cards
    $$(".project").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = link.href;
        if (url) openModal(url);
      });
    });

    // Bind Close Events
    closeBtns.forEach(btn => btn.addEventListener("click", closeModal));

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
      }
    });

    // Device Switching Logic
    if (btnDesktop && btnMobile && iframeWrapper) {
      btnDesktop.addEventListener("click", () => {
        iframeWrapper.className = "iframe-wrapper iframe-wrapper--desktop";
        btnDesktop.classList.add("active");
        btnMobile.classList.remove("active");
      });

      btnMobile.addEventListener("click", () => {
        iframeWrapper.className = "iframe-wrapper iframe-wrapper--mobile";
        btnMobile.classList.add("active");
        btnDesktop.classList.remove("active");
      });
    }
  };

  initPortfolioModal();

  // --- EXIT INTENT LOGIC ---
  const initExitIntent = () => {
    const popup = $("#exit-popup");
    if (!popup) return;

    // Check if already shown (using localStorage for persistence)
    if (localStorage.getItem("webmari.exit_shown")) return;

    const showPopup = () => {
      // Double-check persistence to prevent re-triggering in same session
      if (localStorage.getItem("webmari.exit_shown")) return;

      popup.classList.add("is-visible");
      popup.setAttribute("aria-hidden", "false");
      localStorage.setItem("webmari.exit_shown", "true");
    };

    const closePopup = () => {
      popup.classList.remove("is-visible");
      popup.setAttribute("aria-hidden", "true");
    };

    // Trigger 1: Mouse leaves window (Desktop)
    document.addEventListener("mouseleave", (e) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    });

    // Trigger 2: beforeunload (Stricter exit prevention)
    window.addEventListener("beforeunload", (e) => {
      // If we haven't shown the popup yet, try to block exit
      if (localStorage.getItem("webmari.exit_shown")) return;

      // Standard way to trigger native dialog
      e.preventDefault();
      e.returnValue = "";

      // If user cancels (stays), show our popup immediately
      setTimeout(() => {
        showPopup();
      }, 100);

      return "";
    });

    // Trigger 3: Mobile/Tablet Timer Fallback (45s)
    // Only if screen width is like mobile/tablet (< 1024px)
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        // Only show if user hasn't scrolled much (maybe reading?) or just straightforward timer
        // Simplified: just timer
        if (!localStorage.getItem("webmari.exit_shown")) {
          showPopup();
        }
      }, 45000);
    }

    // Close on X btn, Overlay click, or Chat btn
    $$("[data-exit-close]", popup).forEach(btn => {
      btn.addEventListener("click", closePopup);
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && popup.classList.contains("is-visible")) {
        closePopup();
      }
    });

    // Chatbot Trigger in popup
    const exitChatBtn = $("#exit-chat-btn");
    if (exitChatBtn) {
      exitChatBtn.addEventListener("click", () => {
        closePopup();
        // Toggle chatbot open
        const toggleBtn = $("#chat-toggle");
        if (toggleBtn) toggleBtn.click();
      });
    }
  };

  // --- THEME ---
  const initTheme = () => {
    const toggleBtn = $("[data-theme-toggle]");
    const toggles = $$("[data-theme-toggle]");

    const html = document.documentElement;
    const themeKey = STORAGE.theme;

    // Get stored or default
    let currentTheme = localStorage.getItem(themeKey) || "light";
    let prevIsMobile = window.innerWidth <= 768;

    // Logo switcher logic
    const updateLogos = (theme, force = false) => {
      const isMobile = window.innerWidth <= 768;

      // If not forced (theme change) AND layout stricture hasn't changed, DO NOTHING.
      // This prevents scroll-induced resize events on mobile from touching DOM.
      if (!force && isMobile === prevIsMobile) return;

      prevIsMobile = isMobile;

      const logos = $$("img[data-logo-light]");

      logos.forEach(img => {
        const lightSrc = isMobile
          ? (img.getAttribute("data-logo-mobile-light") || img.getAttribute("data-logo-light"))
          : img.getAttribute("data-logo-light");

        const darkSrc = isMobile
          ? (img.getAttribute("data-logo-mobile-dark") || img.getAttribute("data-logo-dark"))
          : img.getAttribute("data-logo-dark");

        if (lightSrc && darkSrc) {
          const newSrc = theme === "light" ? lightSrc : darkSrc;
          // Attribute check for extra safety
          if (img.getAttribute("src") !== newSrc) {
            img.setAttribute("src", newSrc);
          }
        }
      });
    };

    // Updates UI
    const applyTheme = (t) => {
      html.setAttribute("data-theme", t);
      localStorage.setItem(themeKey, t);

      toggles.forEach(btn => {
        btn.setAttribute("aria-checked", t === "dark" ? "true" : "false");
      });

      updateLogos(t, true); // Force update on theme change
    };

    // Debounced resize listener
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateLogos(currentTheme, false); // Not forced, respects isMobile check
      }, 100);
    });

    // Initial apply
    applyTheme(currentTheme);

    // Toggle event
    toggles.forEach(btn => {
      btn.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(currentTheme);
      });
    });
  };

  initTheme();
  initExitIntent();
  try {
    console.log("Initializing Chatbot...");
    initChatbot();
    console.log("Chatbot Initialized");
  } catch (e) {
    console.error("Chatbot Init Failed:", e);
    alert("Chatbot Error: " + e.message);
  }
})();
