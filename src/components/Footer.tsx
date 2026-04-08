export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">А &amp; М</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Александр и Мария. 14 июня 2025.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#story" className="text-sm text-foreground hover:text-sage transition-colors">
                Наша история
              </a>
              <a href="#details" className="text-sm text-foreground hover:text-sage transition-colors">
                Детали
              </a>
              <a href="#schedule" className="text-sm text-foreground hover:text-sage transition-colors">
                Программа
              </a>
              <a href="#rsvp" className="text-sm text-foreground hover:text-sage transition-colors">
                RSVP
              </a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Контакты</p>
            <nav className="flex flex-col gap-3">
              <a href="mailto:hello@example.com" className="text-sm text-foreground hover:text-sage transition-colors">
                Написать нам
              </a>
              <a href="tel:+79001234567" className="text-sm text-foreground hover:text-sage transition-colors">
                +7 (900) 123-45-67
              </a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Локация</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                На карте
              </a>
              <a href="#details" className="text-sm text-foreground hover:text-sage transition-colors">
                Как добраться
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Александр &amp; Мария. Создано с любовью.
          </p>
          <p className="text-xs text-muted-foreground">14 · 06 · 2025</p>
        </div>
      </div>
    </footer>
  )
}
