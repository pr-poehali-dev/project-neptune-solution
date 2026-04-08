import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    attendance: "",
    guests: "",
    dietary: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="rsvp" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Подтверждение участия
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Будете с нами?
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Пожалуйста, подтвердите своё участие до 1 мая 2025 года. Это поможет нам подготовить всё
              с любовью и вниманием к каждому гостю.
            </p>

            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Место</p>
                <p className="text-foreground">Усадьба «Белый сад», Подмосковье</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Вопросы</p>
                <a href="mailto:hello@example.com" className="text-foreground hover:text-sage transition-colors">
                  hello@example.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Телефон</p>
                <a href="tel:+79001234567" className="text-foreground hover:text-sage transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-6">
                <p className="font-serif text-4xl text-sage">Спасибо!</p>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Мы получили ваш ответ и очень рады, что вы будете с нами в этот особенный день.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Имя и фамилия"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Приду на свадьбу
                  </label>
                  <div className="flex gap-6">
                    {["Да, обязательно!", "К сожалению, нет"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="attendance"
                          value={option}
                          checked={formState.attendance === option}
                          onChange={(e) => setFormState({ ...formState, attendance: e.target.value })}
                          className="w-4 h-4 accent-sage"
                          required
                        />
                        <span className="text-sm text-foreground group-hover:text-sage transition-colors">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Количество гостей (включая вас)
                  </label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    max="5"
                    value={formState.guests}
                    onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="1"
                  />
                </div>
                <div>
                  <label htmlFor="dietary" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Пожелания к меню
                  </label>
                  <input
                    type="text"
                    id="dietary"
                    value={formState.dietary}
                    onChange={(e) => setFormState({ ...formState, dietary: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Вегетарианское, аллергии..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  Отправить ответ
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
