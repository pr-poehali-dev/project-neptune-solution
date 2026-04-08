import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "15:00",
    title: "Сбор гостей",
    description:
      "Добро пожаловать в усадьбу «Белый сад». Лёгкие закуски, живая арфа и время для неспешного общения перед началом церемонии.",
  },
  {
    number: "15:30",
    title: "Церемония",
    description:
      "Торжественная роспись в садовой беседке. Просим занять места за 10 минут до начала. Пожалуйста, выключите звук на телефонах.",
  },
  {
    number: "17:00",
    title: "Коктейльный час",
    description:
      "Фотосессия молодожёнов. Для гостей — аперитивы на террасе, живая музыка и возможность оставить пожелания в книге памяти.",
  },
  {
    number: "18:30",
    title: "Праздничный ужин",
    description:
      "Торжественный банкет в оранжерее. Авторское меню, тосты, танцы и вечер, который мы будем вспоминать всю жизнь.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="schedule" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                14 июня 2025
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Программа
                <span className="italic"> дня</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Мы продумали каждую деталь, чтобы этот день был лёгким и радостным — для нас и для вас.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-2xl lg:text-3xl text-stone/50 group-hover:text-sage transition-colors duration-500 pt-1 min-w-[4rem]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
