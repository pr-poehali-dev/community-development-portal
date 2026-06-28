import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/d6d9ffc9-0672-41f4-a545-14576978093a/files/6f9012b1-b9f6-437e-83a9-803e0af6e6b1.jpg';

const NAV = [
  { id: 'lectures', label: 'Лекции' },
  { id: 'mission', label: 'Миссия' },
  { id: 'calendar', label: 'Календарь' },
  { id: 'speaker', label: 'Стать лектором' },
  { id: 'merch', label: 'Мерч' },
  { id: 'contacts', label: 'Контакты' },
];

const TOPICS = [
  'КИНО',
  'ИСТОРИЯ ГОСУДАРСТВ',
  'ФИЛОСОФИЯ',
  'АРХИТЕКТУРА',
  'МУЗЫКА',
  'ПСИХОЛОГИЯ',
  'ЛИТЕРАТУРА',
  'НАУКА',
  'ИСКУССТВО',
];

const UPCOMING = [
  {
    date: '12 ИЮЛ',
    title: 'Тёмная эстетика нуара: как тень рассказывает историю',
    topic: 'Кино',
    place: 'Лофт «Ткачи», наб. Обводного канала',
    time: '19:30',
  },
  {
    date: '19 ИЮЛ',
    title: 'Венеция: республика, которая придумала будущее',
    topic: 'История',
    place: 'Особняк на Английской набережной',
    time: '18:00',
  },
  {
    date: '26 ИЮЛ',
    title: 'Звук тишины: минимализм в музыке XX века',
    topic: 'Музыка',
    place: 'Дворик Новой Голландии',
    time: '20:00',
  },
];

const PAST = [
  { title: 'Бергман и метафизика молчания', topic: 'Кино', place: 'Севкабель Порт' },
  { title: 'Византия: тысяча лет, о которых забыли', topic: 'История', place: 'Библиотека Маяковского' },
  { title: 'Брутализм: красота бетона', topic: 'Архитектура', place: 'Лофт «Этажи»' },
];

const VALUES = [
  {
    icon: 'Compass',
    title: 'Любопытство',
    text: 'Мы верим, что вопрос ценнее готового ответа. Каждая лекция — приглашение думать иначе.',
  },
  {
    icon: 'Users',
    title: 'Свобода',
    text: 'Никаких рамок и догм. Здесь говорят на равных — лектор и слушатель ищут истину вместе.',
  },
  {
    icon: 'Sparkles',
    title: 'Глубина',
    text: 'От кино до истории государств — мы соединяем темы, чтобы видеть мир объёмно.',
  },
];

function RegisterDialog({
  trigger,
  lectureTitle,
}: {
  trigger: React.ReactNode;
  lectureTitle?: string;
}) {
  const [sent, setSent] = useState(false);
  return (
    <Dialog onOpenChange={() => setSent(false)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-background border-ink/20 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl uppercase tracking-wide">
            {sent ? 'Вы в списке' : 'Регистрация'}
          </DialogTitle>
        </DialogHeader>
        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <Icon name="Check" className="text-accent-foreground" size={28} />
            </div>
            <p className="font-serif-ed text-xl">
              Подтверждение придёт на вашу почту в течение нескольких минут.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4 pt-2"
          >
            {lectureTitle && (
              <p className="font-serif-ed text-lg text-muted-foreground italic">
                «{lectureTitle}»
              </p>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" required placeholder="Как к вам обращаться" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Почта</Label>
              <Input id="email" type="email" required placeholder="you@email.com" />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-display uppercase tracking-widest"
              >
                Зарегистрироваться
              </Button>
            </DialogFooter>
            <p className="text-xs text-muted-foreground text-center">
              Мы пришлём подтверждение и напоминание перед лекцией.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container flex items-center justify-between py-5">
          <button
            onClick={() => scrollTo('top')}
            className="font-display text-xl tracking-[0.2em] uppercase" style={{ color: '#1b1b1b' }}
          >
Лик<span className="text-ochre">·</span>Без
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-display text-sm uppercase tracking-widest link-underline" style={{ color: '#1b1b1b' }}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden text-white" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-7 md:hidden">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="font-display text-3xl uppercase tracking-widest text-background"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end grain">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233] via-[#0d2233]/60 to-[#0d2233]/40" />
        <div className="container relative z-10 pb-20 pt-32">
          <p className="font-display text-ochre uppercase tracking-[0.4em] text-sm mb-6 animate-fade-up">
            Свободное комьюнити · Санкт-Петербург
          </p>
          <h1
            className="font-display uppercase leading-[0.92] text-[15vw] md:text-[9vw] mb-8 text-balance animate-fade-up"
            style={{ animationDelay: '0.1s', fontWeight: 600, color: '#ffffff' }}
          >
            Учимся
            <br />
            видеть{' '}
            <span className="font-serif-ed italic lowercase text-ochre normal-case" style={{ fontWeight: 400 }}>
              всё
            </span>
          </h1>
          <p
            className="font-serif-ed text-2xl md:text-3xl max-w-2xl leading-snug mb-10 animate-fade-up"
            style={{ animationDelay: '0.2s', color: '#ffffff' }}
          >
            Лекции о кино, истории государств, искусстве и человеке — в самых
            необычных пространствах Петербурга.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={() => scrollTo('lectures')}
              className="bg-ochre hover:bg-ochre/90 text-ink font-display uppercase tracking-widest rounded-none px-8 h-12"
            >
              Ближайшие лекции
            </Button>
            <Button
              onClick={() => scrollTo('mission')}
              variant="outline"
              className="border-background/50 text-background bg-transparent hover:bg-background hover:text-ink font-display uppercase tracking-widest rounded-none px-8 h-12"
            >
              О комьюнити
            </Button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink text-background py-4 overflow-hidden border-y border-background/10">
        <div className="marquee flex whitespace-nowrap">
          {[...TOPICS, ...TOPICS].map((t, i) => (
            <span
              key={i}
              className="font-display uppercase tracking-widest text-lg mx-6 flex items-center gap-6"
            >
              {t} <span className="text-ochre">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section id="mission" className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-4">
              Миссия
            </p>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-none">
              Развитие
              <br />
              без границ
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif-ed text-2xl md:text-3xl leading-relaxed mb-12 text-balance">
              Мы собираем людей, которым тесно в одной профессии и одной теме. Здесь
              историк слушает про кино, программист — про античную философию, а художник
              открывает для себя экономику.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {VALUES.map((v) => (
                <div key={v.title} className="border-t border-ink/20 pt-5">
                  <Icon name={v.icon} className="text-accent mb-4" size={28} />
                  <h3 className="font-display uppercase tracking-wide text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LECTURES */}
      <section id="lectures" className="bg-ink text-background py-24 md:py-32">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-display text-ochre uppercase tracking-[0.3em] text-sm mb-3">
                Афиша
              </p>
              <h2 className="font-display uppercase text-4xl md:text-6xl leading-none">
                Предстоящие лекции
              </h2>
            </div>
            <p className="font-serif-ed italic text-background/70 text-xl max-w-xs">
              Места ограничены — регистрация обязательна.
            </p>
          </div>

          <div className="divide-y divide-background/15 border-y border-background/15">
            {UPCOMING.map((l) => (
              <div
                key={l.title}
                className="group grid md:grid-cols-12 gap-4 md:gap-6 items-center py-7 transition-colors hover:bg-background/5 px-2 md:px-4"
              >
                <div className="md:col-span-2 font-display text-3xl text-ochre">{l.date}</div>
                <div className="md:col-span-6">
                  <h3 className="font-serif-ed text-2xl md:text-3xl leading-tight mb-1">
                    {l.title}
                  </h3>
                  <span className="font-display uppercase tracking-widest text-xs text-background/60">
                    {l.topic}
                  </span>
                </div>
                <div className="md:col-span-2 text-background/70 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="MapPin" size={14} className="text-ochre shrink-0" /> {l.place}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={14} className="text-ochre shrink-0" /> {l.time}
                  </div>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <RegisterDialog
                    lectureTitle={l.title}
                    trigger={
                      <Button className="bg-ochre hover:bg-ochre/90 text-ink font-display uppercase tracking-widest rounded-none">
                        Записаться
                      </Button>
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PAST */}
          <div className="mt-20">
            <p className="font-display uppercase tracking-[0.3em] text-sm text-background/50 mb-8">
              Прошедшие лекции
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {PAST.map((p) => (
                <div
                  key={p.title}
                  className="border border-background/15 p-6 hover:border-ochre transition-colors"
                >
                  <span className="font-display uppercase tracking-widest text-xs text-ochre">
                    {p.topic}
                  </span>
                  <h4 className="font-serif-ed text-2xl leading-tight mt-2 mb-4">{p.title}</h4>
                  <p className="text-sm text-background/50 flex items-center gap-2">
                    <Icon name="MapPin" size={14} /> {p.place}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section id="calendar" className="container py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-4">
              Календарь
            </p>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-none mb-6">
              Июль
              <br />
              2026
            </h2>
            <p className="font-serif-ed text-2xl leading-relaxed text-muted-foreground">
              Каждую неделю — новая тема и новое пространство города. Подпишитесь, чтобы
              не пропустить.
            </p>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['П', 'В', 'С', 'Ч', 'П', 'С', 'В'].map((d, i) => (
              <div
                key={i}
                className="font-display text-center text-xs text-muted-foreground uppercase py-2"
              >
                {d}
              </div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isEvent = [12, 19, 26].includes(day);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center font-display text-sm transition-colors ${
                    isEvent
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground/60 hover:bg-muted'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPEAKER */}
      <section id="speaker" className="bg-accent text-accent-foreground py-24 md:py-32 grain relative">
        <div className="container relative z-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="font-display uppercase tracking-[0.3em] text-sm mb-4 opacity-80">
              Стать лектором
            </p>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-none mb-6 text-balance">
              У вас есть тема,
              <br />о которой хочется
              <br />рассказать миру?
            </h2>
            <p className="font-serif-ed text-2xl leading-relaxed max-w-xl mb-8 opacity-90">
              Неважно, профессионал вы или энтузиаст. Если ваша идея зажигает — мы дадим
              сцену, пространство и благодарную аудиторию.
            </p>
            <RegisterDialog
              trigger={
                <Button className="bg-ink hover:bg-ink/90 text-background font-display uppercase tracking-widest rounded-none px-8 h-12">
                  Предложить лекцию
                </Button>
              }
            />
          </div>
          <div className="md:col-span-5 space-y-5">
            {['Свободный формат и темы', 'Атмосферные площадки города', 'Поддержка на всех этапах'].map(
              (t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-b border-accent-foreground/20 pb-5"
                >
                  <span className="font-display text-4xl opacity-50">0{i + 1}</span>
                  <span className="font-serif-ed text-2xl">{t}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* MERCH */}
      <section id="merch" className="container py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-display text-accent uppercase tracking-[0.3em] text-sm mb-3">
              Мерч
            </p>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-none">
              Носи идеи с собой
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: 'Тоут «Думай шире»', price: '1 200 ₽', icon: 'ShoppingBag' },
            { name: 'Худи комьюнити', price: '3 900 ₽', icon: 'Shirt' },
            { name: 'Блокнот лектора', price: '650 ₽', icon: 'Notebook' },
          ].map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-square bg-secondary flex items-center justify-center mb-4 overflow-hidden grain relative">
                <Icon
                  name={m.icon}
                  size={80}
                  className="text-ink/30 transition-transform duration-500 group-hover:scale-110 relative z-10"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-display uppercase tracking-wide text-lg">{m.name}</h3>
                <span className="font-serif-ed text-2xl text-accent">{m.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="bg-ink text-background pt-24 pb-10 grain relative">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-6">
              <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] mb-6">
                Присоеди<span className="text-ochre">няйтесь</span>
              </h2>
              <p className="font-serif-ed text-2xl text-background/70 max-w-md">
                Оставьте почту — и узнаете о новых лекциях первыми.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col justify-end gap-8">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Ваша почта"
                  className="bg-transparent border-background/30 text-background placeholder:text-background/40 rounded-none h-12"
                />
                <Button className="bg-ochre hover:bg-ochre/90 text-ink font-display uppercase tracking-widest rounded-none h-12 px-8">
                  Подписаться
                </Button>
              </form>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: 'Send', label: 'Telegram' },
                  { icon: 'Instagram', label: 'Instagram' },
                  { icon: 'Mail', label: 'Почта' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="flex items-center gap-2 font-display uppercase tracking-widest text-sm link-underline"
                  >
                    <Icon name={s.icon} size={18} className="text-ochre" /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-background/15 pt-8 flex flex-wrap items-center justify-between gap-4 text-background/50 text-sm">
            <span className="font-display uppercase tracking-[0.2em]">Ликбез</span>
            <span>Санкт-Петербург · 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}