const features = [
  { icon: "◉", title: "VÄLJ DINA SPELARE", text: "Bygg ditt lag inom budget" },
  { icon: "▥", title: "SAMLA POÄNG", text: "Baserat på verklig statistik" },
  { icon: "♛", title: "UTMANA VÄNNERNA", text: "Jämför er i tabellen" },
  { icon: "☆", title: "FÖLJ SÄSONGEN", text: "Ranking, form och mycket mer" },
];

const leaders = [
  ["1", "Innebandykungen", "0 p"],
  ["2", "VärmlandsFinest", "0 p"],
  ["3", "Slapshot", "0 p"],
  ["4", "OrangePower", "0 p"],
  ["5", "ZorroFBC", "0 p"],
];

const news = [
  {
    date: "9 sep 2026",
    title: "FantasyFloorball byggs inför pilotsäsongen",
    text: "Första versionen testas i Herrar Division 2 Värmland.",
  },
  {
    date: "9 sep 2026",
    title: "Så ska poängen räknas",
    text: "Riktiga matchhändelser omvandlas till Fantasy-poäng enligt fasta regler.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FantasyFloorball startsida">
          <span className="brand-ball" aria-hidden="true">●</span>
          <span>
            <strong>FANTASY</strong>
            <b>FLOORBALL</b>
          </span>
        </a>

        <nav className="main-nav" aria-label="Huvudmeny">
          <a className="active" href="#top">Hem</a>
          <a href="#how">Mitt lag</a>
          <a href="#how">Spelare</a>
          <a href="#stats">Statistik</a>
          <a href="#league">Liga</a>
          <a href="#news">Nyheter</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-outline">Logga in</button>
          <button className="btn btn-primary">Skapa konto</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">RIKTIGA SPELARE. RIKTIGA MATCHER.</p>
          <h1>
            DITT LAG.<br />
            <span>DIN LIGA.</span>
          </h1>
          <p className="hero-text">
            FantasyFloorball är spelet där du bygger ditt eget lag av verkliga
            innebandyspelare och samlar poäng på deras prestationer i riktiga matcher.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-large">Skapa konto <span>→</span></button>
            <a className="btn btn-outline btn-large" href="#how">Så funkar det <span>→</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Grafisk innebandyillustration">
          <div className="court-lines" />
          <div className="player-shape player-one" />
          <div className="player-shape player-two" />
          <div className="stick"><span /></div>
          <div className="floorball" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, index) => <i key={index} />)}
          </div>
          <p className="scribble">MER<br />ÄN BARA<br />STATISTIK</p>
          <p className="hero-note">SPELET FÖR ALLA<br />SOM ÄLSKAR<br />INNEBANDY</p>
        </div>
      </section>

      <section className="feature-strip" id="how">
        {features.map((feature) => (
          <article key={feature.title}>
            <span className="feature-icon">{feature.icon}</span>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="dashboard-grid" id="league">
        <article className="pilot-card">
          <div className="goal-art" aria-hidden="true">
            <div className="goal-frame" />
            <div className="goal-net" />
          </div>
          <div className="pilot-copy">
            <p className="section-kicker">SÄSONG 2026/27</p>
            <h2>HERRAR DIVISION 2<br /><span>VÄRMLAND</span></h2>
            <p>
              Vi startar med en sluten pilotsäsong i Herrar Division 2 Värmland.
              Riktiga matcher. Riktig data. Riktig fantasy.
            </p>
            <button className="btn btn-outline">Läs mer om pilotsäsongen <span>→</span></button>
          </div>
        </article>

        <aside className="week-card" id="stats">
          <div className="card-heading">
            <h2>KOMMANDE MATCHVECKA</h2>
            <span>Vecka 1</span>
          </div>
          <div className="countdown">
            {[["12", "Dagar"], ["07", "Timmar"], ["24", "Minuter"], ["18", "Sekunder"]].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <button className="btn btn-outline">Se spelschema <span>→</span></button>
        </aside>

        <section className="news-card" id="news">
          <div className="card-heading">
            <h2>SENASTE NYTT</h2>
            <a href="#news">Visa alla →</a>
          </div>
          <div className="news-list">
            {news.map((item) => (
              <article key={item.title}>
                <div className="news-thumb"><span>●</span></div>
                <div>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="news-arrow">›</span>
              </article>
            ))}
          </div>
        </section>

        <aside className="leaderboard-card">
          <div className="card-heading">
            <h2>TOPPLISTA <small>(Pilot)</small></h2>
            <a href="#stats">Visa alla</a>
          </div>
          <div className="leaderboard">
            {leaders.map(([rank, name, points]) => (
              <div className="leader-row" key={rank}>
                <strong>{rank}</strong>
                <span>{name}</span>
                <b>{points}</b>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-ball" aria-hidden="true">●</span>
          <span>
            <strong>FANTASY</strong>
            <b>FLOORBALL</b>
          </span>
        </a>
        <p>En del av innebandyn.</p>
        <nav>
          <a href="#top">Om oss</a>
          <a href="#top">Integritetspolicy</a>
          <a href="#top">Villkor</a>
          <a href="#top">Kontakt</a>
        </nav>
      </footer>
    </main>
  );
}
