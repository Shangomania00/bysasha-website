import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getWhatsAppUrl } from '../data/products'
import { useLanguage } from '../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function Spatial() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
        delay: 0.4,
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="spatial"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        backgroundColor: '#0b0b0b',
      }}
    >
      <img
        src="/images/hero-brownies.jpg"
        alt="BY SASHAI"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.70) 100%)' }} />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '28px',
          padding: '0 clamp(32px, 4.5vw, 72px)',
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>
          {t('hero.eyebrow')}
        </span>

        <h1 style={{
          fontSize: 'clamp(44px, 7vw, 108px)',
          fontWeight: 700,
          letterSpacing: '0.02em',
          lineHeight: 1.02,
          color: '#ffffff',
          maxWidth: '920px',
          fontFamily: "'Thmanya', sans-serif",
          textShadow: '0 2px 24px rgba(0,0,0,0.25)',
        }}>
          {t('hero.title1')}<br />{t('hero.title2')}
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 1.2vw, 18px)',
          fontWeight: 300,
          lineHeight: 1.65,
          color: 'rgba(255,255,255,0.88)',
          maxWidth: '520px',
        }}>
          {t('hero.desc')}
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
          <a
            href={getWhatsAppUrl(t('wa.order'))}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: hovered ? '#0b0b0b' : '#ffffff',
              backgroundColor: hovered ? '#ffffff' : 'transparent',
              border: '1px solid #ffffff',
              padding: '16px 36px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              fontFamily: "'Thmanya', sans-serif",
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {t('hero.cta')}
          </a>
          <button
            onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '16px 8px',
              cursor: 'pointer',
              fontFamily: "'Thmanya', sans-serif",
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
            }}
          >
            {t('hero.secondary')}
          </button>
        </div>
      </div>
    </section>
  )
}
