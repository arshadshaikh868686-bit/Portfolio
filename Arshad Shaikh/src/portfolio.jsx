import React, { useEffect, useState } from "react";


export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "journey", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {        const visible = entries.filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2, 0.4] }
    );
    sections.forEach((section) => observer.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  const copyEmail = async () => {
    const email = "arshadshaikh868686@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const navItems = [
    ["home", "Home"], ["about", "About"], ["skills", "Skills"],
    ["projects", "Projects"], ["journey", "Journey"], ["contact", "Contact"],
  ];

  const skills = [
    { name: "JavaScript", type: "LANGUAGE", level: "Core" },
    { name: "React", type: "FRONTEND", level: "Building" },
    { name: "Node.js", type: "BACKEND", level: "Building" },
    { name: "Express.js", type: "BACKEND", level: "Building" },
    { name: "MongoDB", type: "DATABASE", level: "Building" },
    { name: "REST APIs", type: "BACKEND", level: "Practice" },
    { name: "Socket.IO", type: "REAL-TIME", level: "Project use" },
    { name: "Tailwind Css", type: "FRONTEND", level: "Project use" },
    { name: "Cloudinary", type: "Cloud-Service", level: "Project use" },
    { name: "Jitsi", type: "Open Source", level: "Project use" },
    { name: "Razorpay Integration", type: "Open Source", level: "Project use" },
    { name: "", type: "Open Source", level: "Project use" },
    { name: "Git & GitHub", type: "TOOLS", level: "Workflow" },
    { name: "TypeScript", type: "LEARNING", level: "In progress" },
    { name: "SQL / PostgreSQL", type: "LEARNING", level: "In progress" },
    { name: "Next.js", type: "LEARNING", level: "In progress" },
    { name: "System Design", type: "LEARNING", level: "In progress" },
  ];

  const projects = [
    {
      number: "01", name: "Dailygram 2.0", tag: "AI-POWERED MENTORSHIP",
      description: "Dailygram is a live mentorship platform that connects college students with mentors for 1-on-1 doubt solving, coding and career guidance. Learners can discover mentors, send appointment requests, chat in real time, join video sessions and pay for sessions online. An AI study assistant helps users resolve doubts and create personalized study plans. Built with React, Node.js, Express, MongoDB, Socket.IO, Jitsi and Razorpay, with JWT authentication and Cloudinary uploads; deployed on Vercel and Railway. Used by 50+ registered users.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      link: "https://github.com/arshadshaikh868686-bit/Dailygram-2.0",
      visual: "dailygram",
    },
    {
      number: "02", name: "Shree Cars", tag: "Inventory Of Dealer",
      description: "Shree Cars is a full-stack inventory management app for car dealers. Each dealer signs up and gets a private dashboard to add, edit, search and filter cars by category (Sedan, SUV, Sports, Hatchback) and status (Available/Sold). Dealers can upload up to 5 images and documents per car, record buyer details with a photo when a car is sold, and track total, sold and remaining cars along with total sales and profit. Built with React (Vite), Node.js, Express, MongoDB, JWT, Multer and Cloudinary; deployed on Vercel and Railway.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/arshadshaikh868686-bit/Shree-Cars",
      visual: "cart",
    },
  ];

  return (
    <div className="portfolio-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');
        :root{--bg:#080a0f;--panel:#10141d;--panel2:#141a25;--line:rgba(255,255,255,.09);--text:#f4f6fb;--muted:#929bad;--lime:#c8ff5f;--cyan:#76e5ff;--purple:#b8a0ff}
        *{box-sizing:border-box} html{scroll-behavior:smooth;scroll-padding-top:88px} body{margin:0;background:var(--bg)}
        .portfolio-shell{min-height:100vh;background:radial-gradient(ellipse at 12% 4%,rgba(118,229,255,.09),transparent 34%),radial-gradient(ellipse at 86% 22%,rgba(184,160,255,.09),transparent 28%),var(--bg);color:var(--text);font-family:'Manrope',system-ui,sans-serif;overflow:hidden}
        .portfolio-shell a{color:inherit;text-decoration:none}.portfolio-shell button{font:inherit}.mono{font-family:'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.container{width:min(1160px,calc(100% - 44px));margin:auto}.topbar{position:sticky;top:0;z-index:30;border-bottom:1px solid rgba(255,255,255,.07);background:rgba(8,10,15,.78);backdrop-filter:blur(18px)}
        .nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:11px;font-weight:800;letter-spacing:-.04em}.brand-mark{display:grid;place-items:center;width:36px;height:36px;border-radius:12px;background:var(--lime);color:#10130a;font-size:18px;box-shadow:0 0 28px rgba(200,255,95,.17)}.brand small{display:block;color:var(--muted);font-size:9px;font-weight:500;letter-spacing:.16em;margin-top:2px}.nav-links{display:flex;align-items:center;gap:25px}.nav-link{font-size:12px;color:#a9b0bd;transition:color .2s}.nav-link:hover,.nav-link.active{color:var(--lime)}.nav-cta,.button-primary{display:inline-flex;align-items:center;justify-content:center;gap:10px;border:0;border-radius:999px;background:var(--lime);color:#11150a!important;padding:13px 18px;font-weight:800;font-size:12px;transition:transform .25s,box-shadow .25s}.nav-cta:hover,.button-primary:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(200,255,95,.2)}.menu-toggle{display:none;border:1px solid var(--line);color:var(--text);background:var(--panel);border-radius:12px;padding:9px 12px}
        .hero{position:relative;min-height:690px;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:40px;padding-top:68px;padding-bottom:90px}.hero:before{content:'';position:absolute;width:500px;height:500px;right:2%;top:14%;border:1px solid rgba(200,255,95,.09);border-radius:50%;box-shadow:0 0 0 55px rgba(200,255,95,.018),0 0 0 110px rgba(200,255,95,.012);pointer-events:none;animation:orbit 32s linear infinite}.eyebrow{display:flex;align-items:center;gap:10px;color:var(--lime);font-size:10px;margin-bottom:25px}.live-dot{width:7px;height:7px;background:var(--lime);border-radius:50%;box-shadow:0 0 14px var(--lime);animation:pulse 1.7s infinite}.hero h1{font-size:clamp(48px,7.3vw,91px);line-height:.99;letter-spacing:-.075em;margin:0;max-width:720px;font-weight:800}.hero h1 .outline{-webkit-text-stroke:1px rgba(244,246,251,.72);color:transparent}.hero h1 .accent{color:var(--lime)}.hero-copy{max-width:530px;color:#a5adbc;font-size:15px;line-height:1.9;margin:26px 0 28px}.hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:13px}.button-secondary{display:inline-flex;align-items:center;justify-content:center;gap:10px;border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:12px 17px;font-size:12px;font-weight:700;transition:background .2s,border .2s}.button-secondary:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.35)}.hero-meta{display:flex;flex-wrap:wrap;gap:24px;margin-top:44px;color:var(--muted);font-size:11px}.hero-meta span{display:flex;align-items:center;gap:8px}.hero-meta b{color:var(--text);font-weight:600}.hero-art{position:relative;min-height:460px;display:grid;place-items:center;perspective:900px}.orb{width:min(370px,78vw);aspect-ratio:1;border-radius:50%;position:relative;background:radial-gradient(circle at 35% 28%,#f2ffbd 0%,#c8ff5f 11%,#7dba38 26%,#2d4c28 48%,#101c1a 68%,#080a0f 75%);box-shadow:inset -25px -25px 70px #050709,0 0 85px rgba(200,255,95,.12);animation:float 7s ease-in-out infinite;transform-style:preserve-3d}.orb:before,.orb:after{content:'';position:absolute;inset:-12%;border:1px solid rgba(200,255,95,.25);border-radius:50%;transform:rotateX(68deg) rotateZ(-20deg)}.orb:after{inset:-24%;border-color:rgba(118,229,255,.18);transform:rotateX(70deg) rotateZ(55deg)}.orb-core{position:absolute;inset:22%;display:grid;place-items:center;color:#0c1307;font-size:clamp(65px,10vw,110px);font-weight:800;letter-spacing:-.12em;text-shadow:0 3px 0 rgba(255,255,255,.14)}.float-card{position:absolute;z-index:3;background:rgba(17,22,31,.84);border:1px solid rgba(255,255,255,.13);backdrop-filter:blur(15px);padding:14px 16px;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.28);animation:float 6s ease-in-out infinite}.float-card .tiny{color:var(--muted);font-size:9px;margin-bottom:7px}.float-card strong{font-size:13px}.float-card.one{left:0;top:15%;animation-delay:-2s}.float-card.two{right:-1%;bottom:15%;animation-delay:-4s}.float-card .chip{display:inline-block;background:rgba(200,255,95,.1);color:var(--lime);border-radius:6px;padding:4px 7px;font-size:9px;margin-top:8px}
        .ticker{border-block:1px solid var(--line);overflow:hidden;background:rgba(255,255,255,.018)}.ticker-track{display:flex;gap:34px;width:max-content;padding:18px 0;animation:marquee 28s linear infinite}.ticker-item{display:flex;align-items:center;gap:34px;color:#9da6b4;font-size:10px}.ticker-item b{color:var(--lime);font-size:15px}
        section{padding:105px 0}.section-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:42px}.section-kicker{color:var(--lime);font-size:10px;margin-bottom:14px}.section-title{font-size:clamp(34px,5vw,57px);line-height:1.04;letter-spacing:-.065em;margin:0;font-weight:800}.section-title .dim{color:#677080}.section-intro{max-width:370px;color:var(--muted);font-size:13px;line-height:1.8;margin:0}.about-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:18px}.about-card,.stat-card,.skill-card,.project-card,.timeline-card,.contact-panel{background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.012));border:1px solid var(--line);border-radius:24px}.about-card{padding:32px;min-height:310px;position:relative;overflow:hidden}.about-card:after{content:'“';position:absolute;right:20px;bottom:-95px;font-size:260px;color:rgba(200,255,95,.05);font-weight:800;line-height:1}.about-card h3{font-size:22px;letter-spacing:-.04em;margin:0 0 18px}.about-card p{color:#a4adbb;font-size:13px;line-height:1.95;position:relative;z-index:1}.about-label{color:var(--lime);font-size:9px;margin-bottom:26px}.stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.stat-card{padding:26px;display:flex;flex-direction:column;justify-content:space-between;min-height:145px;transition:transform .25s,border-color .25s}.stat-card:hover,.skill-card:hover,.project-card:hover{transform:translateY(-5px);border-color:rgba(200,255,95,.35)}.stat-value{font-size:34px;font-weight:800;letter-spacing:-.07em;color:var(--lime)}.stat-label{font-size:11px;color:var(--muted);line-height:1.5}.stat-symbol{font-size:22px;color:var(--cyan)}
        .skills-section{background:linear-gradient(180deg,transparent,rgba(255,255,255,.018),transparent)}.skills-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.skill-card{padding:20px;min-height:132px;transition:transform .25s,border-color .25s}.skill-type{color:var(--muted);font-size:8px;margin-bottom:24px}.skill-name{font-size:15px;font-weight:800;letter-spacing:-.035em}.skill-level{color:var(--lime);font-size:10px;margin-top:8px}
        .project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.project-card{overflow:hidden;transition:transform .25s,border-color .25s}.project-visual{height:230px;position:relative;overflow:hidden;border-bottom:1px solid var(--line);display:grid;place-items:center;background:radial-gradient(ellipse at 50% 0%,rgba(200,255,95,.12),transparent 65%),#0d1118}.project-visual.cart{background:radial-gradient(ellipse at 50% 0%,rgba(118,229,255,.14),transparent 65%),#0d1118}.project-visual.lab{background:radial-gradient(ellipse at 50% 0%,rgba(184,160,255,.16),transparent 65%),#0d1118}.mock-window{width:76%;height:72%;border:1px solid rgba(255,255,255,.17);background:rgba(10,13,19,.86);border-radius:13px;overflow:hidden;transform:rotate(-3deg);box-shadow:0 20px 50px rgba(0,0,0,.3);transition:transform .4s}.project-card:hover .mock-window{transform:rotate(0deg) scale(1.03)}.window-bar{height:24px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:5px;padding:0 10px}.window-bar i{width:5px;height:5px;background:#555d6b;border-radius:50%}.mock-content{padding:15px}.mock-top{height:8px;width:35%;background:var(--lime);border-radius:4px;margin-bottom:15px}.mock-line{height:5px;background:rgba(255,255,255,.13);border-radius:5px;width:85%;margin:8px 0}.mock-line.short{width:54%}.mock-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:17px}.mock-tiles span{height:45px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);border-radius:5px}.project-visual .floating-tag{position:absolute;right:7%;bottom:10%;background:var(--lime);color:#10140a;padding:8px 10px;border-radius:8px;font-size:9px;font-weight:800;transform:rotate(4deg)}.project-body{padding:25px}.project-meta{display:flex;justify-content:space-between;gap:10px;align-items:center;color:var(--lime);font-size:9px}.project-number{color:#6b7482}.project-body h3{font-size:24px;letter-spacing:-.055em;margin:16px 0 10px}.project-body p{font-size:12px;color:var(--muted);line-height:1.85;min-height:66px}.tag-list{display:flex;flex-wrap:wrap;gap:7px;margin:18px 0 23px}.tag{border:1px solid var(--line);border-radius:999px;padding:6px 9px;font-size:9px;color:#c5cbd4}.project-link{display:inline-flex;align-items:center;gap:9px;color:var(--lime);font-size:11px;font-weight:800}.project-link span{transition:transform .2s}.project-link:hover span{transform:translate(3px,-3px)}
        .journey-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:45px}.journey-note{color:var(--muted);font-size:13px;line-height:1.9;max-width:330px}.timeline{border-left:1px solid rgba(200,255,95,.25);padding-left:28px;display:grid;gap:20px}.timeline-card{padding:22px;position:relative}.timeline-card:before{content:'';position:absolute;width:9px;height:9px;border-radius:50%;background:var(--lime);left:-33px;top:28px;box-shadow:0 0 14px rgba(200,255,95,.35)}.timeline-date{color:var(--lime);font-size:9px;margin-bottom:10px}.timeline-card h3{font-size:16px;margin:0 0 8px}.timeline-card p{color:var(--muted);font-size:12px;line-height:1.8;margin:0}
        .contact-panel{padding:clamp(28px,6vw,64px);position:relative;overflow:hidden;background:radial-gradient(ellipse at 100% 0%,rgba(200,255,95,.1),transparent 40%),linear-gradient(145deg,#121822,#0d1017)}.contact-panel:after{content:'✳';position:absolute;right:4%;top:-65px;font-size:240px;color:rgba(200,255,95,.055);animation:orbit 35s linear infinite}.contact-panel h2{position:relative;z-index:1;font-size:clamp(38px,6vw,72px);line-height:1;letter-spacing:-.075em;max-width:740px;margin:0}.contact-panel h2 span{color:var(--lime)}.contact-panel p{position:relative;z-index:1;color:var(--muted);font-size:13px;line-height:1.8;max-width:470px;margin:22px 0 28px}.contact-actions{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:12px}.footer{padding:26px 0 34px;display:flex;justify-content:space-between;gap:20px;align-items:center;color:var(--muted);font-size:10px}.footer strong{color:var(--text)}.socials{display:flex;gap:16px}.socials a:hover{color:var(--lime)}.reveal{opacity:0;transform:translateY(24px);transition:opacity .75s ease,transform .75s cubic-bezier(.2,.75,.25,1)}.reveal.is-visible{opacity:1;transform:translateY(0)}.delay-1{transition-delay:.1s}.delay-2{transition-delay:.2s}.delay-3{transition-delay:.3s}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.75)}}@keyframes float{0%,100%{transform:translateY(0) rotateY(-7deg)}50%{transform:translateY(-13px) rotateY(7deg)}}@keyframes orbit{to{transform:rotate(360deg)}}@keyframes marquee{to{transform:translateX(-50%)}}
        @media(max-width:900px){.hero{grid-template-columns:1fr;gap:10px;padding-top:75px}.hero-art{min-height:390px;grid-row:1}.hero-copy{max-width:650px}.hero h1{max-width:850px}.hero:before{right:10%;top:4%}.about-grid,.journey-grid{grid-template-columns:1fr}.skills-grid{grid-template-columns:repeat(3,1fr)}.section-head{align-items:start;flex-direction:column}.section-intro{max-width:600px}}
        @media(max-width:650px){.container{width:min(100% - 30px,1160px)}.nav{height:66px}.menu-toggle{display:block}.nav-cta{display:none}.nav-links{display:none;position:absolute;top:66px;left:0;right:0;padding:18px 22px 22px;background:rgba(8,10,15,.97);border-bottom:1px solid var(--line);flex-direction:column;align-items:stretch;gap:0}.nav-links.open{display:flex}.nav-link{padding:13px 0;border-bottom:1px solid rgba(255,255,255,.05)}.hero{padding-top:38px;padding-bottom:65px;min-height:auto}.hero-art{min-height:320px}.orb{width:min(260px,70vw)}.float-card.one{left:0;top:12%}.float-card.two{right:0;bottom:8%}.float-card{padding:10px 12px}.hero h1{font-size:clamp(47px,14vw,72px)}.hero-copy{font-size:13px}.hero-meta{gap:13px;margin-top:30px}.hero-meta span{font-size:10px}.ticker-track{gap:22px}.ticker-item{gap:22px}section{padding:72px 0}.about-card{padding:24px;min-height:0}.stats-grid{gap:10px}.stat-card{padding:18px;min-height:125px}.stat-value{font-size:29px}.skills-grid{grid-template-columns:repeat(2,1fr);gap:10px}.skill-card{padding:16px;min-height:120px}.project-grid{grid-template-columns:1fr}.project-visual{height:210px}.project-body{padding:21px}.project-body p{min-height:0}.journey-grid{gap:20px}.timeline{padding-left:20px}.timeline-card:before{left:-25px}.contact-panel{padding:28px 22px}.contact-panel:after{font-size:150px;right:-10%;top:-35px}.footer{align-items:flex-start;flex-direction:column}.section-title{font-size:42px}}
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}.reveal{opacity:1;transform:none}}
      `}</style>

      <header className="topbar">
        <div className="container nav">
          <a href="#home" className="brand" aria-label="Go to home">
            <span>ARSHAD<small>FULL STACK DEVELOPER</small></span>
          </a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            {navItems.map(([id, label]) => <a key={id} className={`nav-link ${activeSection === id ? "active" : ""}`} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="nav-cta" href="#contact">Let's talk <span>↗</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "Close" : "Menu"}</button>
        </div>
      </header>

      <main>
        <section className="container hero" id="home">
          <div className="hero-content">
            <div className="eyebrow mono"><span className="live-dot" /> Open to opportunities · India</div>
            <h1>Building digital<br /><span className="outline">experiences</span><br />that <span className="accent">matter.</span></h1>
            <p className="hero-copy">Hey, I'm <strong>Arshad Shaikh</strong> — a Software Engineering student and aspiring Full Stack Developer. I enjoy turning ideas into useful web experiences, learning how systems work, and building products one feature at a time.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="button-secondary" href="#contact">Get in touch <span>↗</span></a>
            </div>
            <div className="hero-meta">
              <span><i className="live-dot" /> <b>Currently learning</b> TypeScript & Next.js</span>
              <span>⌁ <b>Focus</b> Full Stack Engineering</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract animated green 3D orb">
            <div className="orb"><div className="orb-core"></div></div>
            <div className="float-card one"><div className="tiny mono">CURRENT BUILD</div><strong>Dailygram 2.0</strong><div className="chip">AI + COMMUNITY</div></div>
            <div className="float-card two"><div className="tiny mono">MINDSET</div><strong>Learn. Build. Repeat.</strong><div className="chip">↗ ALWAYS IMPROVING</div></div>
          </div>
        </section>

        <div className="ticker" aria-label="Technology interests">
          <div className="ticker-track">{[0,1].map((copy) => <div className="ticker-item" key={copy}>{["REACT", "JAVASCRIPT", "NODE.JS", "EXPRESS", "MONGODB", "SOCKET.IO", "TYPESCRIPT", "NEXT.JS"].map((word) => <span key={`${copy}-${word}`}>{word} <b>✳</b></span>)}</div>)}</div>
        </div>

        <section className="container" id="about">
          <div className="section-head reveal"><div><div className="section-kicker mono">01 / A LITTLE ABOUT ME</div><h2 className="section-title">Curious by nature.<br /><span className="dim">Builder by practice.</span></h2></div><p className="section-intro">I’m focused on growing from a student who builds projects into an engineer who understands the decisions behind them.</p></div>
          <div className="about-grid">
            <article className="about-card reveal"><div className="about-label mono">THE PERSON BEHIND THE CODE</div><h3>Progress over perfection.</h3><p>I’m pursuing Software Engineering and strengthening my full-stack skills through hands-on projects. I value understanding the logic, debugging patiently, and learning from mistakes instead of just chasing a finished result.</p><p>Right now, I’m sharpening TypeScript, SQL/PostgreSQL, Next.js, DSA and System Design while improving my ability to explain the code I build.</p></article>
            <div className="stats-grid">
              <article className="stat-card reveal delay-1"><div className="stat-symbol">⌘</div><div><div className="stat-value">Full Stack</div><div className="stat-label">My core career direction</div></div></article>
              <article className="stat-card reveal delay-2"><div className="stat-symbol">✳</div><div><div className="stat-value">Build-first</div><div className="stat-label">Learn concepts by applying them</div></div></article>
              <article className="stat-card reveal delay-1"><div className="stat-symbol">↗</div><div><div className="stat-value">Dailygram</div><div className="stat-label">A key project in my journey</div></div></article>
              <article className="stat-card reveal delay-2"><div className="stat-symbol">∞</div><div><div className="stat-value">Always learning</div><div className="stat-label">One improvement at a time</div></div></article>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills"><div className="container">
          <div className="section-head reveal"><div><div className="section-kicker mono">02 / TOOLKIT</div><h2 className="section-title">Tools I use.<br /><span className="dim">Skills I’m growing.</span></h2></div><p className="section-intro">A snapshot of my current stack and the technologies I’m actively learning. Skill labels are intentionally honest—no inflated proficiency claims.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <article className={`skill-card reveal delay-${index % 3 + 1}`} key={skill.name}><div className="skill-type mono">{skill.type}</div><div className="skill-name">{skill.name}</div><div className="skill-level">↗ {skill.level}</div></article>)}</div>
        </div></section>

        <section className="container" id="projects">
          <div className="section-head reveal"><div><div className="section-kicker mono">03 / SELECTED WORK</div><h2 className="section-title">Ideas turned into<br /><span className="dim">real projects.</span></h2></div><p className="section-intro">A work in progress is still progress. Explore the projects I’m building and the skills each one helps me develop.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card reveal delay-${index % 2 + 1}`} key={project.number}>
            <div className={`project-visual ${project.visual}`}><div className="mock-window"><div className="window-bar"><i/><i/><i/></div><div className="mock-content"><div className="mock-top" style={{ background: project.visual === "cart" ? "var(--cyan)" : project.visual === "lab" ? "var(--purple)" : "var(--lime)" }}/><div className="mock-line"/><div className="mock-line short"/><div className="mock-tiles"><span/><span/><span/></div></div></div><div className="floating-tag">{project.number} / SELECTED</div></div>
            <div className="project-body"><div className="project-meta mono"><span>{project.tag}</span><span className="project-number">{project.number}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div><a className="project-link" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{project.number === "01" ? "View source code" : project.number === "02" ? "Project details" : "View learning focus"} <span>↗</span></a></div>
          </article>)}</div>
        </section>

        <section className="container" id="journey"><div className="journey-grid">
          <div className="reveal"><div className="section-kicker mono">04 / THE ROAD AHEAD</div><h2 className="section-title">The journey<br /><span className="dim">is the work.</span></h2><p className="journey-note">I’m following a structured learning plan: understand the fundamentals, build with them, revisit what’s weak, and practise explaining my decisions clearly.</p></div>
          <div className="timeline">
            <article className="timeline-card reveal"><div className="timeline-date mono">FOUNDATION</div><h3>Strengthen the fundamentals</h3><p>JavaScript, React, Node.js, Express, APIs and databases—focusing on understanding the flow, not just making the code run.</p></article>
            <article className="timeline-card reveal delay-1"><div className="timeline-date mono">CURRENT LEARNING</div><h3>TypeScript · SQL · Next.js</h3><p>Build stronger typing habits, write meaningful queries and learn modern full-stack application patterns through small working features.</p></article>
            <article className="timeline-card reveal delay-2"><div className="timeline-date mono">NEXT MILESTONE</div><h3>Projects and interview readiness</h3><p>Improve project quality, practise DSA, learn System Design fundamentals and become more confident explaining trade-offs and debugging.</p></article>
          </div>
        </div></section>

        <section className="container" id="contact"><div className="contact-panel reveal"><div className="section-kicker mono">05 / LET'S CONNECT</div><h2>Have a good idea?<br />Let's make it <span>real.</span></h2><p>I’m interested in connecting with developers, learning from feedback, collaborating on useful products and exploring suitable entry-level opportunities.</p><div className="contact-actions"><button className="button-primary" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email address ↗"}</button><a className="button-secondary" href="https://github.com/arshadshaikh868686-bit/Dailygram-2.0" target="_blank" rel="noreferrer">GitHub profile <span>↗</span></a><a className="button-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div></section>
      </main>

      <footer className="container footer"><div>© {new Date().getFullYear()} <strong>Arshad Shaikh</strong>. Built with curiosity & code.</div><div className="socials"><a href="#home">Back to top ↑</a><a href="https://github.com/arshadshaikh868686-bit/Dailygram-2.0" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </div>
  );
}
