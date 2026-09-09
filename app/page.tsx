const matches = [
  ["Lör 20 sep", "16:00", "Karlstad IBF", "Skoghall IBK", "K", "S"],
  ["Lör 20 sep", "17:00", "Arvika IBF", "Grums IBK", "A", "G"],
  ["Sön 21 sep", "16:00", "Kil IBK", "Hammarö IBK", "K", "H"],
  ["Sön 21 sep", "17:00", "Nordmarkens IBF", "Kristinehamns IBK", "N", "K"],
];

const leaders = [
  ["1", "InnebandyKungen", "248 p"],
  ["2", "Värmlandslirarn", "232 p"],
  ["3", "Klubbdoktorn", "228 p"],
  ["4", "FloorballFan", "221 p"],
  ["5", "Taktikern", "217 p"],
];

const news = [
  ["12 sep 2026", "Fantasy Floorball lanseras för Division 2 Värmland", "Nu är det klart – vi startar pilotsäsongen 2026/27!", "ball"],
  ["10 sep 2026", "Så fungerar poängsystemet", "Vi går igenom hur du samlar poäng i Fantasy Floorball.", "board"],
  ["8 sep 2026", "Intervju: ”Det här kommer lyfta innebandyn i Värmland”", "Vi pratade med flera tränare om satsningen.", "interview"],
];

function FloorballHeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 760 560" role="img" aria-label="Två innebandyspelare med klubbor och boll">
      <defs>
        <linearGradient id="bg" x1="0" x2="1"><stop offset="0" stopColor="#131313"/><stop offset=".55" stopColor="#222"/><stop offset="1" stopColor="#050505"/></linearGradient>
        <linearGradient id="skin" x1="0" x2="1"><stop offset="0" stopColor="#5e2d17"/><stop offset=".5" stopColor="#b66b3f"/><stop offset="1" stopColor="#3d1d11"/></linearGradient>
        <linearGradient id="sock" x1="0" x2="1"><stop offset="0" stopColor="#bcbcbc"/><stop offset=".55" stopColor="#f4f4f4"/><stop offset="1" stopColor="#868686"/></linearGradient>
        <linearGradient id="blackSock" x1="0" x2="1"><stop offset="0" stopColor="#050505"/><stop offset=".5" stopColor="#222"/><stop offset="1" stopColor="#090909"/></linearGradient>
        <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#000" floodOpacity=".9"/></filter>
      </defs>
      <rect width="760" height="560" fill="url(#bg)"/>
      <ellipse cx="390" cy="492" rx="320" ry="30" fill="#000" opacity=".75"/>
      <g opacity=".22" stroke="#fff" strokeWidth="2"><path d="M0 455 C170 430 300 448 760 430"/><path d="M80 505 C300 470 470 485 720 470"/></g>
      <g filter="url(#shadow)">
        <path d="M295 -20 C300 70 325 115 350 170 L318 290 L245 290 L245 145 C228 92 222 40 230 -20Z" fill="url(#skin)"/>
        <rect x="238" y="185" width="92" height="210" rx="34" fill="url(#blackSock)"/>
        <path d="M236 374 C246 356 274 350 307 359 L348 387 C362 398 357 418 339 423 L226 430 C199 428 194 408 210 392Z" fill="#171717" stroke="#414141" strokeWidth="5"/>
        <path d="M219 409 C261 400 308 402 346 410" stroke="#ff6900" strokeWidth="6"/>
        <path d="M520 -20 C514 61 499 115 472 177 L480 292 L568 292 L590 145 C609 93 618 41 612 -20Z" fill="url(#skin)"/>
        <path d="M474 176 C486 165 573 165 587 179 L568 390 C545 402 502 401 480 388Z" fill="url(#sock)"/>
        <path d="M472 366 C500 350 545 348 575 363 L626 397 C645 410 635 435 610 438 L464 438 C438 436 429 411 450 395Z" fill="#e8e8e8" stroke="#979797" strokeWidth="5"/>
        <path d="M458 407 C502 396 562 399 617 415" stroke="#ff6900" strokeWidth="6"/>
      </g>
      <g strokeLinecap="round">
        <path d="M335 70 L492 410" stroke="#9c9c9c" strokeWidth="9"/><path d="M336 70 L492 410" stroke="#1b1b1b" strokeWidth="4"/>
        <path d="M492 410 C526 401 550 406 567 424 C540 448 500 454 466 445Z" fill="none" stroke="#ff6900" strokeWidth="12"/>
        <g stroke="#ff6900" strokeWidth="3"><path d="M486 417 L548 436"/><path d="M481 429 L535 447"/><path d="M501 410 L488 446"/><path d="M522 409 L510 450"/><path d="M543 415 L531 447"/></g>
        <path d="M589 95 L545 409" stroke="#d0d0d0" strokeWidth="8"/><path d="M589 95 L545 409" stroke="#272727" strokeWidth="4"/>
        <path d="M546 408 C583 404 616 414 638 435 C608 458 566 462 526 450Z" fill="none" stroke="#efefef" strokeWidth="12"/>
        <g stroke="#b9b9b9" strokeWidth="3"><path d="M544 418 L620 444"/><path d="M539 431 L604 454"/><path d="M559 410 L546 452"/><path d="M583 412 L570 456"/><path d="M607 420 L593 455"/></g>
      </g>
      <g transform="translate(470 438)"><circle r="38" fill="#f1f1ee" stroke="#a7a7a7" strokeWidth="3"/><g fill="#555"><circle cx="-11" cy="-17" r="5"/><circle cx="11" cy="-20" r="5"/><circle cx="21" cy="-3" r="5"/><circle cx="11" cy="15" r="5"/><circle cx="-12" cy="17" r="5"/><circle cx="-23" cy="0" r="5"/><circle cx="0" cy="-1" r="5"/></g></g>
    </svg>
  );
}

function MarkIcon({ type }: { type: "team" | "points" | "league" | "season" }) {
  if (type === "points") return <span className="bars-icon"><i/><i/><i/></span>;
  if (type === "league") return <span className="trophy-icon">♛</span>;
  if (type === "season") return <span className="star-icon">☆</span>;
  return <span className="people-icon">●●●</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="logo" href="#top" aria-label="Fantasy Floorball startsida"><span className="logo-ball">●</span><span><b>FANTASY</b><strong>FLOORBALL</strong></span></a>
        <nav className="nav-links" aria-label="Huvudmeny"><a className="active" href="#top">Hem</a><a href="#how">Så funkar det</a><a href="#points">Poängsystem</a><a href="#league">Ligor</a><a href="#news">Nyheter</a><a href="#about">Om oss</a></nav>
        <div className="top-actions"><button className="ghost-btn">Logga in</button><button className="orange-btn">Skapa konto</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1><span>DITT LAG.</span><strong>DIN LIGA.</strong></h1>
          <p>Fantasy Floorball är spelet för dig som lever för innebandy. Bygg ditt lag, samla poäng och tävla mot vänner, kollegor och hela Värmland.</p>
          <div className="hero-actions"><button className="orange-btn large">Skapa konto <span>›</span></button><a className="ghost-btn large" href="#how"><span className="play">▶</span> Så funkar det</a></div>
        </div>
        <div className="hero-media"><FloorballHeroArt /><div className="hero-tag">SAMMA<br/>PASSION.<br/><b>NYTT SPEL.</b><i/></div></div>
      </section>

      <section className="feature-row" id="how">
        <article><MarkIcon type="team"/><div><h2>BYGG DITT LAG</h2><p>Välj spelare från riktiga lag i Division 2 Värmland.</p></div></article>
        <article><MarkIcon type="points"/><div><h2>SAMLA POÄNG</h2><p>Riktiga prestationer ger riktiga poäng.</p></div></article>
        <article><MarkIcon type="league"/><div><h2>TÄVLA MED ANDRA</h2><p>Skapa eller gå med i ligor med vänner, kollegor eller klubben.</p></div></article>
        <article><MarkIcon type="season"/><div><h2>FÖLJ HELA SÄSONGEN</h2><p>Matcher, resultat och topplistor – allt på ett ställe.</p></div></article>
      </section>

      <section className="content-grid" id="league">
        <article className="panel pilot-panel"><div className="varmland-map" aria-hidden="true"><svg viewBox="0 0 180 280"><path d="M79 6 109 25 126 58 119 88 141 110 126 139 147 163 125 192 131 225 106 247 88 274 57 259 46 224 25 201 35 168 19 145 36 118 30 86 51 61 55 29Z" fill="#16191b" stroke="#4a4d4e" strokeWidth="2"/><path d="M58 62 79 49 101 63 109 93 94 119 111 145 98 173 103 203 83 221 57 203 48 173 58 148 45 123 55 101Z" fill="#ff6900" opacity=".7"/><path d="M54 27 60 260M82 14 87 270M36 85 126 145M30 168 125 191" stroke="#808080" opacity=".25"/></svg></div><div className="pilot-copy"><p className="orange-kicker">PILOTSÄSONG 2026/27</p><h2>HERRAR DIVISION 2<br/>VÄRMLAND</h2><p>Vi startar med Herrar Division 2 Värmland säsongen 2026/27. Lokalt engagemang, riktiga matcher och riktig innebandy.</p><span className="paint-stroke"/></div></article>

        <article className="panel match-panel"><div className="panel-head"><h2>KOMMANDE MATCHVECKA</h2><a href="#">Visa alla matcher →</a></div><div className="match-list">{matches.map(([d,t,h,a,hi,ai]) => <div className="match-row" key={d+t+h}><div className="match-time"><span>{d}</span><b>{t}</b></div><div className="team"><i className="crest">{hi}</i>{h}</div><strong>-</strong><div className="team"><i className="crest alt">{ai}</i>{a}</div></div>)}</div></article>

        <article className="panel leaderboard-panel" id="points"><div className="panel-head"><h2>TOPPLISTA</h2><button className="select-btn">Totalpoäng⌄</button></div><div className="leader-list">{leaders.map(([rank,name,points]) => <div className="leader-row" key={rank}><span className={`rank r${rank}`}>{rank}</span><span className="avatar">●</span><span>{name}</span><strong>{points}</strong></div>)}</div><button className="wide-btn">Visa hela topplistan →</button></article>

        <article className="panel news-panel" id="news"><div className="panel-head"><h2>SENASTE NYTT</h2><a href="#">Visa alla nyheter →</a></div><div className="news-list">{news.map(([date,title,text,type]) => <article key={title}><div className={`news-image ${type}`}><span>{type === "ball" ? "●" : type === "board" ? "⌗" : "◐"}</span></div><div><time>{date}</time><h3>{title}</h3><p>{text}</p></div></article>)}</div></article>
      </section>

      <section className="cta-band"><div><h2>ÄR DU INNE?</h2><p>Skapa ditt lag redan idag och var med från start.</p></div><button className="orange-btn large">Skapa konto <span>›</span></button><div className="cta-ball" aria-hidden="true">●</div></section>

      <footer id="about"><div className="footer-main"><a className="logo" href="#top"><span className="logo-ball">●</span><span><b>FANTASY</b><strong>FLOORBALL</strong></span></a><nav><a href="#about">Om oss</a><a href="#about">Kontakta oss</a><a href="#about">Regler & villkor</a><a href="#about">Integritetspolicy</a></nav><div className="socials"><span>◎</span><span>●</span><span>▶</span></div></div><div className="footer-bottom"><span>© 2026 FantasyFloorball.se</span><strong>Samma passion. Nytt spel.</strong></div></footer>
    </main>
  );
}
