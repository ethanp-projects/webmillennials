'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Users, Star, TrendingUp, Target, BarChart3, Rocket, Compass, Repeat, Megaphone, Palette, Mail, Layout, LineChart, CheckCircle, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

export default function Page(){
  const [navOpen,setNavOpen]=useState(false)
  const [logoError,setLogoError]=useState(false)

  const primaryBtn="rounded-2xl px-8 py-6 text-lg text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-blue-300/40 hover:from-sky-400 hover:to-blue-500 hover:shadow-xl transform transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300";
  const secondaryBtn="mt-6 rounded-xl px-5 py-3 text-sm font-semibold text-blue-700 bg-white shadow-md ring-1 ring-slate-200 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300";
  const primaryBtnSm="rounded-xl px-5 py-3 text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-blue-300/30 hover:from-sky-400 hover:to-blue-500 hover:shadow-lg transform transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300";
  const gradientHeading="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500";

  function HeroCarousel(){
    const slides=[
      {caption:"Before → After Website Redesign"},
      {caption:"Analytics Dashboard (+215% Leads)"},
      {caption:"Campaign Creative Preview"},
    ]
    const [i,setI]=useState(0); const [paused,setPaused]=useState(false); const ref=useRef<number|null>(null)
    useEffect(()=>{ if(paused) return; ref.current=window.setInterval(()=>setI(v=>(v+1)%slides.length),5500); return()=>{ if(ref.current) window.clearInterval(ref.current)}},[paused])
    return (<div className="relative w-full max-w-xl ml-auto" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} aria-roledescription="carousel">
      <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl">
        <div className="flex transition-transform duration-700" style={{transform:`translateX(-${i*100}%)`,width:`${slides.length*100}%`}}>
          {slides.map((s,idx)=>(<div key={idx} className="w-full shrink-0 p-6 md:p-8">
            <div className="relative h-64 md:h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-100 to-blue-100 ring-1 ring-slate-200 shadow-md"/>
              <div className="absolute right-6 bottom-6 h-40 w-24 md:h-44 md:w-28 rounded-2xl bg-white ring-1 ring-slate-200 shadow-lg rotate-3"/>
              <div className="absolute left-6 bottom-6 bg-white/85 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg ring-1 ring-slate-200 shadow"><p className="text-sm font-semibold">{s.caption}</p></div>
            </div>
          </div>))}
        </div>
      </div>
      <button aria-label="Previous" onClick={()=>setI(v=>(v-1+slides.length)%slides.length)} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow ring-1 ring-slate-200 hover:shadow-md"><ChevronLeft className="h-5 w-5 text-gray-700"/></button>
      <button aria-label="Next" onClick={()=>setI(v=>(v+1)%slides.length)} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow ring-1 ring-slate-200 hover:shadow-md"><ChevronRight className="h-5 w-5 text-gray-700"/></button>
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Hero slides">{slides.map((_,j)=>(<button key={j} role="tab" aria-selected={j===i} aria-label={`Go to slide ${j+1}`} onClick={()=>setI(j)} className={`h-2.5 w-2.5 rounded-full ${j===i?"bg-blue-600":"bg-slate-300 hover:bg-slate-400"}`}/>))}</div>
    </div>)}

  function BrandsMarquee(){
    const brands=["Acme Co.","Northpeak","Bluebird Labs","Foundry","Nimbus","Arcadia","Peakline","Solstice","Evergreen","NovaCorp"]
    const [paused,setPaused]=useState(false)
    return (<section className="bg-gray-50 py-16">
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Trusted by brands just like yours</h2>
        <div className="relative overflow-hidden w-3/4 mx-auto" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} aria-label="Brand logos marquee">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent"/><div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent"/>
          <div className="flex w-max gap-8 items-center" style={{animation:`marquee 28s linear infinite`,animationPlayState:paused?'paused':'running'}}>
            <div className="flex gap-8 items-center">{brands.map((n,i)=>(<div key={`a-${i}`} className="px-6 py-3 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm text-gray-700 whitespace-nowrap">{n}</div>))}</div>
            <div className="flex gap-8 items-center" aria-hidden="true">{brands.map((n,i)=>(<div key={`b-${i}`} className="px-6 py-3 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm text-gray-700 whitespace-nowrap">{n}</div>))}</div>
          </div>
        </div>
      </div>
    </section>)}

  return (<div className="font-sans">
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          {logoError ? (<div className="h-10 flex items-center font-semibold text-blue-700">MM</div>) : (<img src="/mm-logo.png" alt="Millennial Marketing" className="h-10 w-auto object-contain" onError={()=>setLogoError(true)} />)}
          <span className="sr-only">Millennial Marketing</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#case-study" className="text-sm font-medium text-gray-700 hover:text-gray-900">Case Study</a>
          <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
          <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-gray-900">Resources</a>
        </nav>
        <div className="hidden md:block"><Button className={primaryBtnSm} asChild><a href="#get-plan">Book a Call</a></Button></div>
        <button className="md:hidden p-2 rounded-md ring-1 ring-slate-200" onClick={()=>setNavOpen(v=>!v)} aria-label="Toggle menu">{navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {navOpen && (<div className="md:hidden border-t border-slate-200"><div className="container mx-auto px-6 py-4 space-y-3">
        <a href="#case-study" className="block py-2 text-base font-medium text-gray-700">Case Study</a>
        <a href="#services" className="block py-2 text-base font-medium text-gray-700">Services</a>
        <a href="#about" className="block py-2 text-base font-medium text-gray-700">About</a>
        <a href="#resources" className="block py-2 text-base font-medium text-gray-700">Resources</a>
        <Button className={primaryBtnSm} asChild><a href="#get-plan">Book a Call</a></Button>
      </div></div>)}
    </header>

    <section className="container mx-auto px-6 py-24 bg-gradient-to-b from-sky-50 to-white rounded-3xl">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-xl text-gray-600 mb-8">Want to Scale Your Business?</p>
          <h1 className={`text-5xl font-bold mb-6 ${gradientHeading}`}>Smarter Digital Strategies, Built for Growth.</h1>
          <p className="text-lg text-gray-900 mb-8">Strategies proven to scale businesses—now tailored to your goals and executed by our expert team.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <Button className={primaryBtn} asChild><a href="#get-plan">Get A Free Plan</a></Button>
            <a href="#portfolio" className="text-blue-600 font-medium hover:underline">See Our Work →</a>
          </div>
        </div>
        <HeroCarousel/>
      </div>
    </section>

    <BrandsMarquee/>

    <section className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
      {[
        {icon:<Briefcase className="mx-auto mb-4 h-10 w-10 text-blue-600"/>,title:"Ads Management",desc:"Google & Meta ads designed to maximize ROI and scale efficiently."},
        {icon:<Users className="mx-auto mb-4 h-10 w-10 text-blue-600"/>,title:"Creative Strategy",desc:"Ad creative built for engagement and conversions."},
        {icon:<Star className="mx-auto mb-4 h-10 w-10 text-blue-600"/>,title:"Analytics & Insights",desc:"Track, measure, and optimize what matters."}
      ].map((c,i)=>(<Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition"><CardContent className="p-8 text-center">{c.icon}<h3 className="text-xl font-semibold mb-2">{c.title}</h3><p className="text-gray-600">{c.desc}</p></CardContent></Card>))}
    </section>

    <section id="services" className="bg-white py-20 scroll-mt-28">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-12 ${gradientHeading}`}>Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {icon:<Megaphone className="h-7 w-7 text-blue-600"/>, title:"Google & Meta Ads", bullets:["Campaign builds & audits","Iterative creative testing","Scaling with NCROAS guardrails"]},
            {icon:<Layout className="h-7 w-7 text-blue-600"/>, title:"Landing Pages & CRO", bullets:["Offer & page diagnostics","A/B testing roadmap","Analytics-backed insights"]},
            {icon:<Palette className="h-7 w-7 text-blue-600"/>, title:"Creative Production", bullets:["UGC & motion graphics","Hook & offer sprints","Creative analysis & iteration"]},
            {icon:<Mail className="h-7 w-7 text-blue-600"/>, title:"Email & SMS", bullets:["Klaviyo audits & builds","Segmentation & deliverability","Campaign calendars"]},
            {icon:<LineChart className="h-7 w-7 text-blue-600"/>, title:"Analytics & Tracking", bullets:["GA4 & server-side","Attribution & dashboards","Cost & ROAS rollups"]},
            {icon:<Compass className="h-7 w-7 text-blue-600"/>, title:"Strategy & Consulting", bullets:["Positioning & offers","Quarterly planning","Executive reporting"]},
          ].map((s,i)=>(<Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition"><CardContent className="p-8"><div className="flex items-center gap-3 mb-4">{s.icon}<h3 className="text-xl font-semibold">{s.title}</h3></div><ul className="space-y-2 text-gray-700">{s.bullets.map((b,j)=>(<li key={j} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600"/>{b}</li>))}</ul><Button className={secondaryBtn}>Learn more</Button></CardContent></Card>))}
        </div>
      </div>
    </section>

    <section id="case-study" className="bg-white py-20 scroll-mt-28">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-12 ${gradientHeading}`}>Case Study: Scaling Profitably</h2>
        <div className="bg-gray-100 rounded-2xl shadow-sm p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Scaling <span className="text-blue-600">[Client Brand]</span> from $1,500/day to $11,000/day</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {icon:<Target className="h-5 w-5 text-blue-600"/>,title:"Challenge",text:"High spend with low returns; NCROAS < 1.0; fragmented creative testing."},
              {icon:<Compass className="h-5 w-5 text-blue-600"/>,title:"Strategy",text:"Audit, offer restructure, creative sprints, tracking, ABO structure."},
              {icon:<TrendingUp className="h-5 w-5 text-blue-600"/>,title:"Execution",text:"Iterative tests; weekly rollups; guardrails; scale winners, cut losers."},
            ].map((b,i)=>(<div key={i}><div className="flex items-center gap-2 mb-2">{b.icon}<h4 className="font-semibold">{b.title}</h4></div><p className="text-gray-700">{b.text}</p></div>))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
            {[
              {icon:<BarChart3 className="mx-auto h-8 w-8 mb-2 text-blue-600"/>,label:"Daily Ad Spend",val:"$11K/day"},
              {icon:<TrendingUp className="mx-auto h-8 w-8 mb-2 text-blue-600"/>,label:"NCROAS",val:"1.45x"},
              {icon:<Target className="mx-auto h-8 w-8 mb-2 text-blue-600"/>,label:"New Customer Orders",val:"+62%"},
            ].map((m,i)=>(<div key={i} className="bg-white rounded-xl p-6 shadow-sm">{m.icon}<p className="text-sm text-gray-500">{m.label}</p><p className="text-2xl font-bold">{m.val}</p></div>))}
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-2">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400"/>))}</div>
            <p className="italic text-gray-700 mb-3">“WebMillennials made growth feel predictable. Scaling while improving ROAS is rare—and they did it.”</p>
            <p className="font-semibold">— Jane Doe, Founder & CEO, [Client Brand]</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-12 ${gradientHeading}`}>What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {quote:"helped us scale our ads while lowering costs",name:"Sarah J., E-commerce Founder"},
            {quote:"lead volume doubled in just 3 months",name:"Mark R., SaaS CEO"},
            {quote:"a turning point with clarity and growth",name:"Emily T., Local Business Owner"},
          ].map((t,i)=>(<Card key={i} className="rounded-2xl shadow-sm"><CardContent className="p-6 flex flex-col items-center"><div className="flex mb-3">{Array.from({length:5}).map((_,j)=>(<Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400"/>))}</div><p className="text-gray-700 italic mb-6">“{t.quote}.”</p><div className="flex items-center gap-3 mt-auto"><div className="w-12 h-12 rounded-full bg-gray-300"/><p className="font-semibold">{t.name}</p></div></CardContent></Card>))}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 py-24 text-center">
      <h2 className={`text-4xl font-bold mb-6 ${gradientHeading}`}>Ready to Grow Your Business?</h2>
      <p className="text-gray-600 mb-8">Let’s build your next growth engine together.</p>
      <Button className={primaryBtn} asChild><a href="#get-plan">Schedule a Call</a></Button>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-12 ${gradientHeading}`}>Our Growth Framework</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {icon:<Compass className="mx-auto h-8 w-8 mb-3 text-blue-600"/>,title:"Audit & Align",text:"Deep-dive audit, avatar/offer alignment, tracking checkup."},
            {icon:<Target className="mx-auto h-8 w-8 mb-3 text-blue-600"/>,title:"Plan & Prioritize",text:"Tests, budgets, KPIs with guardrails."},
            {icon:<Rocket className="mx-auto h-8 w-8 mb-3 text-blue-600"/>,title:"Launch & Learn",text:"Creative sprints; controlled experiments."},
            {icon:<Repeat className="mx-auto h-8 w-8 mb-3 text-blue-600"/>,title:"Scale & Sustain",text:"Double down on winners; weekly rollups."},
          ].map((s,i)=>(<Card key={i} className="rounded-2xl shadow-sm"><CardContent className="p-6 text-center">{s.icon}<h3 className="font-semibold mb-2">{s.title}</h3><p className="text-gray-600 text-sm">{s.text}</p></CardContent></Card>))}
        </div>
      </div>
    </section>
  </div>)
}
