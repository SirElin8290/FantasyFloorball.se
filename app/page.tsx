"use client";

import { useRef, useState } from "react";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Unmodified regions of the approved artwork, scaled without generating new images. */
function Artwork({
  box,
  className = "",
  label,
}: {
  box: string;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      className={`artwork ${className}`}
      viewBox={box}
      preserveAspectRatio="none"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <image href={`${base}/approved-mockup.png`} width="1024" height="1536" />
    </svg>
  );
}
function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Fantasy Floorball – startsida">
      <Artwork box="34 14 185 48" />
    </a>
  );
}
const matches = [
  {
    day: "Lör 20 sep",
    time: "16:00",
    home: "Karlstad IBF",
    away: "Skoghall IBK",
    y: 686,
  },
  {
    day: "Lör 20 sep",
    time: "17:00",
    home: "Arvika IBF",
    away: "Grums IBK",
    y: 736,
  },
  {
    day: "Sön 21 sep",
    time: "16:00",
    home: "Kil IBK",
    away: "Hammarö IBK",
    y: 786,
  },
  {
    day: "Sön 21 sep",
    time: "17:00",
    home: "Nordmarkens IBF",
    away: "Kristinehamns IBK",
    y: 836,
  },
];
const leaders = [
  ["InnebandyKungen", 248],
  ["Värmlandslirarn", 232],
  ["Klubbdoktorn", 228],
  ["FloorballFan", 221],
  ["Taktikern", 217],
] as const;
const news = [
  {
    date: "12 sep 2026",
    title: "Fantasy Floorball lanseras för Division 2 Värmland",
    text: "Nu är det klart – vi startar pilotsäsongen 2026/27!",
    box: "527 960 135 83",
  },
  {
    date: "10 sep 2026",
    title: "Så fungerar poängsystemet",
    text: "Vi går igenom hur du samlar poäng i Fantasy Floorball.",
    box: "527 1061 135 79",
  },
  {
    date: "8 sep 2026",
    title: "Intervju: ”Det här kommer lyfta innebandyn i Värmland”",
    text: "Vi pratade med flera tränare om satsningen.",
    box: "527 1155 135 81",
  },
];
const info = {
  account: [
    "Var med från start",
    "Fantasy Floorball förbereds för pilotsäsongen 2026/27 i Herrar Division 2 Värmland. Registreringen är inte öppen ännu. Här kommer du att kunna skapa ditt konto när piloten öppnar.",
  ],
  login: [
    "Logga in",
    "Inloggningen öppnar när pilotsäsongen är redo. Den här startsidan är en förhandsvisning av Fantasy Floorball.",
  ],
  points: [
    "Så fungerar poängsystemet",
    "Bygg ditt lag med spelare från Herrar Division 2 Värmland. Spelarnas prestationer i riktiga matcher ger ditt lag fantasy-poäng. Fullständiga poängregler publiceras inför pilotstarten.",
  ],
  matches: [
    "Kommande matcher",
    "Matchlistan visar exempeldata för att förhandsvisa sidan. Det officiella spelschemat för pilotsäsongen 2026/27 publiceras inför starten.",
  ],
  leaders: [
    "Topplistan",
    "Managers och poäng i topplistan är exempeldata. Den riktiga topplistan öppnar när pilotsäsongen börjar.",
  ],
  about: [
    "Om Fantasy Floorball",
    "Samma passion. Nytt spel. Fantasy Floorball är ett fantasyspel för svensk innebandy. Vi börjar lokalt med Herrar Division 2 Värmland säsongen 2026/27.",
  ],
  contact: ["Kontakta oss", "Kontaktuppgifter publiceras inför pilotstarten."],
  terms: [
    "Regler & villkor",
    "Fullständiga spelregler och användarvillkor publiceras innan registreringen öppnar.",
  ],
  privacy: [
    "Integritetspolicy",
    "Startsidan har inget registreringsformulär, ingen analysmätning och lagrar inga kontouppgifter. Integritetspolicyn för själva spelet publiceras innan registreringen öppnar.",
  ],
} as const;
type InfoKey = keyof typeof info;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<readonly [string, string]>(
    info.account,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  function show(key: InfoKey) {
    setDialogContent(info[key]);
    dialog.current?.showModal();
    setMenuOpen(false);
  }
  function showNews(index: number) {
    const item = news[index];
    setDialogContent([
      item.title,
      `${item.text} Detta är en förhandsvisning; hela artikeln publiceras inför pilotstarten.`,
    ]);
    dialog.current?.showModal();
  }
  const accountButton = () => (
    <button className="orange-btn" onClick={() => show("account")}>
      Skapa konto <span aria-hidden="true">›</span>
    </button>
  );
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">
        Hoppa till innehållet
      </a>
      <header className="topbar">
        <Logo />
        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          id="main-menu"
          aria-label="Huvudmeny"
        >
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>
            Hem
          </a>
          <a href="#how" onClick={() => setMenuOpen(false)}>
            Så funkar det
          </a>
          <button onClick={() => show("points")}>Poängsystem</button>
          <a href="#league" onClick={() => setMenuOpen(false)}>
            Ligor
          </a>
          <a href="#news" onClick={() => setMenuOpen(false)}>
            Nyheter
          </a>
          <button onClick={() => show("about")}>Om oss</button>
          <button className="mobile-login" onClick={() => show("login")}>
            Logga in
          </button>
        </nav>
        <div className="top-actions">
          <button className="ghost-btn" onClick={() => show("login")}>
            Logga in
          </button>
          {accountButton()}
        </div>
        <button
          className="menu-toggle ghost-btn"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Stäng" : "Meny"}
        </button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              <span className="sr-only">DITT LAG. DIN LIGA.</span>
              <Artwork box="40 116 368 171" />
            </h1>
            <p>
              <span>Fantasy Floorball är spelet för dig som lever</span>{" "}
              <span>för innebandy. Bygg ditt lag, samla poäng</span>{" "}
              <span>och tävla mot vänner, kollegor och hela</span>{" "}
              <span>Värmland.</span>
            </p>
            <div className="hero-actions">
              {accountButton()}
              <a className="ghost-btn" href="#how">
                <span className="play" aria-hidden="true">
                  ▶
                </span>
                Så funkar det
              </a>
            </div>
          </div>
          <div className="hero-media">
            <Artwork
              box="405 72 619 410"
              label="Innebandyspelarnas ben och skor, en svart och en vit klubba runt en perforerad innebandyboll. Samma passion. Nytt spel."
            />
          </div>
        </section>
        <section
          className="feature-row"
          id="how"
          aria-label="Så funkar Fantasy Floorball"
        >
          <article>
            <Artwork box="44 506 56 39" />
            <div>
              <h2>BYGG DITT LAG</h2>
              <p>Välj spelare från riktiga lag i Division 2 Värmland.</p>
            </div>
          </article>
          <article>
            <Artwork box="298 506 39 39" />
            <div>
              <h2>SAMLA POÄNG</h2>
              <p>
                Riktiga prestationer
                <br />
                ger riktiga poäng.
              </p>
            </div>
          </article>
          <article>
            <Artwork box="529 505 43 41" />
            <div>
              <h2>TÄVLA MED ANDRA</h2>
              <p>
                Skapa eller gå med i ligor med vänner, kollegor eller klubben.
              </p>
            </div>
          </article>
          <article>
            <Artwork box="791 505 43 41" />
            <div>
              <h2>FÖLJ HELA SÄSONGEN</h2>
              <p>Matcher, resultat och topplistor – allt på ett ställe.</p>
            </div>
          </article>
        </section>
        <div className="content-grid">
          <section
            className="panel pilot-panel"
            id="league"
            aria-labelledby="pilot-title"
          >
            <Artwork className="varmland-map" box="25 640 133 236" />
            <div className="pilot-copy">
              <p className="orange-kicker">PILOTSÄSONG 2026/27</p>
              <h2 id="pilot-title">
                HERRAR DIVISION 2<br />
                VÄRMLAND
              </h2>
              <p>
                Vi startar med Herrar Division 2 Värmland säsongen 2026/27.
                Lokalt engagemang, riktiga matcher och riktig innebandy.
              </p>
              <Artwork className="paint-stroke" box="164 848 248 23" />
            </div>
          </section>
          <section
            className="panel match-panel"
            aria-labelledby="matches-title"
          >
            <div className="panel-head">
              <h2 id="matches-title">KOMMANDE MATCHVECKA</h2>
              <button className="text-link" onClick={() => show("matches")}>
                Visa alla matcher <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="match-list" aria-label="Exempel på matchvecka">
              {matches.map((m) => (
                <div className="match-row" key={m.home}>
                  <div className="match-time">
                    {m.day}
                    <br />
                    {m.time}
                  </div>
                  <div className="team">
                    <Artwork box={`617 ${m.y} 25 30`} />
                    <span>{m.home}</span>
                  </div>
                  <span className="match-dash">-</span>
                  <div className="team">
                    <Artwork box={`800 ${m.y} 29 30`} />
                    <span>{m.away}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section
            className="panel leaderboard-panel"
            aria-labelledby="leaders-title"
          >
            <div className="panel-head">
              <h2 id="leaders-title">TOPPLISTA</h2>
              <span className="score-label">
                Totalpoäng <span aria-hidden="true">⌄</span>
              </span>
            </div>
            <ol className="leader-list" aria-label="Exempel på topplista">
              {leaders.map(([name, points], index) => (
                <li className="leader-row" key={name}>
                  <span className={`rank r${index + 1}`}>{index + 1}</span>
                  <Artwork
                    className="avatar"
                    box={`93 ${963 + index * 45} 35 35`}
                  />
                  <span>{name}</span>
                  <strong>{points} p</strong>
                </li>
              ))}
            </ol>
            <button className="wide-btn" onClick={() => show("leaders")}>
              Visa hela topplistan <span aria-hidden="true">→</span>
            </button>
          </section>
          <section
            className="panel news-panel"
            id="news"
            aria-labelledby="news-title"
          >
            <div className="panel-head">
              <h2 id="news-title">SENASTE NYTT</h2>
              <button
                className="text-link"
                onClick={() => {
                  setDialogContent([
                    "Senaste nytt",
                    "Nyheterna visar exempel på innehåll inför pilotsäsongen. Fler nyheter publiceras när starten närmar sig.",
                  ]);
                  dialog.current?.showModal();
                }}
              >
                Visa alla nyheter <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="news-list">
              {news.map((item, index) => (
                <article key={item.title}>
                  <button
                    className="news-image"
                    onClick={() => showNews(index)}
                    aria-label={item.title}
                  >
                    <Artwork box={item.box} />
                  </button>
                  <div>
                    <time
                      dateTime={`2026-09-${index === 0 ? "12" : index === 1 ? "10" : "08"}`}
                    >
                      {item.date}
                    </time>
                    <h3>
                      <button onClick={() => showNews(index)}>
                        {item.title}
                      </button>
                    </h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
        <section className="cta-band" aria-labelledby="cta-title">
          <Artwork className="cta-texture" box="405 1277 309 66" />
          <div className="cta-text">
            <h2 id="cta-title">
              <span className="sr-only">ÄR DU INNE?</span>
              <Artwork box="46 1287 342 78" />
            </h2>
            <p>Skapa ditt lag redan idag och var med från start.</p>
          </div>
          {accountButton()}
          <Artwork className="cta-ball" box="934 1254 90 127" />
        </section>
      </main>
      <footer>
        <div className="footer-main">
          <Logo />
          <nav aria-label="Sidfotsmeny">
            <button onClick={() => show("about")}>Om oss</button>
            <button onClick={() => show("contact")}>Kontakta oss</button>
            <button onClick={() => show("terms")}>Regler & villkor</button>
            <button onClick={() => show("privacy")}>Integritetspolicy</button>
          </nav>
          <div
            className="socials"
            aria-label="Sociala kanaler öppnar inför pilotstarten"
          >
            <Artwork box="879 1420 109 25" />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 FantasyFloorball.se</span>
          <strong>Samma passion. Nytt spel.</strong>
        </div>
      </footer>
      <dialog
        ref={dialog}
        aria-labelledby="dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close ghost-btn"
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label="Stäng dialog"
        >
          ✕
        </button>
        <p className="orange-kicker">FANTASY FLOORBALL</p>
        <h2 id="dialog-title">{dialogContent[0]}</h2>
        <p>{dialogContent[1]}</p>
        <button className="orange-btn" onClick={() => dialog.current?.close()}>
          Tillbaka till startsidan
        </button>
      </dialog>
    </div>
  );
}
