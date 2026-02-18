(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  const STORAGE = {
    theme: "webmari.theme",
    lang: "webmari.lang",
  };

  const i18n = {
    pt: {
      "nav.about": "Sobre nós",
      "nav.services": "Serviços",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Depoimentos",
      "nav.contact": "Contacto",
      "nav.faqs": "FAQs",
      "theme": "Tema",
      "lang.label": "Idioma",
      "skip": "Saltar para o conteúdo",

      "hero.pill": "Desenvolvimento Web Premium",
      "hero.h1.a": "Presença Digital",
      "hero.h1.b": "de impacto",
      "hero.h1.c": "global.",
      "hero.sub1": "Websites de alta performance, SEO técnico e conformidade total (RGPD). Projetados em Portugal para empresas que exigem excelência.",
      "hero.sub2": "Sem templates lentos. Apenas código limpo e resultados mensuráveis.",
      "hero.chip1": "Performance 100%",
      "hero.chip2": "SEO Internacional",
      "hero.chip3": "Suporte Premium",
      "hero.chip4": "Multilingue",
      "hero.badge1": "Entrega Rápida",
      "hero.badge2": "Google Friendly",
      "hero.badge3": "Sem WordPress",
      "hero.kpi1": "Score Lighthouse",
      "hero.kpi2": "Carregamento",
      "hero.kpi3": "Mobile First",

      "about.eyebrow": "Sobre nós",
      "about.title.a": "Uma equipa dedicada à",
      "about.title.b": "excelência digital",
      "about.desc":
        "Na Webmari.pt, acreditamos que cada negócio merece uma presença online única. A nossa missão é transformar a sua visão numa realidade digital que não só impressiona visualmente, mas também gera resultados concretos.",
      "about.p1": "Código Personalizado",
      "about.p2": "Multilingue",
      "about.p3": "Seguro & Rápido",
      "about.p4": "SEO Avançado",
      "about.c1.title": "Design moderno",
      "about.c1.text": "Interfaces limpas, consistentes e acessíveis.",
      "about.c2.title": "Performance real",
      "about.c2.text": "Código otimizado, imagens leves e carregamento rápido.",
      "about.c3.title": "Foco em resultados",
      "about.c3.text": "Estrutura pensada para gerar contactos e conversões.",
      "about.s1": "Projetos Entregues",
      "about.s2": "Clientes Satisfeitos",
      "about.s3": "Anos de Experiência",
      "about.s4": "Países Servidos",

      "services.eyebrow": "Serviços",
      "services.title": "Soluções completas para o seu negócio.",
      "services.lead": "Do conceito ao lançamento, com suporte contínuo.",
      "services.s1.title": "Websites One-Page",
      "services.s1.text": "Landing pages modernas para captar leads e apresentar serviços.",
      "services.s2.title": "SEO Técnico & Local",
      "services.s2.text": "Otimização para motores de busca com foco no mercado-alvo.",
      "services.s3.title": "Identidade Visual (UI)",
      "services.s3.text": "Design consistente que transmite confiança e profissionalismo.",
      "services.s4.title": "Estratégia de Conteúdo",
      "services.s4.text": "Copywriting persuasivo e estrutura de informação clara.",
      "services.s5.title": "Segurança & RGPD",
      "services.s5.text": "Proteção de dados e conformidade legal europeia.",
      "services.s6.title": "Manutenção",
      "services.s6.text": "Atualizações regulares e monitorização de performance.",

      "portfolio.eyebrow": "Portfolio",
      "portfolio.title": "Projetos que criam impacto.",
      "portfolio.lead": "Exemplos recentes do nosso trabalho.",
      "portfolio.tag1": "Landing Page",
      "portfolio.tag2": "Corporativo",
      "portfolio.tag3": "UI Design",
      "portfolio.tag4": "SEO",
      "portfolio.tag5": "Mobile",
      "portfolio.tag6": "One Page",
      "portfolio.p1": "Burguer",
      "portfolio.p2": "PV Car",
      "portfolio.p3": "Seguidor Express",
      "portfolio.p4": "Etransfers",
      "portfolio.p5": "Remodelação",
      "portfolio.p6": "Imobiliária",

      "testimonials.eyebrow": "Testemunhos",
      "testimonials.title.a": "O que dizem",
      "testimonials.title.b": "os nossos clientes.",
      "testimonials.q1": "\u201cEstamos muito satisfeitos com o resultado final! Obrigada pelo profissionalismo, disponibilidade e acompanhamento ao cliente!\u201d",
      "testimonials.q2": "“A otimização mobile é perfeita, e o suporte para configurar o email profissional foi 5 estrelas.”",
      "testimonials.q3": "“Sem WordPress, sem lentidão. Notámos diferença imediata no ranking do Google.”",
      "testimonials.n1": "Etransfers.pt",
      "testimonials.n2": "Remodelação.pt",
      "testimonials.n3": "Miguel Silva",

      "contact.eyebrow": "Contacto",
      "contact.title": "Vamos trabalhar juntos.",
      "contact.lead": "Envie-nos os detalhes do seu projeto. Respondemos em 24h.",
      "contact.infoTitle": "Vamos conversar",
      "contact.infoText": "Email, WhatsApp ou formulário — a escolha é sua.",
      "contact.info1": "Resposta rápida",
      "contact.info2": "Orçamento transparente",
      "contact.info2": "Orçamento transparente",
      "contact.info3": "Proposta clara",
      "contact.whatsapp_msg": "Olá! Vim através do site e gostaria de obter informações.",

      "form.name": "Nome",
      "form.email": "Email",
      "form.phone": "Telefone (opcional)",
      "form.service": "Serviço",
      "form.servicePh": "Escolher...",
      "form.service1": "Website One-Page",
      "form.service2": "Redesign",
      "form.service3": "SEO & Performance",
      "form.message": "Mensagem",
      "form.submit": "Enviar Pedido",

      "faqs.eyebrow": "FAQs",
      "faqs.title": "Perguntas Frequentes",
      "faqs.q1": "Quanto custa criar um site profissional em Portugal?",
      "faqs.a1": "O preço depende da complexidade e das funcionalidades pretendidas. Um site One-Page começa a partir de 350€, enquanto projetos mais completos com SEO avançado e sistema multilingue podem variar entre 600€ e 1500€. Oferecemos sempre orçamento transparente e sem surpresas.",
      "faqs.q2": "Qual é a diferença entre um site em WordPress e um site em código personalizado?",
      "faqs.a2": "O WordPress usa templates genéricos que carregam plugins pesados, o que resulta em sites lentos e vulneráveis. O código personalizado (HTML, CSS, JavaScript) é escrito à medida, o que garante velocidade máxima, maior segurança e melhor posicionamento no Google.",
      "faqs.q3": "Quanto tempo demora a criar um website?",
      "faqs.a3": "Um site One-Page fica pronto em 3 a 7 dias úteis. Projetos mais complexos, com múltiplas páginas ou integrações, podem demorar 2 a 4 semanas. Trabalhamos com prazos definidos e comunicação constante.",
      "faqs.q4": "O site vai aparecer no Google? Como funciona o SEO?",
      "faqs.a4": "Sim. Todos os nossos sites são construídos com SEO técnico de base: estrutura semântica, velocidade de carregamento, meta tags, Schema.org e sitemap. Para resultados locais em Portugal ou internacionais, aplicamos estratégias específicas de SEO.",
      "faqs.q5": "O site fica otimizado para telemóvel (mobile)?",
      "faqs.a5": "Absolutamente. Adotamos uma abordagem Mobile-First: o design é pensado primeiro para ecrãs pequenos e depois adaptado para desktop. Testamos em múltiplos dispositivos para garantir uma experiência perfeita em qualquer ecrã.",
      "faqs.q6": "Posso ter o site em vários idiomas?",
      "faqs.a6": "Sim, somos especialistas em sites multilingue. Desenvolvemos sistemas de tradução rápidos e otimizados para SEO internacional, suportando português, inglês, espanhol, alemão, francês e outras línguas conforme necessário.",
      "faqs.q7": "O site inclui domínio e alojamento (hosting)?",
      "faqs.a7": "Podemos orientar na escolha e configuração do domínio e hosting, ou gerir tudo por si. Trabalhamos com soluções rápidas e seguras como Netlify, Vercel ou servidores dedicados, conforme o projeto.",
      "faqs.q8": "Oferecem suporte e manutenção após o lançamento?",
      "faqs.a8": "Sim. Temos pacotes de manutenção mensal que incluem atualizações de conteúdo, monitorização de performance, backups e suporte técnico. O seu site estará sempre atualizado e seguro.",
      "faqs.q9": "Como funciona o processo de pagamento?",
      "faqs.a9": "Trabalhamos com um modelo simples: 50% no início do projeto para arranque e 50% na entrega final. Aceitamos transferência bancária e MB Way. Emitimos fatura por cada pagamento.",
      "faqs.q10": "Posso alterar os textos e imagens do site depois de entregue?",
      "faqs.a10": "Sim. Entregamos o código-fonte completo e podemos adicionar um painel de gestão de conteúdos simples. Também oferecemos um serviço de atualização de conteúdos incluído nos pacotes de manutenção.",

      "footer.tagline": "Websites modernos, rápidos e focados na Europa.",
      "footer.top": "Voltar ao topo",
      "footer.desc":
        "Desenvolvimento web profissional a partir de Portugal. Código personalizado, SEO técnico e sistemas multilingue para escalar o seu negócio.",
      "footer.services": "Serviços",
      "footer.links": "Links",
      "footer.service1": "Websites Corporativos",
      "footer.service2": "Design Responsivo",
      "footer.service3": "SEO Avançado",
      "footer.service4": "Sistemas Multilingue",
      "footer.privacy": "Política de Privacidade",
      "footer.terms": "Termos de Serviço",
      "footer.rights": "Todos os direitos reservados.",

      "seo.h1": "Especialistas em Criação de Sites e Web Design focados em Performance",
      "seo.text": `
        <h3>Desenvolvimento Web e Criação de Sites em Portugal</h3>
        <p>
          Se procura uma <strong>agência de web design em Portugal</strong> ou um programador freelance experiente para a <strong>criação de sites profissionais</strong>, a Webmari.pt é a sua parceira ideal. Especializamo-nos no desenvolvimento de soluções digitais à medida, desde <em>landing pages</em> de alta conversão até websites corporativos complexos e lojas online.
        </p>
        <p>
          Ao contrário das agências tradicionais que utilizam templates pesados de WordPress ou Wix, nós apostamos na <strong>programação de sites à mão</strong> (HTML, CSS, JavaScript). Isto garante que o seu site seja extremamente rápido, seguro e apreciado pelos motores de busca como o Google.
        </p>

        <h3>Otimização SEO e Performance (Core Web Vitals)</h3>
        <p>
          A <strong>otimização para motores de busca (SEO)</strong> não é um extra, é a base do nosso trabalho. Cada linha de código é escrita a pensar na indexação. Os nossos sites atingem consistentemente pontuações de 90-100 no Google PageSpeed Insights (Core Web Vitals), o que é um fator crucial para aparecer na primeira página do Google nas pesquisas por "criação de sites", "web designer" ou "programador web".
        </p>

        <h3>Sites Rápidos e Responsivos para Telemóveis</h3>
        <p>
          Com a maioria do tráfego a vir de dispositivos móveis, adotamos uma abordagem <em>Mobile-First</em>. O seu site adapta-se perfeitamente a qualquer ecrã, garantindo uma experiência de utilizador (UX) fluida. Se o seu objetivo é <strong>vender online</strong>, captar leads ou simplesmente apresentar a sua empresa com profissionalismo, nós temos a solução técnica e criativa.
        </p>
        <ul>
          <li><strong>Criação de Sites Institucionais:</strong> Para empresas que querem afirmar a sua marca.</li>
          <li><strong>Landing Pages:</strong> Focadas em campanhas de marketing e conversão.</li>
          <li><strong>Desenvolvimento Web à Medida:</strong> Funcionalidades específicas para o seu negócio.</li>
          <li><strong>Consultoria Web e Manutenção:</strong> Apoio técnico contínuo e atualizações.</li>
        </ul>
      `,

      "cookies.title": "Cookies 🍪",
      "cookies.text": "Utilizamos cookies para melhorar a sua experiência. Ao continuar a navegar, aceita a nossa política de privacidade.",
      "cookies.accept": "Aceitar",
      "cookies.decline": "Recusar",
    },

    en: {
      skip: "Skip to content",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      "nav.faqs": "FAQs",
      theme: "Theme",
      "lang.label": "Language",
      "cta.header": "Get a Quote",

      "hero.eyebrow": "Modern websites • SEO • Performance",
      "hero.title": "We build websites that impress.",
      "hero.subtitle": "Clean design, fast code, and flawless mobile experience — built to convert.",
      "hero.cta1": "Request a Free Quote",
      "hero.cta2": "View Portfolio",
      "hero.badge1": "Fast delivery",
      "hero.badge2": "Google-ready",
      "hero.badge3": "No WordPress",
      "hero.kpi1": "Lighthouse score",
      "hero.kpi2": "Load time",
      "hero.kpi3": "Mobile",

      "about.eyebrow": "About",
      "about.title.a": "A team dedicated to",
      "about.title.b": "digital excellence",
      "about.desc":
        "At Webmari.pt, we believe every business deserves a unique online presence. Our mission is to turn your vision into a digital reality that not only looks great, but also drives real results.",
      "about.p1": "Custom Code",
      "about.p2": "Multilingual",
      "about.p3": "Secure & Fast",
      "about.p4": "Advanced SEO",
      "about.c1.title": "Modern design",
      "about.c1.text": "Clean, consistent, and accessible interfaces.",
      "about.c2.title": "Real performance",
      "about.c2.text": "Optimized code, lightweight images, and fast loading.",
      "about.c3.title": "Results-driven",
      "about.c3.text": "Structure designed to generate leads and conversions.",
      "about.s1": "Projects Delivered",
      "about.s2": "Happy Clients",
      "about.s3": "Years of Experience",
      "about.s4": "Countries Served",

      "services.eyebrow": "Services",
      "services.title": "Complete solutions for your online success.",
      "services.lead": "From concept to launch — and ongoing improvements.",
      "services.s1.title": "One-Page Website",
      "services.s1.text": "Modern landing page to present and convert.",
      "services.s2.title": "SEO & Performance",
      "services.s2.text": "Better structure, speed and indexing.",
      "services.s3.title": "Brand & UI",
      "services.s3.text": "Visual identity and consistent components.",
      "services.s4.title": "Content",
      "services.s4.text": "Messaging, copy and CTA structure.",
      "services.s5.title": "Security",
      "services.s5.text": "Best practices and basic protection.",
      "services.s6.title": "Maintenance",
      "services.s6.text": "Upgrades, improvements and support.",

      "portfolio.eyebrow": "Portfolio",
      "portfolio.title": "Projects that make a difference.",
      "portfolio.lead": "Sample placeholders (replace with your work).",
      "portfolio.tag1": "Landing",
      "portfolio.tag2": "Corporate",
      "portfolio.tag3": "UI",
      "portfolio.tag4": "SEO",
      "portfolio.tag5": "Mobile",
      "portfolio.tag6": "One-page",
      "portfolio.p1": "Burguer",
      "portfolio.p2": "PV Car",
      "portfolio.p3": "Seguidor Express",
      "portfolio.p4": "Etransfers",
      "portfolio.p5": "Remodelação",
      "portfolio.p6": "Imobiliária",

      "testimonials.eyebrow": "Testimonials",
      "testimonials.title.a": "What our",
      "testimonials.title.b": "clients say",
      "testimonials.q1": "“We are very happy with the final result! Thank you for the professionalism, availability and customer support!”",
      "testimonials.q2": "“Mobile version is excellent and we’re getting more leads.”",
      "testimonials.q3": "“Clean design, great communication, on-time delivery.”",
      "testimonials.n1": "Etransfers.pt",
      "testimonials.n2": "Remodelação.pt",
      "testimonials.n3": "Miguel Silva",

      "contact.eyebrow": "Contact",
      "contact.title": "Request your quote.",
      "contact.lead": "Send details and we’ll reply quickly.",
      "contact.infoTitle": "Let’s talk",
      "contact.infoText": "Email, WhatsApp, or the form — whichever is easiest.",
      "contact.info1": "Quick response",
      "contact.info2": "No commitment",
      "contact.info3": "Clear proposal",
      "contact.whatsapp_msg": "Hello! I came from the website and would like more information.",

      "form.name": "Name",
      "form.email": "Email",
      "form.phone": "Phone (optional)",
      "form.service": "Service",
      "form.servicePh": "Choose...",
      "form.service1": "One-Page Website",
      "form.service2": "Redesign",
      "form.service3": "SEO & Performance",
      "form.message": "Message",
      "form.submit": "Send",

      "faqs.eyebrow": "FAQs",
      "faqs.title": "Frequently asked questions",
      "faqs.q1": "How much does it cost to create a professional website?",
      "faqs.a1": "The price depends on complexity and features. A One-Page site starts from €350, while more complete projects with advanced SEO and multilingual systems can range from €600 to €1500. We always offer transparent, no-surprise quotes.",
      "faqs.q2": "What is the difference between a WordPress site and custom code?",
      "faqs.a2": "WordPress uses generic templates that load heavy plugins, resulting in slow and vulnerable sites. Custom code (HTML, CSS, JavaScript) is written from scratch, ensuring maximum speed, greater security, and better Google rankings.",
      "faqs.q3": "How long does it take to build a website?",
      "faqs.a3": "A One-Page site is ready in 3 to 7 business days. More complex projects with multiple pages or integrations can take 2 to 4 weeks. We work with defined deadlines and constant communication.",
      "faqs.q4": "Will the site appear on Google? How does SEO work?",
      "faqs.a4": "Yes. All our sites are built with technical SEO foundations: semantic structure, loading speed, meta tags, Schema.org, and sitemap. For local results in Portugal or international reach, we apply specific SEO strategies.",
      "faqs.q5": "Is the site optimized for mobile?",
      "faqs.a5": "Absolutely. We adopt a Mobile-First approach: the design is conceived first for small screens and then adapted for desktop. We test on multiple devices to ensure a perfect experience on any screen.",
      "faqs.q6": "Can I have the site in multiple languages?",
      "faqs.a6": "Yes, we specialize in multilingual sites. We develop fast, internationally SEO-optimized translation systems supporting Portuguese, English, Spanish, German, French, and other languages as needed.",
      "faqs.q7": "Does the site include domain and hosting?",
      "faqs.a7": "We can guide you in choosing and configuring the domain and hosting, or manage everything for you. We work with fast, secure solutions like Netlify, Vercel, or dedicated servers, depending on the project.",
      "faqs.q8": "Do you offer support and maintenance after launch?",
      "faqs.a8": "Yes. We have monthly maintenance packages that include content updates, performance monitoring, backups, and technical support. Your site will always be up-to-date and secure.",
      "faqs.q9": "How does the payment process work?",
      "faqs.a9": "We work with a simple model: 50% at the start of the project and 50% upon final delivery. We accept bank transfer and MB Way. We issue an invoice for each payment.",
      "faqs.q10": "Can I change texts and images after the site is delivered?",
      "faqs.a10": "Yes. We deliver the complete source code and can add a simple content management panel. We also offer a content update service included in maintenance packages.",

      "footer.tagline": "Modern, fast, results-driven websites.",
      "footer.top": "Back to top",
      "footer.desc":
        "Professional web development with custom code, advanced SEO and multilingual systems. Your online presence, tailored to you.",
      "footer.services": "Services",
      "footer.links": "Links",
      "footer.service1": "Corporate Websites",
      "footer.service2": "Responsive Design",
      "footer.service3": "Advanced SEO",
      "footer.service4": "Multilingual Systems",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.rights": "All rights reserved.",

      "seo.h1": "Experts in Website Creation and Web Design focused on Performance",
      "seo.text": `
        <h3>Web Development and Site Creation in Portugal</h3>
        <p>
          If you are looking for a <strong>web design agency in Portugal</strong> or an experienced freelance developer for <strong>professional website creation</strong>, Webmari.pt is your ideal partner. We specialize in developing custom digital solutions, from high-conversion <em>landing pages</em> to complex corporate websites and online stores.
        </p>
        <p>
          Unlike traditional agencies that use heavy WordPress or Wix templates, we bet on <strong>hand-coding sites</strong> (HTML, CSS, JavaScript). This ensures your site is extremely fast, secure, and appreciated by search engines like Google.
        </p>

        <h3>SEO Optimization and Performance (Core Web Vitals)</h3>
        <p>
          <strong>Search Engine Optimization (SEO)</strong> is not an extra, it's the foundation of our work. Every line of code is written with indexing in mind. Our sites consistently achieve scores of 90-100 on Google PageSpeed Insights (Core Web Vitals), which is a crucial factor for appearing on the first page of Google in searches for "website creation", "web designer" or "web developer".
        </p>

        <h3>Fast and Responsive Sites for Mobile</h3>
        <p>
          With the majority of traffic coming from mobile devices, we adopt a <em>Mobile-First</em> approach. Your site adapts perfectly to any screen, ensuring a fluid user experience (UX). If your goal is to <strong>sell online</strong>, capture leads, or simply present your company professionally, we have the technical and creative solution.
        </p>
        <ul>
          <li><strong>Institutional Website Creation:</strong> For companies that want to affirm their brand.</li>
          <li><strong>Landing Pages:</strong> Focused on marketing campaigns and conversion.</li>
          <li><strong>Custom Web Development:</strong> Specific functionalities for your business.</li>
          <li><strong>Web Consultancy and Maintenance:</strong> Continuous technical support and updates.</li>
        </ul>
      `,

      "cookies.title": "Cookies 🍪",
      "cookies.text": "We use cookies to improve your experience. By continuing to browse, you accept our privacy policy.",
      "cookies.accept": "Accept",
      "cookies.decline": "Decline",

      "hero.pill": "Professional Web Development",
      "hero.h1.a": "Fast websites that generate",
      "hero.h1.b": "leads and",
      "hero.h1.c": "sales for your business",
      "hero.sub1": "Custom code, advanced SEO and multilingual systems.",
      "hero.sub2": "No WordPress, no Wix — just excellence.",
      "hero.chip1": "Performance",
      "hero.chip2": "Security",
      "hero.chip3": "SEO",
      "hero.chip4": "Multilingual",
    },

    es: {
      skip: "Saltar al contenido",
      "nav.about": "Sobre nosotros",
      "nav.services": "Servicios",
      "nav.portfolio": "Portafolio",
      "nav.testimonials": "Testimonios",
      "nav.contact": "Contacto",
      "nav.faqs": "FAQs",
      theme: "Tema",
      "lang.label": "Idioma",
      "cta.header": "Pedir presupuesto",

      "hero.eyebrow": "Webs modernas • SEO • Rendimiento",
      "hero.title": "Creamos webs que impresionan.",
      "hero.subtitle": "Diseño limpio, código rápido y una experiencia móvil impecable — pensada para convertir.",
      "hero.cta1": "Pedir presupuesto gratis",
      "hero.cta2": "Ver portafolio",
      "hero.badge1": "Entrega rápida",
      "hero.badge2": "Listo para Google",
      "hero.badge3": "Sin WordPress",
      "hero.kpi1": "Puntuación Lighthouse",
      "hero.kpi2": "Carga",
      "hero.kpi3": "Móvil",

      "about.eyebrow": "Sobre nós",
      "about.title.a": "Uma equipa dedicada à",
      "about.title.b": "excelência digital",
      "about.desc":
        "Na Webmari.pt, acreditamos que cada negócio merece uma presença online única. A nossa missão é transformar a sua visão numa realidade digital que não só impressiona visualmente, mas também gera resultados concretos.",
      "about.p1": "Código Personalizado",
      "about.p2": "Multilingüe",
      "about.p3": "Seguro y Rápido",
      "about.p4": "SEO Avanzado",
      "about.c1.title": "Diseño moderno",
      "about.c1.text": "Interfaces limpias, consistentes y accesibles.",
      "about.c2.title": "Rendimiento real",
      "about.c2.text": "Código optimizado, imágenes ligeras y carga rápida.",
      "about.c3.title": "Enfoque en resultados",
      "about.c3.text": "Estructura pensada para generar contactos y conversiones.",
      "about.s1": "Proyectos Entregados",
      "about.s2": "Clientes Satisfechos",
      "about.s3": "Años de Experiencia",
      "about.s4": "Países Atendidos",

      "services.eyebrow": "Servicios",
      "services.title": "Soluciones completas para tu éxito online.",
      "services.lead": "Del concepto al lanzamiento — y mejora continua.",
      "services.s1.title": "Web One-Page",
      "services.s1.text": "Landing moderna para apresentar e converter.",
      "services.s2.title": "SEO y rendimiento",
      "services.s2.text": "Mejor estructura, velocidad e indexación.",
      "services.s3.title": "Brand & UI",
      "services.s3.text": "Identidade visual y componentes consistentes.",
      "services.s4.title": "Contenido",
      "services.s4.text": "Mensajes, copy y CTA.",
      "services.s5.title": "Seguridad",
      "services.s5.text": "Buenas prácticas y proteção básica.",
      "services.s6.title": "Mantenimiento",
      "services.s6.text": "Mejoras e suporte.",

      "portfolio.eyebrow": "Portafolio",
      "portfolio.title": "Proyectos que marcan la diferencia.",
      "portfolio.lead": "Ejemplos (sustituye por tus trabajos).",
      "portfolio.tag1": "Landing",
      "portfolio.tag2": "Corporativo",
      "portfolio.tag3": "UI",
      "portfolio.tag4": "SEO",
      "portfolio.tag5": "Móvil",
      "portfolio.tag6": "One-page",
      "portfolio.p1": "Burguer",
      "portfolio.p2": "PV Car",
      "portfolio.p3": "Seguidor Express",
      "portfolio.p4": "Etransfers",
      "portfolio.p5": "Remodelação",
      "portfolio.p6": "Imobiliária",

      "testimonials.eyebrow": "Testimonios",
      "testimonials.title.a": "Lo que dicen nuestros",
      "testimonials.title.b": "clientes",
      "testimonials.q1": "“¡Estamos muy satisfechos con el resultado final! ¡Gracias por el profesionalismo, la disponibilidad y el acompañamiento al cliente!”",
      "testimonials.q2": "“La versión móvil quedó excelente y recibimos más contactos.”",
      "testimonials.q3": "“Diseño limpio, buena comunicación y entrega a tiempo.”",
      "testimonials.n1": "Etransfers.pt",
      "testimonials.n2": "Remodelação.pt",
      "testimonials.n3": "Miguel Silva",

      "contact.eyebrow": "Contacto",
      "contact.title": "Pide tu presupuesto.",
      "contact.lead": "Envíanos detalles e respondemos rápido.",
      "contact.infoTitle": "Hablemos",
      "contact.infoText": "Email, WhatsApp o formulario — lo que sea más fácil.",
      "contact.info1": "Respuesta rápida",
      "contact.info2": "Sin compromiso",
      "contact.info3": "Propuesta clara",
      "contact.whatsapp_msg": "¡Hola! Vengo del sitio web y me gustaría obtener información.",

      "form.name": "Nombre",
      "form.email": "Email",
      "form.phone": "Teléfono (opcional)",
      "form.service": "Servicio",
      "form.servicePh": "Elegir...",
      "form.service1": "Web One-Page",
      "form.service2": "Rediseño",
      "form.service3": "SEO y rendimiento",
      "form.message": "Mensaje",
      "form.submit": "Enviar",

      "faqs.eyebrow": "FAQs",
      "faqs.title": "Preguntas frecuentes",
      "faqs.q1": "¿Cuánto tarda?",
      "faqs.a1": "Depende del contenido, pero una one-page suele estar lista en pocos días.",
      "faqs.q2": "¿Está optimizada para móvil?",
      "faqs.a2": "Sí. El diseño es responsive y probado.",
      "faqs.q3": "¿Puedo cambiar textos e imágenes?",
      "faqs.a3": "Sí. Entregamos una estructura simple y podemos añadir gestión si hace falta.",
      "faqs.q4": "¿Incluye dominio y hosting?",
      "faqs.a4": "Podemos ayudarte a configurarlo o gestionarlo (opcional).",
      "faqs.q5": "¿Cuál es la diferencia entre WordPress y Código Personalizado?",
      "faqs.a5": "El código personalizado es más rápido, seguro y mejor para el SEO que WordPress.",
      "faqs.q6": "¿Cuánto cuesta un sitio web?",
      "faqs.a6": "Los precios varían según la complejidad, pero ofrecemos presupuestos transparentes.",
      "faqs.q7": "¿Ofrecen soporte y mantenimiento?",
      "faqs.a7": "Sí, tenemos paquetes de mantenimiento para asegurar que su sitio esté siempre actualizado.",
      "faqs.q8": "¿Cómo funciona el pago?",
      "faqs.a8": "Generalmente pedimos el 50% al inicio y el 50% restante a la entrega final.",
      "faqs.q9": "¿Puedo tener el sitio en varios idiomas?",
      "faqs.a9": "Sí, somos especialistas en sitios multilingües rápidos y optimizados para SEO internacional.",
      "faqs.q10": "¿El sitio aparecerá en Google?",
      "faqs.a10": "¡Sí! Todos nuestros sitios están construidos con las mejores prácticas de SEO técnico.",

      "footer.tagline": "Webs modernas, rápidas y enfocadas a resultados.",
      "footer.top": "Volver arriba",
      "footer.desc":
        "Desarrollo web profesional con código a medida, SEO avanzado y sistemas multilingües. Tu presencia online, hecha a medida.",
      "footer.services": "Servicios",
      "footer.links": "Enlaces",
      "footer.service1": "Webs Corporativas",
      "footer.service2": "Diseño Responsivo",
      "footer.service3": "SEO Avanzado",
      "footer.service4": "Sistemas Multilingües",
      "footer.privacy": "Política de Privacidad",
      "footer.terms": "Términos del Servicio",
      "footer.rights": "Todos los derechos reservados.",

      "seo.h1": "Especialistas en Creación de Sitios Web y Diseño Web enfocados en Rendimiento",
      "seo.text": `
        <h3>Desarrollo Web y Creación de Sitios en Portugal</h3>
        <p>
          Si busca una <strong>agencia de diseño web en Portugal</strong> o un desarrollador freelance experimentado para la <strong>creación de sitios profesionales</strong>, Webmari.pt es su socio ideal. Nos especializamos en el desarrollo de soluciones digitales a medida, desde <em>landing pages</em> de alta conversión hasta sitios web corporativos complejos y tiendas online.
        </p>
        <p>
          A diferencia de las agencias tradicionales que utilizan plantillas pesadas de WordPress o Wix, apostamos por la <strong>programación de sitios a mano</strong> (HTML, CSS, JavaScript). Esto garantiza que su sitio sea extremadamente rápido, seguro y apreciado por motores de búsqueda como Google.
        </p>

        <h3>Optimización SEO y Rendimiento (Core Web Vitals)</h3>
        <p>
          La <strong>optimización para motores de búsqueda (SEO)</strong> no es un extra, es la base de nuestro trabajo. Cada línea de código está escrita pensando en la indexación. Nuestros sitios alcanzan consistentemente puntuaciones de 90-100 en Google PageSpeed Insights (Core Web Vitals), un factor crucial para aparecer en la primera página de Google en búsquedas por "creación de sitios", "diseñador web" o "programador web".
        </p>

        <h3>Sitios Rápidos y Responsivos para Móviles</h3>
        <p>
          Con la mayoría del tráfico proveniente de dispositivos móviles, adoptamos un enfoque <em>Mobile-First</em>. Su sitio se adapta perfectamente a cualquier pantalla, garantizando una experiencia de usuario (UX) fluida. Si su objetivo es <strong>vender online</strong>, captar leads o simplemente presentar su empresa con profesionalismo, tenemos la solución técnica y creativa.
        </p>
        <ul>
          <li><strong>Creación de Sitios Institucionales:</strong> Para empresas que quieren afirmar su marca.</li>
          <li><strong>Landing Pages:</strong> Enfocadas en campañas de marketing y conversión.</li>
          <li><strong>Desarrollo Web a Medida:</strong> Funcionalidades específicas para su negocio.</li>
          <li><strong>Consultoría Web y Mantenimiento:</strong> Apoyo técnico continuo y actualizaciones.</li>
        </ul>
      `,

      "cookies.title": "Cookies 🍪",
      "cookies.text": "Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de privacidad.",
      "cookies.accept": "Aceptar",
      "cookies.decline": "Rechazar",

      "hero.pill": "Desarrollo Web Profesional",
      "hero.h1.a": "Webs rápidas que generan",
      "hero.h1.b": "contactos e",
      "hero.h1.c": "ventas para tu negocio",
      "hero.sub1": "Código a medida, SEO avançado e sistemas multilingües.",
      "hero.sub2": "Sin WordPress, sin Wix — solo excelência.",
      "hero.chip1": "Rendimiento",
      "hero.chip2": "Segurança",
      "hero.chip3": "SEO",
      "hero.chip4": "Multilingüe",
    },

    de: {
      skip: "Zum Inhalt springen",
      "nav.about": "Über uns",
      "nav.services": "Leistungen",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Referenzen",
      "nav.contact": "Kontakt",
      "nav.faqs": "FAQs",
      theme: "Thema",
      "lang.label": "Sprache",
      "cta.header": "Angebot anfragen",

      "hero.eyebrow": "Moderne Websites • SEO • Performance",
      "hero.title": "Wir bauen Websites, die beeindrucken.",
      "hero.subtitle": "Cleanes Design, schneller Code und perfekte Mobile Experience — mit Fokus auf Conversion.",
      "hero.cta1": "Kostenloses Angebot",
      "hero.cta2": "Portfolio ansehen",
      "hero.badge1": "Schnelle Lieferung",
      "hero.badge2": "Für Google optimiert",
      "hero.badge3": "Kein WordPress",
      "hero.kpi1": "Lighthouse-Score",
      "hero.kpi2": "Ladezeit",
      "hero.kpi3": "Mobile",

      "about.eyebrow": "Über uns",
      "about.title.a": "Ein Team für",
      "about.title.b": "digitale Exzellenz",
      "about.desc":
        "Bei Webmari.pt glauben wir, dass jedes Unternehmen eine einzigartige Online-Präsenz verdient. Unsere Mission ist es, Ihre Vision in eine digitale Realität zu verwandeln, die nicht nur beeindruckt, sondern auch echte Ergebnisse liefert.",
      "about.p1": "Individueller Code",
      "about.p2": "Mehrsprachig",
      "about.p3": "Sicher & Schnell",
      "about.p4": "Fortgeschrittenes SEO",
      "about.c1.title": "Modernes Design",
      "about.c1.text": "Saubere, konsistente und barrierearme Interfaces.",
      "about.c2.title": "Echte Performance",
      "about.c2.text": "Optimierter Code, leichte Bilder und schnelles Laden.",
      "about.c3.title": "Fokus auf Ergebnisse",
      "about.c3.text": "Struktur, die auf Anfragen und Conversions ausgelegt ist.",
      "about.s1": "Gelieferte Projekte",
      "about.s2": "Zufriedene Kunden",
      "about.s3": "Jahre Erfahrung",
      "about.s4": "Bediente Länder",

      "services.eyebrow": "Leistungen",
      "services.title": "Komplette Lösungen für Ihren Online-Erfolg.",
      "services.lead": "Von der Idee bis zum Launch — und darüber hinaus.",
      "services.s1.title": "One-Page Website",
      "services.s1.text": "Moderne Landingpage zum Präsentieren und Konvertieren.",
      "services.s2.title": "SEO & Performance",
      "services.s2.text": "Bessere Struktur, Speed und Indexierung.",
      "services.s3.title": "Brand & UI",
      "services.s3.text": "Visuelle Identität und konsistente Komponenten.",
      "services.s4.title": "Content",
      "services.s4.text": "Botschaften, Copy und CTA-Struktur.",
      "services.s5.title": "Sicherheit",
      "services.s5.text": "Best Practices und Basisschutz.",
      "services.s6.title": "Wartung",
      "services.s6.text": "Weiterentwicklung, Verbesserungen, Support.",

      "portfolio.eyebrow": "Portfolio",
      "portfolio.title": "Projekte, die den Unterschied machen.",
      "portfolio.lead": "Beispiele (bitte durch echte Projekte ersetzen).",
      "portfolio.tag1": "Landing",
      "portfolio.tag2": "Corporate",
      "portfolio.tag3": "UI",
      "portfolio.tag4": "SEO",
      "portfolio.tag5": "Mobile",
      "portfolio.tag6": "One-page",
      "portfolio.p1": "Burguer",
      "portfolio.p2": "PV Car",
      "portfolio.p3": "Seguidor Express",
      "portfolio.p4": "Etransfers",
      "portfolio.p5": "Remodelação",
      "portfolio.p6": "Imobiliária",

      "testimonials.eyebrow": "Referenzen",
      "testimonials.title.a": "Was unsere",
      "testimonials.title.b": "Kunden sagen",
      "testimonials.q1": "“Wir sind sehr zufrieden mit dem Endergebnis! Danke für die Professionalität, Verfügbarkeit und den Kundensupport!”",
      "testimonials.q2": "“Mobile ist top — wir bekommen mehr Anfragen.”",
      "testimonials.q3": "“Cleanes Design, gute Kommunikation, pünktlich geliefert.”",
      "testimonials.n1": "Etransfers.pt",
      "testimonials.n2": "Remodelação.pt",
      "testimonials.n3": "Miguel Silva",

      "contact.eyebrow": "Kontakt",
      "contact.title": "Angebot anfragen.",
      "contact.lead": "Senden Sie Details — wir antworten schnell.",
      "contact.infoTitle": "Lass uns sprechen",
      "contact.infoText": "E-Mail, WhatsApp oder Formular — wie es Ihnen passt.",
      "contact.info1": "Schnelle Antwort",
      "contact.info2": "Unverbindlich",
      "contact.info3": "Klare Offerte",
      "contact.whatsapp_msg": "Hallo! Ich komme von der Website und hätte gerne Informationen.",

      "form.name": "Name",
      "form.email": "E-Mail",
      "form.phone": "Telefon (optional)",
      "form.service": "Leistung",
      "form.servicePh": "Auswählen...",
      "form.service1": "One-Page Website",
      "form.service2": "Redesign",
      "form.service3": "SEO & Performance",
      "form.message": "Nachricht",
      "form.submit": "Senden",

      "faqs.eyebrow": "FAQs",
      "faqs.title": "Häufige Fragen",
      "faqs.q1": "Wie lange dauert es?",
      "faqs.a1": "Kommt auf den Content an — eine One-Page ist oft in wenigen Tagen fertig.",
      "faqs.q2": "Ist es für Mobile optimiert?",
      "faqs.a2": "Ja. Responsive und auf verschiedenen Größen getestet.",
      "faqs.q3": "Kann ich Texte und Bilder ändern?",
      "faqs.a3": "Ja. Wir liefern eine einfache Struktur, Management optional.",
      "faqs.q4": "Sind Domain und Hosting dabei?",
      "faqs.a4": "Wir helfen bei Setup oder übernehmen es (optional).",
      "faqs.q5": "Was ist der Unterschied zwischen WordPress und Custom Code?",
      "faqs.a5": "Individueller Code ist schneller, sicherer und besser für SEO als WordPress.",
      "faqs.q6": "Wie viel kostet eine Website?",
      "faqs.a6": "Preise variieren je nach Komplexität, aber wir bieten transparente Angebote.",
      "faqs.q7": "Bieten Sie Support und Wartung an?",
      "faqs.a7": "Ja, wir haben Wartungspakete, um Ihre Website aktuell zu halten.",
      "faqs.q8": "Wie funktioniert die Bezahlung?",
      "faqs.a8": "In der Regel verlangen wir 50% Anzahlung und die restlichen 50% bei Lieferung.",
      "faqs.q9": "Kann ich die Website in mehreren Sprachen haben?",
      "faqs.a9": "Ja, wir sind spezialisiert auf schnelle, mehrsprachige Websites, die für internationales SEO optimiert sind.",
      "faqs.q10": "Wird die Website bei Google erscheinen?",
      "faqs.a10": "Ja! Alle unsere Websites werden nach besten SEO-Praktiken erstellt.",

      "footer.tagline": "Moderne, schnelle und ergebnisorientierte Websites.",
      "footer.top": "Nach oben",
      "footer.desc":
        "Professionelle Webentwicklung mit individuellem Code, fortgeschrittenem SEO und mehrsprachigen Systemen. Ihre Online-Präsenz, maßgeschneidert.",
      "footer.services": "Leistungen",
      "footer.links": "Links",
      "footer.service1": "Corporate Websites",
      "footer.service2": "Responsive Design",
      "footer.service3": "Fortgeschrittenes SEO",
      "footer.service4": "Mehrsprachige Systeme",
      "footer.privacy": "Datenschutzerklärung",
      "footer.terms": "Nutzungsbedingungen",
      "footer.rights": "Alle Rechte vorbehalten.",

      "seo.h1": "Experten für Website-Erstellung und Webdesign mit Fokus auf Performance",
      "seo.text": `
        <h3>Webentwicklung und Website-Erstellung in Portugal</h3>
        <p>
          Wenn Sie eine <strong>Webdesign-Agentur in Portugal</strong> oder einen erfahrenen freiberuflichen Entwickler für die <strong>professionelle Website-Erstellung</strong> suchen, ist Webmari.pt Ihr idealer Partner. Wir spezialisieren uns auf die Entwicklung maßgeschneiderter digitaler Lösungen, von hochkonvertierenden <em>Landingpages</em> bis hin zu komplexen Unternehmenswebsites und Online-Shops.
        </p>
        <p>
          Im Gegensatz zu traditionellen Agenturen, die schwere WordPress- oder Wix-Templates verwenden, setzen wir auf <strong>handprogrammierte Websites</strong> (HTML, CSS, JavaScript). Dies garantiert, dass Ihre Website extrem schnell, sicher und von Suchmaschinen wie Google geschätzt wird.
        </p>

        <h3>SEO-Optimierung und Performance (Core Web Vitals)</h3>
        <p>
          <strong>Suchmaschinenoptimierung (SEO)</strong> ist kein Extra, sondern die Basis unserer Arbeit. Jede Zeile Code wird im Hinblick auf die Indexierung geschrieben. Unsere Websites erreichen konstant Punktzahlen von 90-100 bei Google PageSpeed Insights (Core Web Vitals), was ein entscheidender Faktor ist, um auf der ersten Seite von Google bei Suchen nach "Website-Erstellung", "Webdesigner" oder "Webentwickler" zu erscheinen.
        </p>

        <h3>Schnelle und responsive Websites für Mobilgeräte</h3>
        <p>
          Da der Großteil des Traffics von mobilen Geräten kommt, verfolgen wir einen <em>Mobile-First</em>-Ansatz. Ihre Website passt sich perfekt an jeden Bildschirm an und garantiert eine flüssige Benutzererfahrung (UX). Wenn Ihr Ziel ist, <strong>online zu verkaufen</strong>, Leads zu gewinnen oder einfach Ihr Unternehmen professionell zu präsentieren, haben wir die technische und kreative Lösung.
        </p>
        <ul>
          <li><strong>Erstellung von Unternehmenswebsites:</strong> Für Unternehmen, die ihre Marke stärken wollen.</li>
          <li><strong>Landingpages:</strong> Fokussiert auf Marketingkampagnen und Conversion.</li>
          <li><strong>Maßgeschneiderte Webentwicklung:</strong> Spezifische Funktionen für Ihr Geschäft.</li>
          <li><strong>Web-Beratung und Wartung:</strong> Kontinuierlicher technischer Support und Updates.</li>
        </ul>
      `,

      "cookies.title": "Cookies 🍪",
      "cookies.text": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung stimmen Sie unserer Datenschutzerklärung zu.",
      "cookies.accept": "Akzeptieren",
      "cookies.decline": "Ablehnen",

      "hero.pill": "Professionelle Webentwicklung",
      "hero.h1.a": "Schnelle Websites, die",
      "hero.h1.b": "Leads und",
      "hero.h1.c": "Verkäufe bringen",
      "hero.sub1": "Individueller Code, fortgeschrittenes SEO und mehrsprachige Systeme.",
      "hero.sub2": "Kein WordPress, kein Wix — nur Exzellenz.",
      "hero.chip1": "Performance",
      "hero.chip2": "Sicherheit",
      "hero.chip3": "SEO",
      "hero.chip4": "Mehrsprachig",
    },

    zh: {
      skip: "跳到主要内容",
      "nav.about": "关于我们",
      "nav.services": "服务",
      "nav.portfolio": "作品集",
      "nav.testimonials": "评价",
      "nav.contact": "联系",
      "nav.faqs": "常见问题",
      theme: "主题",
      "lang.label": "语言",
      "cta.header": "获取报价",

      "hero.eyebrow": "现代网站 • SEO • 性能",
      "hero.title": "我们打造令人惊艳的网站。",
      "hero.subtitle": "简洁设计、快速代码、极佳移动端体验——专注转化。",
      "hero.cta1": "免费获取报价",
      "hero.cta2": "查看作品集",
      "hero.badge1": "快速交付",
      "hero.badge2": "适配 Google",
      "hero.badge3": "不使用 WordPress",
      "hero.kpi1": "Lighthouse 分数",
      "hero.kpi2": "加载时间",
      "hero.kpi3": "移动端",

      "about.eyebrow": "关于我们",
      "about.title.a": "专注于",
      "about.title.b": "数字化卓越的团队",
      "about.desc":
        "在 Webmari.pt，我们相信每个企业都值得拥有独特的线上形象。我们的使命是把你的愿景变成数字现实，不仅好看，还能带来真实成果。",
      "about.p1": "定制代码",
      "about.p2": "多语言",
      "about.p3": "安全且快速",
      "about.p4": "进阶 SEO",
      "about.c1.title": "现代设计",
      "about.c1.text": "界面简洁、一致且易于访问。",
      "about.c2.title": "真实性能",
      "about.c2.text": "优化代码、轻量图片与快速加载。",
      "about.c3.title": "结果导向",
      "about.c3.text": "结构为获取咨询与转化而设计。",
      "about.s1": "已交付项目",
      "about.s2": "满意客户",
      "about.s3": "经验年数",
      "about.s4": "服务国家/地区",

      "services.eyebrow": "服务",
      "services.title": "助力线上成功的完整方案。",
      "services.lead": "从概念到上线，并持续迭代。",
      "services.s1.title": "单页网站",
      "services.s1.text": "现代落地页，展示并促成转化。",
      "services.s2.title": "SEO 与性能",
      "services.s2.text": "更好的结构、速度与收录。",
      "services.s3.title": "品牌与 UI",
      "services.s3.text": "视觉识别与一致组件。",
      "services.s4.title": "内容",
      "services.s4.text": "信息结构、文案与 CTA。",
      "services.s5.title": "安全",
      "services.s5.text": "最佳实践与基础保护。",
      "services.s6.title": "维护",
      "services.s6.text": "持续优化与支持。",

      "portfolio.eyebrow": "作品集",
      "portfolio.title": "真正产生影响的项目。",
      "portfolio.lead": "示例占位（替换为你的作品）。",
      "portfolio.tag1": "落地页",
      "portfolio.tag2": "企业站",
      "portfolio.tag3": "UI",
      "portfolio.tag4": "SEO",
      "portfolio.tag5": "移动端",
      "portfolio.tag6": "单页",
      "portfolio.p1": "Burguer",
      "portfolio.p2": "PV Car",
      "portfolio.p3": "Seguidor Express",
      "portfolio.p4": "Etransfers",
      "portfolio.p5": "Remodelação",
      "portfolio.p6": "Imobiliária",

      "testimonials.eyebrow": "评价",
      "testimonials.title.a": "客户怎么说",
      "testimonials.title.b": "",
      "testimonials.q1": "“网站很快也很现代，沟通与交付都很专业。”",
      "testimonials.q2": "“移动端效果非常好，我们收到更多咨询了。”",
      "testimonials.q3": "“设计干净，沟通顺畅，按时交付。”",
      "testimonials.n1": "Etransfers.pt",
      "testimonials.n2": "Remodelação.pt",
      "testimonials.n3": "Miguel Silva",

      "contact.eyebrow": "联系",
      "contact.title": "获取报价",
      "contact.lead": "发送需求，我们会尽快回复。",
      "contact.infoTitle": "开始沟通",
      "contact.infoText": "邮件、WhatsApp 或表单——任选其一。",
      "contact.info1": "快速回复",
      "contact.info2": "无压力",
      "contact.info3": "方案清晰",
      "contact.whatsapp_msg": "您好！我来自官网，想了解更多信息。",

      "form.name": "姓名",
      "form.email": "邮箱",
      "form.phone": "电话（可选）",
      "form.service": "服务",
      "form.servicePh": "请选择...",
      "form.service1": "单页网站",
      "form.service2": "改版",
      "form.service3": "SEO 与性能",
      "form.message": "留言",
      "form.submit": "发送",

      "faqs.eyebrow": "常见问题",
      "faqs.title": "常见问题",
      "faqs.q1": "需要多久？",
      "faqs.a1": "取决于内容，单页网站通常几天内可完成。",
      "faqs.q2": "是否适配移动端？",
      "faqs.a2": "是的，响应式布局并在多尺寸测试。",
      "faqs.q3": "我可以改文字和图片吗？",
      "faqs.a3": "可以。我们提供简单结构，也可选配管理功能。",
      "faqs.q4": "包含域名和主机吗？",
      "faqs.a4": "我們可以幫助您設置或為您管理（可選）。",
      "faqs.q5": "WordPress 和定制代码有什么区别？",
      "faqs.a5": "定制代码比 WordPress 更快、更安全，并且更有利于 SEO。",
      "faqs.q6": "做一个网站需要多少钱？",
      "faqs.a6": "价格根据复杂程度而异，但我们提供透明的报价。",
      "faqs.q7": "你们提供支持和维护吗？",
      "faqs.a7": "是的，我们有维护套餐，以确保您的网站始终保持更新。",
      "faqs.q8": "付款方式是怎样的？",
      "faqs.a8": "通常，我们要求预付 50%，剩余 50% 在交付时支付。",
      "faqs.q9": "我可以拥有多语言网站吗？",
      "faqs.a9": "是的，我们专注于构建快速的、针对国际 SEO 优化的多语言网站。",
      "faqs.q10": "网站会出现在 Google 上吗？",
      "faqs.a10": "是的！我们所有的网站都是按照最佳技术 SEO 实践构建的。",

      "footer.tagline": "现代、快速、结果导向的网站。",
      "footer.top": "返回顶部",
      "footer.desc":
        "专业网站开发：定制代码、进阶 SEO 与多语言系统。为你量身打造线上形象。",
      "footer.services": "服务",
      "footer.links": "链接",
      "footer.service1": "企业网站",
      "footer.service2": "响应式设计",
      "footer.service3": "进阶 SEO",
      "footer.service4": "多语言系统",
      "footer.privacy": "隐私政策",
      "footer.terms": "服务条款",
      "footer.rights": "版权所有。",

      "seo.h1": "专注于高性能的网站创建和网页设计专家",
      "seo.text": `
        <h3>葡萄牙的网站开发与创建</h3>
        <p>
          如果您正在寻找<strong>葡萄牙的网页设计代理机构</strong>或经验丰富的自由开发者来进行<strong>专业网站创建</strong>，Webmari.pt 是您的理想合作伙伴。我们专注于开发定制数字解决方案，从高转化率的<em>着陆页</em>到复杂的企业网站和在线商店。
        </p>
        <p>
          与使用繁重的 WordPress 或 Wix 模板的传统代理机构不同，我们坚持<strong>手工编写网站代码</strong>（HTML、CSS、JavaScript）。这确保您的网站极快、安全，并受到 Google 等搜索引擎的青睐。
        </p>

        <h3>SEO 优化与性能（Core Web Vitals）</h3>
        <p>
          <strong>搜索引擎优化 (SEO)</strong> 不是额外的，而是我们工作的基础。每一行代码都是为了索引而编写的。我们的网站在 Google PageSpeed Insights (Core Web Vitals) 上持续达到 90-100 的分数，这是在 "网站创建"、"网页设计师" 或 "Web 开发人员" 的搜索中出现在 Google 第一页的关键因素。
        </p>

        <h3>适用于移动设备的快速响应式网站</h3>
        <p>
          由于大多数流量来自移动设备，我们采用<em>移动优先</em>的方法。您的网站将完美适应任何屏幕，确保流畅的用户体验 (UX)。如果您的目标是<strong>在线销售</strong>、获取潜在客户或仅仅是以专业方式展示您的公司，我们拥有技术和创意解决方案。
        </p>
        <ul>
          <li><strong>机构网站创建：</strong> 适用于想要确立品牌的公司。</li>
          <li><strong>着陆页：</strong> 专注于营销活动和转化。</li>
          <li><strong>定制 Web 开发：</strong> 针对您业务的特定功能。</li>
          <li><strong>Web 咨询与维护：</strong> 持续的技术支持和更新。</li>
        </ul>
      `,

      "cookies.title": "Cookies 🍪",
      "cookies.text": "我们使用 Cookie 以改善您的体验。继续浏览即表示您接受我们的隐私政策。",
      "cookies.accept": "接受",
      "cookies.decline": "拒绝",

      "hero.pill": "专业网站开发",
      "hero.h1.a": "快速网站，带来",
      "hero.h1.b": "咨询与",
      "hero.h1.c": "销售增长",
      "hero.sub1": "定制代码、进阶 SEO 与多语言系统。",
      "hero.sub2": "不使用 WordPress、不使用 Wix——只做高品质。",
      "hero.chip1": "性能",
      "hero.chip2": "安全",
      "hero.chip3": "SEO",
      "hero.chip4": "多语言",
    },

    // Optional: only needed if your UI actually switches to "fr"
    fr: {
      skip: "Aller au contenu",
      "nav.about": "À propos",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Témoignages",
      "nav.contact": "Contact",
      "nav.faqs": "FAQs",
      theme: "Thème",
      "lang.label": "Langue",
      "cta.header": "Demander un devis",

      "hero.pill": "Développement Web Professionnel",
      "hero.h1.a": "Présence Digitale",
      "hero.h1.b": "à fort impact",
      "hero.h1.c": "global.",
      "hero.sub1": "Sites web haute performance, SEO technique et conformité totale (RGPD). Conçus au Portugal pour les entreprises qui exigent l'excellence.",
      "hero.sub2": "Pas de templates lents. Uniquement du code propre et des résultats mesurables.",
      "hero.chip1": "Performance 100%",
      "hero.chip2": "SEO International",
      "hero.chip3": "Support Premium",
      "hero.chip4": "Multilingue",
      "hero.badge1": "Livraison Rapide",
      "hero.badge2": "Google Friendly",
      "hero.badge3": "Sans WordPress",
      "hero.kpi1": "Score Lighthouse",
      "hero.kpi2": "Chargement",
      "hero.kpi3": "Mobile First",

      "about.eyebrow": "À propos",
      "about.title.a": "Une équipe dédiée à",
      "about.title.b": "l'excellence digitale",
      "about.desc": "Chez Webmari.pt, nous croyons que chaque entreprise mérite une présence en ligne unique. Notre mission est de transformer votre vision en une réalité digitale qui impressionne visuellement et génère des résultats concrets.",
      "about.p1": "Code Personnalisé",
      "about.p2": "Multilingue",
      "about.p3": "Sécurisé & Rapide",
      "about.p4": "SEO Avancé",
      "about.c1.title": "Design moderne",
      "about.c1.text": "Interfaces propres, cohérentes et accessibles.",
      "about.c2.title": "Performance réelle",
      "about.c2.text": "Code optimisé, images légères et chargement rapide.",
      "about.c3.title": "Focus sur les résultats",
      "about.c3.text": "Structure pensée pour générer des contacts et des conversions.",
      "about.s1": "Projets Livrés",
      "about.s2": "Clients Satisfaits",
      "about.s3": "Années d'Expérience",
      "about.s4": "Pays Servis",

      "services.eyebrow": "Services",
      "services.title": "Solutions complètes pour votre succès en ligne.",
      "services.lead": "Du concept au lancement — et amélioration continue.",
      "services.s1.title": "Site One-Page",
      "services.s1.text": "Landing page moderne pour présenter et convertir.",
      "services.s2.title": "SEO & Performance",
      "services.s2.text": "Meilleure structure, vitesse et indexation.",
      "services.s3.title": "Identité & UI",
      "services.s3.text": "Identité visuelle et composants cohérents.",
      "services.s4.title": "Contenu",
      "services.s4.text": "Messages, copywriting et structure CTA.",
      "services.s5.title": "Sécurité",
      "services.s5.text": "Bonnes pratiques et protection de base.",
      "services.s6.title": "Maintenance",
      "services.s6.text": "Mises à jour, améliorations et support.",

      "portfolio.eyebrow": "Portfolio",
      "portfolio.title": "Des projets qui font la différence.",
      "portfolio.lead": "Quelques exemples récents de notre travail.",
      "portfolio.tag1": "Landing Page",
      "portfolio.tag2": "Corporate",
      "portfolio.tag3": "UI Design",
      "portfolio.tag4": "SEO",
      "portfolio.tag5": "Mobile",
      "portfolio.tag6": "One Page",
      "portfolio.p1": "Burguer",
      "portfolio.p2": "PV Car",
      "portfolio.p3": "Seguidor Express",
      "portfolio.p4": "Etransfers",
      "portfolio.p5": "Remodelação",
      "portfolio.p6": "Imobiliária",

      "testimonials.eyebrow": "Témoignages",
      "testimonials.title.a": "Ce que disent",
      "testimonials.title.b": "nos clients.",
      "testimonials.q1": "\u201cNous sommes très satisfaits du résultat final ! Merci pour le professionnalisme, la disponibilité et le suivi client !\u201d",
      "testimonials.q2": "\u201cL'optimisation mobile est parfaite et le support pour configurer l'email professionnel était 5 étoiles.\u201d",
      "testimonials.q3": "\u201cSans WordPress, sans lenteur. Nous avons remarqué une différence immédiate dans le classement Google.\u201d",
      "testimonials.n1": "Etransfers.pt",
      "testimonials.n2": "Remodelação.pt",
      "testimonials.n3": "Miguel Silva",

      "contact.eyebrow": "Contact",
      "contact.title": "Travaillons ensemble.",
      "contact.lead": "Envoyez-nous les détails de votre projet. Nous répondons sous 24h.",
      "contact.infoTitle": "Parlons-en",
      "contact.infoText": "Email, WhatsApp ou formulaire — à votre choix.",
      "contact.info1": "Réponse rapide",
      "contact.info2": "Devis transparent",
      "contact.info3": "Proposition claire",
      "contact.whatsapp_msg": "Bonjour ! Je viens du site et j'aimerais obtenir des informations.",

      "form.name": "Nom",
      "form.email": "Email",
      "form.phone": "Téléphone (optionnel)",
      "form.service": "Service",
      "form.servicePh": "Choisir...",
      "form.service1": "Site One-Page",
      "form.service2": "Refonte",
      "form.service3": "SEO & Performance",
      "form.message": "Message",
      "form.submit": "Envoyer",

      "faqs.eyebrow": "FAQs",
      "faqs.title": "Questions fréquentes",
      "faqs.q1": "Combien coûte la création d'un site professionnel ?",
      "faqs.a1": "Le prix dépend de la complexité et des fonctionnalités souhaitées. Un site One-Page commence à partir de 350€, tandis que des projets plus complets avec SEO avancé et système multilingue peuvent varier entre 600€ et 1500€. Nous offrons toujours un devis transparent et sans surprises.",
      "faqs.q2": "Quelle est la différence entre WordPress et le code personnalisé ?",
      "faqs.a2": "WordPress utilise des templates génériques avec des plugins lourds, ce qui entraîne des sites lents et vulnérables. Le code personnalisé (HTML, CSS, JavaScript) est écrit sur mesure, garantissant une vitesse maximale, une meilleure sécurité et un meilleur positionnement sur Google.",
      "faqs.q3": "Combien de temps faut-il pour créer un site web ?",
      "faqs.a3": "Un site One-Page est prêt en 3 à 7 jours ouvrables. Des projets plus complexes avec plusieurs pages ou intégrations peuvent prendre 2 à 4 semaines. Nous travaillons avec des délais définis et une communication constante.",
      "faqs.q4": "Le site apparaîtra-t-il sur Google ? Comment fonctionne le SEO ?",
      "faqs.a4": "Oui. Tous nos sites sont construits avec les bases du SEO technique : structure sémantique, vitesse de chargement, balises meta, Schema.org et sitemap. Pour des résultats locaux ou internationaux, nous appliquons des stratégies SEO spécifiques.",
      "faqs.q5": "Le site est-il optimisé pour mobile ?",
      "faqs.a5": "Absolument. Nous adoptons une approche Mobile-First : le design est d'abord pensé pour les petits écrans puis adapté au bureau. Nous testons sur plusieurs appareils pour garantir une expérience parfaite sur n'importe quel écran.",
      "faqs.q6": "Puis-je avoir le site en plusieurs langues ?",
      "faqs.a6": "Oui, nous sommes spécialistes des sites multilingues. Nous développons des systèmes de traduction rapides et optimisés pour le SEO international, supportant le portugais, l'anglais, l'espagnol, l'allemand, le français et d'autres langues.",
      "faqs.q7": "Le site inclut-il le domaine et l'hébergement ?",
      "faqs.a7": "Nous pouvons vous guider dans le choix et la configuration du domaine et de l'hébergement, ou tout gérer pour vous. Nous travaillons avec des solutions rapides et sécurisées comme Netlify, Vercel ou des serveurs dédiés.",
      "faqs.q8": "Proposez-vous un support et une maintenance après le lancement ?",
      "faqs.a8": "Oui. Nous avons des forfaits de maintenance mensuelle incluant les mises à jour de contenu, la surveillance des performances, les sauvegardes et le support technique. Votre site sera toujours à jour et sécurisé.",
      "faqs.q9": "Comment fonctionne le processus de paiement ?",
      "faqs.a9": "Nous travaillons avec un modèle simple : 50% au début du projet et 50% à la livraison finale. Nous acceptons les virements bancaires et MB Way. Nous émettons une facture pour chaque paiement.",
      "faqs.q10": "Puis-je modifier les textes et images après la livraison ?",
      "faqs.a10": "Oui. Nous livrons le code source complet et pouvons ajouter un panneau de gestion de contenu simple. Nous proposons également un service de mise à jour de contenu inclus dans les forfaits de maintenance.",

      "footer.tagline": "Sites web modernes, rapides et axés sur les résultats.",
      "footer.top": "Retour en haut",
      "footer.desc": "Développement web professionnel avec code personnalisé, SEO avancé et systèmes multilingues. Votre présence en ligne, sur mesure.",
      "footer.services": "Services",
      "footer.links": "Liens",
      "footer.service1": "Sites Corporate",
      "footer.service2": "Design Responsive",
      "footer.service3": "SEO Avancé",
      "footer.service4": "Systèmes Multilingues",
      "footer.privacy": "Politique de Confidentialité",
      "footer.terms": "Conditions d'Utilisation",
      "footer.rights": "Tous droits réservés.",

      "seo.h1": "Experts en Création de Sites Web et Web Design axés sur la Performance",
      "seo.text": `
        <h3>Développement Web et Création de Sites au Portugal</h3>
        <p>
          Si vous cherchez une <strong>agence de web design au Portugal</strong> ou un développeur freelance expérimenté pour la <strong>création de sites professionnels</strong>, Webmari.pt est votre partenaire idéal. Nous sommes spécialisés dans le développement de solutions digitales sur mesure, des <em>landing pages</em> à fort taux de conversion aux sites corporate complexes.
        </p>
        <p>
          Contrairement aux agences traditionnelles qui utilisent des templates WordPress ou Wix lourds, nous parions sur la <strong>programmation de sites à la main</strong> (HTML, CSS, JavaScript). Cela garantit que votre site est extrêmement rapide, sécurisé et apprécié par les moteurs de recherche comme Google.
        </p>
        <h3>Optimisation SEO et Performance (Core Web Vitals)</h3>
        <p>
          L'<strong>optimisation pour les moteurs de recherche (SEO)</strong> n'est pas un extra, c'est la base de notre travail. Nos sites atteignent régulièrement des scores de 90-100 sur Google PageSpeed Insights, un facteur crucial pour apparaître en première page de Google.
        </p>
        <ul>
          <li><strong>Création de Sites Institutionnels :</strong> Pour les entreprises qui veulent affirmer leur marque.</li>
          <li><strong>Landing Pages :</strong> Axées sur les campagnes marketing et la conversion.</li>
          <li><strong>Développement Web Sur Mesure :</strong> Fonctionnalités spécifiques pour votre activité.</li>
          <li><strong>Conseil Web et Maintenance :</strong> Support technique continu et mises à jour.</li>
        </ul>
      `,

      "cookies.title": "Cookies 🍪",
      "cookies.text": "Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre politique de confidentialité.",
      "cookies.accept": "Accepter",
      "cookies.decline": "Refuser",
    },
  };

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
        nextSrc = theme === "dark" ? (mobileLight || desktopLight) : (mobileDark || desktopDark);
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
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById("no-transition-override");
        if (el) el.remove();
        // Swap logo after transitions are re-enabled
        applyBrandLogoForTheme(theme);
      });
    });
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
  // NEW: cookie banner logic
  const initCookieBanner = () => {
    const banner = $("#cookie-banner");
    const acceptBtn = $("#cookie-accept");
    const declineBtn = $("#cookie-decline");

    if (!banner || !acceptBtn || !declineBtn) return;

    // Check if choice already made
    const consent = localStorage.getItem("webmari.consent");
    if (!consent) {
      // Show with slight delay
      setTimeout(() => {
        banner.setAttribute("data-open", "true");
        banner.hidden = false;
      }, 2000);
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("webmari.consent", "accepted");
      banner.setAttribute("data-open", "false");
      setTimeout(() => banner.hidden = true, 400);
      // Here you would init analytics
    });

    declineBtn.addEventListener("click", () => {
      localStorage.setItem("webmari.consent", "declined");
      banner.setAttribute("data-open", "false");
      setTimeout(() => banner.hidden = true, 400);
    });
  };

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
  initCookieBanner(); // Initialize cookie banner

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

    if (!chatbot || !toggleBtn) return;

    let currentState = "welcome";
    let history = [];
    let currentLang = localStorage.getItem(STORAGE.lang) || "pt";

    // --- TRANSLATIONS ---
    const chatI18n = {
      pt: {
        welcome: "Olá! Sou o assistente virtual da Webmari. Você quer tirar uma dúvida rápida ou pedir um orçamento para um projeto?",
        opt_faq: "Tirar uma dúvida",
        opt_budget: "Pedir orçamento",
        opt_explore: "Só estou a explorar",
        explore_msg: "Sem problema! Sinta-se à vontade para navegar pelo nosso portfólio e serviços. Se precisar de algo, estarei por aqui.",
        opt_portfolio: "Ver Portfólio",
        opt_reset: "Voltar ao início",
        faq_msg: "Perfeito! Sobre qual assunto tens dúvidas?",
        faq_opt_price: "💰 Preços e pagamento",
        faq_opt_deadline: "⏱️ Prazos de entrega",
        faq_opt_wp: "⚡ WordPress vs Código Personalizado",
        faq_opt_seo: "🔍 SEO e Google",
        faq_opt_mobile: "📱 Mobile e Idiomas",
        faq_opt_support: "🛠️ Suporte e manutenção",
        price_msg: "Um site One-Page começa a partir de **350€**. Projetos mais completos com SEO avançado e sistema multilingue variam entre **600€ e 1500€**. Oferecemos sempre orçamento transparente e sem surpresas. Quer pedir um orçamento?",
        opt_yes_budget: "Sim, quero orçamento",
        opt_back_faq: "Voltar às dúvidas",
        deadline_msg: "Um site One-Page fica pronto em **3 a 7 dias úteis**. Projetos mais complexos com múltiplas páginas ou integrações podem demorar **2 a 4 semanas**. Trabalhamos com prazos definidos e comunicação constante.",
        wp_msg: "O WordPress usa templates genéricos com plugins pesados — resultado: sites lentos e vulneráveis. O nosso código personalizado (HTML, CSS, JavaScript) é escrito à medida, garantindo **velocidade máxima**, maior segurança e **melhor posicionamento no Google**.",
        seo_msg: "Sim! Todos os nossos sites têm SEO técnico de base: estrutura semântica, velocidade de carregamento, meta tags, Schema.org e sitemap. Para resultados locais em Portugal ou internacionais, aplicamos estratégias específicas.",
        mobile_msg: "Adotamos uma abordagem **Mobile-First** — o design é pensado primeiro para telemóvel. Também somos especialistas em sites **multilingue** (PT, EN, ES, DE, FR e mais), otimizados para SEO internacional.",
        support_msg: "Sim! Temos pacotes de manutenção mensal com atualizações de conteúdo, monitorização de performance, backups e suporte técnico. O pagamento é simples: **50% no início** e **50% na entrega**. Aceitamos transferência bancária e MB Way.",
        target_msg: "Atendemos de tudo: desde pequenos negócios locais até indústrias e e-commerce.",
        support_filter_msg: "Sobre suporte, só para eu entender melhor:",
        opt_client: "Já sou cliente",
        opt_new: "Ainda não sou cliente",
        client_msg: "Perfeito! Diga em poucas palavras o que precisa:",
        opt_tech: "Problema técnico",
        opt_content: "Alterar conteúdo",
        opt_feature: "Nova funcionalidade",
        tech_contact: "Obrigado! Envie um email para **marianakb345@gmail.com** ou use o WhatsApp para urgências.",
        content_contact: "Envie um email para **marianakb345@gmail.com** indicando as alterações.",
        feature_contact: "Descreva a funcionalidade no WhatsApp ou Email para estimarmos o custo.",
        new_contact: "A nossa equipa comercial pode ajudar.",
        opt_whatsapp: "Falar no WhatsApp",
        opt_understood: "Entendido",
        budget_intro: "Ótimo, vamos fazer um orçamento rápido. Qual é o tipo de projeto?",
        budget_segment: "Qual é o seu segmento de atuação?",
        budget_ready: "Já tem materiais prontos (logo, textos)?",
        budget_deadline: "Tem alguma ideia de prazo?",
        budget_value: "Qual é o orçamento aproximado?",
        budget_low: "O nosso trabalho personalizado começa nos 350€, mas fale connosco no WhatsApp.",
        budget_final: "Obrigado! Clique abaixo para enviar este resumo para o nosso WhatsApp.",
        opt_send_wa: "Enviar pelo WhatsApp",

        // Budget Options
        budget_opt_web: "Website",
        budget_opt_landing: "Landing Page",
        budget_opt_ecom: "E-Commerce",
        budget_opt_redesign: "Redesign",
        budget_seg_services: "Serviços",
        budget_seg_commerce: "Comércio",
        budget_seg_health: "Saúde",
        budget_seg_other: "Outro",

        budget_ans_yes: "Sim",
        budget_ans_no: "Não",
        budget_time_1m: "1 mês",
        budget_time_23m: "2-3 meses",
        budget_time_norush: "Sem pressa",

        budget_range_low: "350€ - 1.000€",
        budget_range_mid: "1.000€ - 3.000€",
        budget_range_high: "+ 3.000€",
        budget_range_micro: "< 350€",

        ask_name: "Antes de começarmos, como se chama?",
        wa_template: "Olá, chamo-me {name} e gostaria de um orçamento para: {details}"
      },
      en: {
        welcome: "Hello! I'm Webmari's virtual assistant. Do you want to ask a quick question or request a quote?",
        opt_faq: "Ask a question",
        opt_budget: "Request a quote",
        opt_explore: "Just exploring",
        explore_msg: "No problem! Feel free to browse our portfolio and services.",
        opt_portfolio: "View Portfolio",
        opt_reset: "Back to start",
        faq_msg: "Perfect! What would you like to know?",
        faq_opt_price: "Pricing",
        faq_opt_deadline: "Timeline",
        faq_opt_support: "Support",
        faq_opt_who: "Who we serve",
        price_msg: "Our projects start around **€400** and can go up to **€10,000**, depending on complexity. Want a quick estimate?",
        opt_yes_budget: "Yes, get a quote",
        opt_back_faq: "Back to FAQs",
        deadline_msg: "Minimum timeline is about **2 weeks**. Larger projects take 1-3 months.",
        target_msg: "We serve everyone: from small local businesses to industries and e-commerce.",
        support_filter_msg: "Regarding support:",
        opt_client: "I'm a client",
        opt_new: "Not a client yet",
        client_msg: "Got it! What do you need help with?",
        opt_tech: "Technical issue",
        opt_content: "Content change",
        opt_feature: "New feature",
        tech_contact: "Thanks! Please email **marianakb345@gmail.com** or use WhatsApp for urgent matters.",
        content_contact: "Please email **marianakb345@gmail.com** with the changes.",
        feature_contact: "Describe the feature via WhatsApp or Email for an estimate.",
        new_contact: "Our sales team can help you.",
        opt_whatsapp: "Chat on WhatsApp",
        opt_understood: "Understood",
        budget_intro: "Great, let's do a quick estimate. What type of project?",
        budget_segment: "What is your industry?",
        budget_ready: "Do you have materials ready (logo, text)?",
        budget_deadline: "What is your timeline?",
        budget_value: "What is your approximate budget?",
        budget_low: "Our custom work starts at €400, but chat with us on WhatsApp.",
        budget_final: "Thanks! Click below to send this summary to our WhatsApp.",
        opt_send_wa: "Send via WhatsApp",

        // Budget Options
        budget_opt_web: "Website",
        budget_opt_landing: "Landing Page",
        budget_opt_ecom: "E-Commerce",
        budget_opt_redesign: "Redesign",
        budget_seg_services: "Services",
        budget_seg_commerce: "Commerce",
        budget_seg_health: "Health",
        budget_seg_other: "Other",

        budget_ans_yes: "Yes",
        budget_ans_no: "No",
        budget_time_1m: "1 month",
        budget_time_23m: "2-3 months",
        budget_time_norush: "No rush",

        budget_range_low: "350€ - 1.000€",
        budget_range_mid: "1.000€ - 3.000€",
        budget_range_high: "+ 3.000€",
        budget_range_micro: "< 350€",

        ask_name: "Before we start, what is your name?",
        wa_template: "Hello, my name is {name} and I would like a quote for: {details}"
      },
      es: {
        welcome: "¡Hola! Soy el asistente virtual de Webmari. ¿Quieres hacer una pregunta o pedir un presupuesto?",
        opt_faq: "Hacer una pregunta",
        opt_budget: "Pedir presupuesto",
        opt_explore: "Solo explorando",
        explore_msg: "¡Sin problema! Siéntete libre de navegar por nuestro portafolio.",
        opt_portfolio: "Ver Portafolio",
        opt_reset: "Volver al inicio",
        faq_msg: "¡Perfecto! ¿Sobre qué tienes dudas?",
        faq_opt_price: "Precios",
        faq_opt_deadline: "Plazos",
        faq_opt_support: "Soporte",
        faq_opt_who: "A quién atendemos",
        price_msg: "Nuestros proyectos comienzan en **400 €** y pueden llegar a **10.000 €**. ¿Quieres un presupuesto rápido?",
        opt_yes_budget: "Sí, quiero presupuesto",
        opt_back_faq: "Volver a dudas",
        deadline_msg: "El plazo mínimo es de **2 semanas**. Proyectos grandes toman 1-3 meses.",
        target_msg: "Atendemos a todos: desde pequeños negocios locales hasta industrias.",
        support_filter_msg: "Sobre soporte:",
        opt_client: "Soy cliente",
        opt_new: "Aún no soy cliente",
        client_msg: "¡Entendido! ¿Qué necesitas?",
        opt_tech: "Problema técnico",
        opt_content: "Cambiar contenido",
        opt_feature: "Nueva funcionalidad",
        tech_contact: "¡Gracias! Envía un email a **marianakb345@gmail.com** o usa WhatsApp para urgencias.",
        content_contact: "Envía un email a **marianakb345@gmail.com** con los cambios.",
        feature_contact: "Describe la funcionalidad por WhatsApp o Email.",
        new_contact: "Nuestro equipo comercial puede ayudar.",
        opt_whatsapp: "Hablar por WhatsApp",
        opt_understood: "Entendido",
        budget_intro: "Genial, hagamos un presupuesto rápido. ¿Qué tipo de proyecto es?",
        budget_segment: "¿Cuál es tu sector?",
        budget_ready: "¿Tienes materiales listos (logo, textos)?",
        budget_deadline: "¿Tienes idea del plazo?",
        budget_value: "¿Cuál es el presupuesto aproximado?",
        budget_low: "Nuestro trabajo comienza en 400€, pero habla con nosotros en WhatsApp.",
        budget_final: "¡Gracias! Haz clic abajo para enviar este resumen a nuestro WhatsApp.",
        opt_send_wa: "Enviar por WhatsApp",

        // Budget Options
        budget_opt_web: "Sitio Web",
        budget_opt_landing: "Landing Page",
        budget_opt_ecom: "Tienda Online",
        budget_opt_redesign: "Rediseño",
        budget_seg_services: "Servicios",
        budget_seg_commerce: "Comercio",
        budget_seg_health: "Salud",
        budget_seg_other: "Otro",

        budget_ans_yes: "Sí",
        budget_ans_no: "No",
        budget_time_1m: "1 mes",
        budget_time_23m: "2-3 meses",
        budget_time_norush: "Sin prisa",

        budget_range_low: "350€ - 1.000€",
        budget_range_mid: "1.000€ - 3.000€",
        budget_range_high: "+ 3.000€",
        budget_range_micro: "< 350€",

        ask_name: "Antes de empezar, ¿cómo te llamas?",
        wa_template: "Hola, me llamo {name} y me gustaría un presupuesto para: {details}"
      },
      de: {
        welcome: "Hallo! Ich bin der virtuelle Assistent von Webmari. Möchten Sie eine Frage stellen oder ein Angebot anfordern?",
        opt_faq: "Frage stellen",
        opt_budget: "Angebot anfordern",
        opt_explore: "Nur stöbern",
        explore_msg: "Kein Problem! Schauen Sie sich gerne unser Portfolio an.",
        opt_portfolio: "Portfolio ansehen",
        opt_reset: "Zurück zum Start",
        faq_msg: "Perfekt! Worum geht es?",
        faq_opt_price: "Preise",
        faq_opt_deadline: "Zeitplan",
        faq_opt_support: "Support",
        faq_opt_who: "Zielgruppe",
        price_msg: "Unsere Projekte starten bei **400 €** und gehen bis zu **10.000 €**. Möchten Sie eine schnelle Schätzung?",
        opt_yes_budget: "Ja, Angebot bitte",
        opt_back_faq: "Zurück zu Fragen",
        deadline_msg: "Minimum sind ca. **2 Wochen**. Größere Projekte dauern 1-3 Monate.",
        target_msg: "Wir bedienen alle: von kleinen lokalen Geschäften bis hin zu Industrie.",
        support_filter_msg: "Zum Support:",
        opt_client: "Ich bin Kunde",
        opt_new: "Noch kein Kunde",
        client_msg: "Verstanden! Was brauchen Sie?",
        opt_tech: "Technisches Problem",
        opt_content: "Inhalt ändern",
        opt_feature: "Neue Funktion",
        tech_contact: "Danke! Bitte E-Mail an **marianakb345@gmail.com** oder WhatsApp für Dringendes.",
        content_contact: "Bitte E-Mail an **marianakb345@gmail.com** mit den Änderungen.",
        feature_contact: "Beschreiben Sie die Funktion per WhatsApp oder E-Mail.",
        new_contact: "Unser Vertriebsteam kann helfen.",
        opt_whatsapp: "WhatsApp Chat",
        opt_understood: "Verstanden",
        budget_intro: "Super, machen wir eine schnelle Schätzung. Welche Art von Projekt?",
        budget_segment: "Aus welcher Branche kommen Sie?",
        budget_ready: "Haben Sie Materialien (Logo, Text)?",
        budget_deadline: "Welchen Zeitrahmen haben Sie?",
        budget_value: "Welches Budget haben Sie?",
        budget_low: "Unsere Arbeit beginnt bei 400€, aber schreiben Sie uns bei WhatsApp.",
        budget_final: "Danke! Klicken Sie unten, um diese Zusammenfassung an WhatsApp zu senden.",
        opt_send_wa: "Per WhatsApp senden",

        // Budget Options
        budget_opt_web: "Webseite",
        budget_opt_landing: "Landing Page",
        budget_opt_ecom: "Online-Shop",
        budget_opt_redesign: "Neugestaltung",
        budget_seg_services: "Dienstleistungen",
        budget_seg_commerce: "Handel",
        budget_seg_health: "Gesundheit",
        budget_seg_other: "Andere",

        budget_ans_yes: "Ja",
        budget_ans_no: "Nein",
        budget_time_1m: "1 Monat",
        budget_time_23m: "2-3 Monate",
        budget_time_norush: "Keine Eile",

        budget_range_low: "350€ - 1.000€",
        budget_range_mid: "1.000€ - 3.000€",
        budget_range_high: "+ 3.000€",
        budget_range_micro: "< 350€",

        ask_name: "Bevor wir anfangen, wie heißen Sie?",
        wa_template: "Hallo, ich heiße {name} und hätte gerne ein Angebot für: {details}"
      },
      zh: {
        welcome: "你好！我是 Webmari 的虚拟助手。你想快速咨询还是询价？",
        opt_faq: "咨询问题",
        opt_budget: "请求报价",
        opt_explore: "随便看看",
        explore_msg: "没问题！欢迎浏览我们的作品集和服务。",
        opt_portfolio: "查看作品集",
        opt_reset: "回到开始",
        faq_msg: "好的！你想了解什么？",
        faq_opt_price: "价格",
        faq_opt_deadline: "周期",
        faq_opt_support: "支持",
        faq_opt_who: "服务对象",
        price_msg: "我们的项目起价约为 **400 €**，最高可达 **10,000 €**。想要快速估算吗？",
        opt_yes_budget: "是的，我要报价",
        opt_back_faq: "返回问题",
        deadline_msg: "最短周期约为 **2 周**。大型项目需要 1-3 个月。",
        target_msg: "我们服务所有客户：从本地小企业到大型行业。",
        support_filter_msg: "关于支持：",
        opt_client: "我是现有客户",
        opt_new: "我还不是客户",
        client_msg: "明白了！你需要什么帮助？",
        opt_tech: "技术问题",
        opt_content: "修改内容",
        opt_feature: "新功能",
        tech_contact: "谢谢！请发送邮件至 **marianakb345@gmail.com**，或使用 WhatsApp 处理紧急情况。",
        content_contact: "请发送邮件至 **marianakb345@gmail.com** 说明更改。",
        feature_contact: "请通过 WhatsApp 或邮件描述功能以获取估价。",
        new_contact: "我们的销售团队可以提供帮助。",
        opt_whatsapp: "WhatsApp 聊天",
        opt_understood: "明白了",
        budget_intro: "好的，我们做一个快速估算。是什么类型的项目？",
        budget_segment: "您属于哪个行业？",
        budget_ready: "您有现成的材料吗（Logo、文案）？",
        budget_deadline: "您有预期的上线时间吗？",
        budget_value: "您的预算大约是多少？",
        budget_low: "我们的定制服务起价 400€，但请在 WhatsApp 联系我们。",
        budget_final: "谢谢！点击下方将此摘要发送到我们的 WhatsApp。",
        opt_send_wa: "通过 WhatsApp 发送",

        // Budget Options
        budget_opt_web: "网站",
        budget_opt_landing: "落地页",
        budget_opt_ecom: "电商",
        budget_opt_redesign: "重新设计",
        budget_seg_services: "服务业",
        budget_seg_commerce: "商业",
        budget_seg_health: "健康",
        budget_seg_other: "其他",

        budget_ans_yes: "是",
        budget_ans_no: "否",
        budget_time_1m: "1个月",
        budget_time_23m: "2-3个月",
        budget_time_norush: "不急",

        budget_range_low: "350€ - 1.000€",
        budget_range_mid: "1.000€ - 3.000€",
        budget_range_high: "+ 3.000€",
        budget_range_micro: "< 350€",

        ask_name: "开始之前，请问您怎么称呼？",
        wa_template: "您好，我叫 {name}，我想询价：{details}"
      },
      fr: {
        welcome: "Bonjour ! Je suis l'assistant virtuel de Webmari. Vous souhaitez poser une question rapide ou demander un devis pour un projet ?",
        opt_faq: "Poser une question",
        opt_budget: "Demander un devis",
        opt_explore: "Je regarde juste",
        explore_msg: "Pas de problème ! N'hésitez pas à parcourir notre portfolio et nos services. Je suis là si vous avez besoin.",
        opt_portfolio: "Voir le Portfolio",
        opt_reset: "Retour au début",
        faq_msg: "Parfait ! Sur quel sujet avez-vous des questions ?",
        faq_opt_price: "💰 Prix et paiement",
        faq_opt_deadline: "⏱️ Délais de livraison",
        faq_opt_wp: "⚡ WordPress vs Code Personnalisé",
        faq_opt_seo: "🔍 SEO et Google",
        faq_opt_mobile: "📱 Mobile et Langues",
        faq_opt_support: "🛠️ Support et maintenance",
        price_msg: "Un site One-Page commence à partir de **350€**. Des projets plus complets avec SEO avancé et système multilingue varient entre **600€ et 1500€**. Nous offrons toujours un devis transparent. Souhaitez-vous en demander un ?",
        opt_yes_budget: "Oui, je veux un devis",
        opt_back_faq: "Retour aux questions",
        deadline_msg: "Un site One-Page est prêt en **3 à 7 jours ouvrables**. Des projets plus complexes avec plusieurs pages ou intégrations peuvent prendre **2 à 4 semaines**. Nous travaillons avec des délais définis et une communication constante.",
        wp_msg: "WordPress utilise des templates génériques avec des plugins lourds — résultat : sites lents et vulnérables. Notre code personnalisé (HTML, CSS, JavaScript) est écrit sur mesure, garantissant **vitesse maximale**, meilleure sécurité et **meilleur positionnement sur Google**.",
        seo_msg: "Oui ! Tous nos sites ont les bases du SEO technique : structure sémantique, vitesse de chargement, balises meta, Schema.org et sitemap. Pour des résultats locaux ou internationaux, nous appliquons des stratégies spécifiques.",
        mobile_msg: "Nous adoptons une approche **Mobile-First** — le design est d'abord pensé pour les petits écrans. Nous sommes également spécialistes des sites **multilingues** (PT, EN, ES, DE, FR et plus), optimisés pour le SEO international.",
        support_msg: "Oui ! Nous avons des forfaits de maintenance mensuelle avec mises à jour de contenu, surveillance des performances, sauvegardes et support technique. Le paiement est simple : **50% au début** et **50% à la livraison**. Nous acceptons les virements bancaires et MB Way.",
        target_msg: "Nous servons tout le monde : des petites entreprises locales aux industries et e-commerces.",
        support_filter_msg: "À propos du support, pour mieux comprendre :",
        opt_client: "Je suis déjà client",
        opt_new: "Je ne suis pas encore client",
        client_msg: "Parfait ! Dites-moi brièvement ce dont vous avez besoin :",
        opt_tech: "Problème technique",
        opt_content: "Modifier du contenu",
        opt_feature: "Nouvelle fonctionnalité",
        tech_contact: "Merci ! Envoyez un email à **marianakb345@gmail.com** ou utilisez WhatsApp pour les urgences.",
        content_contact: "Envoyez un email à **marianakb345@gmail.com** en indiquant les modifications.",
        feature_contact: "Décrivez la fonctionnalité sur WhatsApp ou par email pour que nous estimions le coût.",
        new_contact: "Notre équipe commerciale peut vous aider.",
        opt_whatsapp: "Parler sur WhatsApp",
        opt_understood: "Compris",
        budget_intro: "Parfait, faisons un devis rapide. Quel est le type de projet ?",
        budget_segment: "Quel est votre secteur d'activité ?",
        budget_ready: "Avez-vous des matériaux prêts (logo, textes) ?",
        budget_deadline: "Avez-vous une idée du délai ?",
        budget_value: "Quel est votre budget approximatif ?",
        budget_low: "Notre travail personnalisé commence à 350€, mais contactez-nous sur WhatsApp.",
        budget_final: "Merci ! Cliquez ci-dessous pour envoyer ce résumé sur notre WhatsApp.",
        opt_send_wa: "Envoyer par WhatsApp",

        // Budget Options
        budget_opt_web: "Site Web",
        budget_opt_landing: "Landing Page",
        budget_opt_ecom: "E-Commerce",
        budget_opt_redesign: "Refonte",
        budget_seg_services: "Services",
        budget_seg_commerce: "Commerce",
        budget_seg_health: "Santé",
        budget_seg_other: "Autre",

        budget_ans_yes: "Oui",
        budget_ans_no: "Non",
        budget_time_1m: "1 mois",
        budget_time_23m: "2-3 mois",
        budget_time_norush: "Pas pressé",

        budget_range_low: "350€ - 1.000€",
        budget_range_mid: "1.000€ - 3.000€",
        budget_range_high: "+ 3.000€",
        budget_range_micro: "< 350€",

        ask_name: "Avant de commencer, comment vous appelez-vous ?",
        wa_template: "Bonjour, je m'appelle {name} et je souhaite un devis pour : {details}"
      }
    };

    // Helper to get text safely
    const t = (key) => {
      const langData = chatI18n[currentLang] || chatI18n["pt"];
      return langData[key] || chatI18n["pt"][key] || key;
    };

    // --- CHAT DATA GENERATOR ---
    const getChatData = () => ({
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

      // If open, re-render immediately
      if (isOpen) {
        const d = getChatData();
        renderMessage(d.welcome.msg, "bot");
        renderOptions(d.welcome.options);
      }
    });
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
  initChatbot();

  // NOTE: serviços (#servicos) layout is controlled via CSS (.services__grid) to match screenshot.
})();
