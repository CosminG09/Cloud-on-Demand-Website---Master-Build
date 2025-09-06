export default function TypographyLab() {
    return (
      <main className="container mx-auto py-18 space-y-10">
        <section>
          <h1>Platformă modernă pentru IMM-uri</h1>
          <p className="lead">
            Modernizăm operațiunile cu Microsoft 365, Power Platform și Dynamics 365 — rapid, sigur și scalabil.
          </p>
        </section>
  
        <section className="prose max-w-[70ch]">
          <h2>Beneficii cheie</h2>
          <p>
            Într-o piață dinamică, timpul până la valoare contează. Aducem guvernanță, licențiere corectă și implementare rapidă.
          </p>
          <h3>Ce livrăm</h3>
          <ul>
            <li>Adopție Microsoft 365 cu bune practici</li>
            <li>Automatizări cu Power Platform</li>
            <li>Procese comerciale în Dynamics 365</li>
          </ul>
          <p><a href="#" className="no-underline">Află mai multe</a> despre pachetele noastre.</p>
        </section>
  
        <section>
          <h2>Scară tipografică</h2>
          <div className="grid gap-4">
            <div className="text-display-1 font-display">Display 1 (H1)</div>
            <div className="text-display-2 font-display">Display 2 (H2)</div>
            <div className="text-h3 font-semibold">Heading 3</div>
            <div className="text-h4 font-semibold">Heading 4</div>
            <div className="text-body">Body text 16px</div>
            <div className="text-body-lg">Body large 18px</div>
            <div className="text-small text-muted-foreground">Small caption</div>
          </div>
        </section>
      </main>
    );
  }
  