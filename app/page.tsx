"use client";

import { useState } from "react";
import "./logo.module.css";
import "./team.module.css";

const WHATSAPP_URL = "https://wa.me/5583993175769?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Elas%20Beauty%20Studio%20e%20gostaria%20de%20agendar%20meu%20hor%C3%A1rio.";

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    sparkles: <><path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3Z"/><path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14Z"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    star: <path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9-6.2-3.2L5.8 21 7 14.1l-5-4.8 6.9-1L12 2Z"/>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></>,
    whatsapp: <><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-5.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.5 7.8c.3-.6.6-.6.9-.6h.5l.8 2c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 3 2.8.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.7-.1l2 .9c.3.1.5.3.5.5 0 .3-.2 1.5-1 2.1-.7.6-1.6.9-2.7.6-1-.2-2.4-.8-4.1-2.3-2-1.7-3.2-3.8-3.6-5.2-.3-.9.1-1.3.3-1.6Z"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Logo() {
  return <a href="#inicio" className="logo" aria-label="Elas Beauty Studio — início"><img className="logo-image" src="/elaslogo.png" alt="Elas Beauty Studio"/><span className="logo-copy"><strong>Elas</strong><small>Beauty</small></span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Profissionais", "#profissionais"], ["Galeria", "#galeria"], ["Contato", "#contato"]];
  return <header className="header"><div className="container nav-wrap"><Logo/><nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button button-small" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar horário</a></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}><Icon name={open ? "close" : "menu"}/></button></div></header>;
}

function Hero() {
  return <section className="hero" id="inicio"><div className="hero-image" role="img" aria-label="Experiência de beleza e autocuidado no Elas Beauty Studio"/><div className="container hero-grid"><div className="hero-content reveal"><span className="eyebrow"><span/> Beleza, cuidado & bem-estar</span><h1>Realce sua beleza.<br/><em>Viva seu momento.</em></h1><p>No Elas Beauty Studio, cada detalhe é pensado para valorizar sua beleza, elevar sua autoestima e proporcionar uma experiência de cuidado completa.</p><div className="hero-actions"><a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="calendar"/>Agendar meu horário</a><a className="text-link" href="#servicos">Conhecer nossos serviços <Icon name="arrow"/></a></div><div className="hero-location"><Icon name="pin"/> João Pessoa <span/> Atendimento com hora marcada</div></div><div className="hero-note"><span>Experiência</span><strong>feita para você</strong></div></div></section>;
}

const services = [
  { n: "01", title: "Unhas", desc: "Cuidado, cor e acabamento impecável para mãos sempre elegantes.", tag: "Manicure & Pedicure" },
  { n: "02", title: "Cílios", desc: "Um olhar marcante, leve e personalizado para valorizar seus traços.", tag: "Extensão & Lash lifting" },
  { n: "03", title: "Hair", desc: "Cortes, tratamentos e finalizações que revelam sua melhor versão.", tag: "Cabelo & Tratamentos" },
  { n: "04", title: "Depilação", desc: "Técnicas cuidadosas para uma pele lisa, macia e bem tratada.", tag: "Conforto & Cuidado" },
  { n: "05", title: "Spa e cuidados", desc: "Momentos de pausa, relaxamento e renovação para você.", tag: "Bem-estar" },
  { n: "06", title: "Beleza completa", desc: "Outros procedimentos pensados para sua rotina e autoestima.", tag: "Consulte opções" },
];

function Services() {
  return <section className="section services-section" id="servicos"><div className="container"><div className="section-heading split"><div><span className="eyebrow"><span/> Nossos serviços</span><h2>Cuidado completo,<br/><em>do seu jeito.</em></h2></div><p>Encontre tudo o que precisa para se sentir ainda mais bonita, confiante e bem cuidada — em um só lugar.</p></div><div className="service-grid">{services.map((item) => <article className="service-card" key={item.title}><div className="service-number">{item.n}</div><div className="service-icon"><Icon name="sparkles"/></div><span className="service-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.desc}</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar <Icon name="arrow"/></a></article>)}</div><div className="center-action"><a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="calendar"/>Agendar meu horário</a></div></div></section>;
}

function About() {
  return <section className="section about" id="sobre"><div className="container about-grid"><div className="about-visual"><img src="/elas-studio.png" alt="Ambiente acolhedor e sofisticado do Elas Beauty Studio"/><div className="about-seal"><Icon name="heart"/><span>Beleza com<br/>propósito</span></div></div><div className="about-copy"><span className="eyebrow"><span/> Sobre o studio</span><h2>Um espaço<br/><em>feito para você.</em></h2><p>O Elas Beauty Studio nasceu com o propósito de proporcionar beleza, cuidado e bem-estar em um ambiente acolhedor e profissional.</p><p>Nossa equipe é formada por especialistas dedicadas a oferecer uma experiência personalizada para cada cliente, respeitando sua individualidade e valorizando o que você tem de mais bonito.</p><div className="about-points"><div><strong>Experiência</strong><small>completa e acolhedora</small></div><div><strong>Cuidado</strong><small>em cada detalhe</small></div></div><a className="text-link dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Conheça o Elas <Icon name="arrow"/></a></div></div></section>;
}

const team = [
  { name: "Anna Ruty", role: "Lash designer", bio: "Técnica fio a fio para realçar sua beleza com leveza, elegância e cuidado.", photo: "/anna.jpg" },
  { name: "Eliane Soares", role: "Cabeleireira", bio: "Cuidados em cabelos naturais, com sutileza, elegância e excelência.", photo: "/eliane.jpg" },
  { name: "Flávia Maria", role: "Cabeleireira", bio: "Especialista em alisamento, mechas e corte moderno, com mais de 26 anos de experiência.", photo: "/flavia.jpg" },
  { name: "Manu Rodrigues", role: "Depiladora e esteticista", bio: "Atendimento atento aos detalhes, levando autoestima e cuidado a cada cliente.", photo: "/manu.jpg" },
  { name: "Noemi Rangel", role: "Nail designer", bio: "Transforma autoestima em arte com decorações diferentes e muito cuidado.", photo: "/noemi.jpg" },
  { name: "Williane Monara", role: "Nail designer", bio: "Naturalidade e agilidade para transformar unhas e arrancar sorrisos.", photo: "/will.jpg" },
];

function Team() {
  return <section className="section team" id="profissionais"><div className="container"><div className="section-heading centered"><span className="eyebrow"><span/> Nossa equipe <span/></span><h2>Profissionais que<br/><em>cuidam de você.</em></h2><p>Talento, técnica e um atendimento próximo para transformar cada visita em uma experiência especial.</p></div><div className="team-grid">{team.map((person) => <article className="team-card" key={person.name}><div className="team-photo"><img src={person.photo} alt={person.name}/><span>{person.role}</span></div><div className="team-info"><h3>{person.name}</h3><p>{person.bio}</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar com esta profissional <Icon name="arrow"/></a></div></article>)}</div><div className="center-action"><a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="calendar"/>Agendar meu horário</a></div></div></section>;
}

const benefits = [
  ["heart", "Atendimento personalizado", "Cada detalhe pensado para você e para o resultado que deseja."],
  ["sparkles", "Ambiente acolhedor", "Um espaço confortável, leve e preparado para o seu momento."],
  ["star", "Profissionais especializadas", "Técnica, atualização e carinho em todos os procedimentos."],
  ["shield", "Produtos de qualidade", "Marcas selecionadas para oferecer segurança e resultados."],
  ["calendar", "Horários organizados", "Atendimento com hora marcada, respeitando seu tempo."],
  ["heart", "Beleza e bem-estar", "Uma experiência completa para autoestima, cuidado e pausa."],
];

function Benefits() {
  return <section className="section benefits"><div className="container"><div className="benefits-top"><div className="section-heading"><span className="eyebrow"><span/> Nossos diferenciais</span><h2>Por que escolher<br/>o <em>Elas?</em></h2></div><p>Mais do que serviços de beleza, entregamos uma experiência que começa no acolhimento e continua em cada cuidado.</p></div><div className="benefit-grid">{benefits.map(([icon,title,text]) => <article key={title}><div className="benefit-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

const gallery = [
  ["https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85", "Unhas", "Detalhes que encantam"],
  ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=85", "Cílios", "Olhares que marcam"],
  ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85", "Hair", "Fios bem cuidados"],
  ["/elas-studio.png", "Nosso espaço", "Aconchego e beleza"],
  ["https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85", "Atendimento", "Cuidado em cada gesto"],
  ["https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=85", "Bem-estar", "Seu momento especial"],
];

function Gallery() {
  return <section className="section gallery" id="galeria"><div className="container"><div className="section-heading split"><div><span className="eyebrow"><span/> Inspire-se</span><h2>Beleza em<br/><em>cada detalhe.</em></h2></div><p>Um pouco do nosso trabalho, do nosso espaço e do carinho presente em cada atendimento.</p></div><div className="gallery-grid">{gallery.map(([src,title,subtitle], i) => <figure className={`gallery-item g${i+1}`} key={title+subtitle}><img src={src} alt={`${title}: ${subtitle}`}/><figcaption><small>{title}</small><strong>{subtitle}</strong></figcaption></figure>)}</div><div className="center-action gallery-action"><a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="calendar"/>Agendar meu horário</a></div></div></section>;
}

const testimonials = [
  ["Ambiente maravilhoso, atendimento impecável e profissionais incríveis. Me senti muito bem cuidada!", "Camila R."],
  ["Amei cada detalhe, desde a recepção até o resultado. Já virou meu lugar preferido de autocuidado.", "Fernanda M."],
  ["Atendimento pontual, ambiente lindo e um trabalho super delicado. Saí me sentindo ainda mais bonita!", "Larissa S."],
];

function Testimonials() {
  return <section className="section testimonials"><div className="container"><div className="section-heading centered light"><span className="eyebrow"><span/> Depoimentos <span/></span><h2>Quem conhece,<br/><em>recomenda.</em></h2></div><div className="testimonial-grid">{testimonials.map(([quote,name]) => <article key={name}><div className="stars" aria-label="5 estrelas">★★★★★</div><blockquote>“{quote}”</blockquote><div className="client"><span>{name.charAt(0)}</span><div><strong>{name}</strong><small>Cliente Elas</small></div></div></article>)}</div></div></section>;
}

function Location() {
  return <section className="section location" id="contato"><div className="container"><div className="location-card"><div className="map"><iframe title="Mapa do Elas Beauty Studio" src="https://www.google.com/maps?q=Rua+Flodoaldo+Peixoto+Filho,+122,+Jo%C3%A3o+Pessoa,+PB&output=embed" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts"/></div><div className="location-info"><span className="eyebrow"><span/> Visite-nos</span><h2>Seu espaço de beleza<br/>em <em>João Pessoa.</em></h2><div className="contact-row"><Icon name="pin"/><div><small>Endereço</small><strong>Rua Flodoaldo Peixoto Filho, 122<br/>João Pessoa – PB</strong></div></div><div className="contact-row"><Icon name="clock"/><div><small>Horários</small><strong>Segunda a sábado · 9h às 19h<br/>Atendimento com hora marcada</strong></div></div><div className="location-actions"><a className="button outline" href="https://www.google.com/maps/search/?api=1&query=Rua+Flodoaldo+Peixoto+Filho+122+Joao+Pessoa+PB" target="_blank" rel="noreferrer"><Icon name="pin"/>Como chegar</a><a className="button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp"/>Agendar pelo WhatsApp</a></div></div></div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><div className="cta-flower">E</div><div className="container"><span className="eyebrow"><span/> Agora é a sua vez <span/></span><h2>Seu momento de cuidado<br/><em>começa aqui.</em></h2><p>Escolha seu serviço, fale com nossa equipe e agende seu horário.</p><a className="button light-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp"/>Agendar pelo WhatsApp</a></div></section>;
}

function Footer() {
  return <footer><div className="container footer-grid"><div className="footer-brand"><Logo/><p>Beleza, cuidado e bem-estar em um espaço feito para você.</p><div className="socials"><a href="https://www.instagram.com/elasbeautystudio/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram"/></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp"/></a></div></div><div><h3>Navegue</h3><a href="#sobre">Sobre o Studio</a><a href="#servicos">Serviços</a><a href="#profissionais">Profissionais</a><a href="#galeria">Galeria</a></div><div><h3>Visite-nos</h3><p>Rua Flodoaldo Peixoto Filho, 122<br/>João Pessoa – PB</p><p>Segunda a sábado<br/>9h às 19h</p></div><div><h3>Agendamento</h3><p>Atendimento exclusivo<br/>com hora marcada.</p><a className="footer-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar no WhatsApp <Icon name="arrow"/></a></div></div><div className="container copyright"><span>© 2026 Elas Beauty Studio. Todos os direitos reservados.</span><span>Feito com cuidado.</span></div></footer>;
}

function WhatsAppButton() {
  return <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><Icon name="whatsapp"/><span>Agendar</span></a>;
}

export default function Home() { return <><Header/><main><Hero/><About/><Services/><Team/><Benefits/><Gallery/><Testimonials/><Location/><FinalCTA/></main><Footer/><WhatsAppButton/></>; }
