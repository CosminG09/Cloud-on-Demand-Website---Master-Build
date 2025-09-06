export default function StyleTokensPage() {
    const Swatch = ({ name, className }: { name: string; className: string }) => (
      <div className="flex items-center gap-4 border border-border rounded-2xl p-4 shadow-soft-sm">
        <div className={`w-16 h-16 rounded-2xl ${className}`} />
        <div className="text-sm">
          <div className="font-medium">{name}</div>
          <div className="text-muted-foreground">{className}</div>
        </div>
      </div>
    );
  
    return (
      <main className="container mx-auto p-8 space-y-8">
        <h1 className="text-2xl font-semibold">Design Tokens (Live)</h1>
  
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Swatch name="Background" className="bg-background" />
          <Swatch name="Foreground" className="bg-foreground" />
          <Swatch name="Muted" className="bg-muted" />
          <Swatch name="Card" className="bg-card" />
          <Swatch name="Popover" className="bg-popover" />
          <Swatch name="Brand Primary" className="bg-brand-primary" />
          <Swatch name="Brand Secondary" className="bg-brand-secondary" />
          <Swatch name="Success" className="bg-success" />
          <Swatch name="Warning" className="bg-warning" />
          <Swatch name="Destructive" className="bg-destructive" />
          <Swatch name="Accent" className="bg-accent" />
        </section>
  
        <p className="text-muted-foreground">
          Toggle dark theme by setting <code>document.documentElement.dataset.theme = 'dark'</code> in console.
        </p>
      </main>
    );
  }
  