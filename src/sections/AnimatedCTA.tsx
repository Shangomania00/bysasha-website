import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getWhatsAppUrl } from '../data/products'
import { useLanguage } from '../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const sparklePositions = [
  { top: '10%', left: '5%', delay: '0s' },
  { top: '20%', right: '8%', delay: '0.3s' },
  { top: '60%', left: '3%', delay: '0.7s' },
  { top: '80%', right: '5%', delay: '1.1s' },
  { top: '40%', left: '8%', delay: '1.5s' },
  { top: '15%', right: '15%', delay: '0.5s' },
  { top: '70%', left: '12%', delay: '0.9s' },
  { top: '85%', right: '12%', delay: '1.3s' },
]

export default function AnimatedCTA() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from('.cta-heading', { y: 60, opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 70%', once: true } })
      gsap.from('.cta-subtext', { y: 40, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 70%', once: true } })
      gsap.from('.cta-button', { scale: 0.3, opacity: 0, duration: 0.8, delay: 0.5, ease: 'elastic.out(1, 0.5)',
        scrollTrigger: { trigger: section, start: 'top 70%', once: true } })
      gsap.from('.cta-badge', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 70%', once: true } })
    }, section)

    return () => ctx.revert()
  }, [])

  const badges = [
    { label: t('cta.badge1'), sub: t('cta.badge1sub') },
    { label: t('cta.badge2'), sub: t('cta.badge2sub') },
    { label: t('cta.badge3'), sub: t('cta.badge3sub') },
  ]

  return (
    <section ref={sectionRef} style={{ position: 'relative', width: '100%', minHeight: '600px', overflow: 'hidden', backgroundColor: '#0b0b0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="animate-gradient-shift" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1210 0%, #0b0b0b 25%, #1a1512 50%, #0b0b0b 75%, #1a1210 100%)', backgroundSize: '400% 400%' }} />

      {/* Decorative rotating rings */}
      <div className="animate-rotate-slow" style={{ position: 'absolute', width: '500px', height: '500px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />
      <div className="animate-rotate-slow" style={{ position: 'absolute', width: '400px', height: '400px', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg)', animationDirection: 'reverse', animationDuration: '30s', pointerEvents: 'none' }} />

      {/* Pulse rings */}
      <div className="pulse-ring" style={{ position: 'absolute', width: '300px', height: '300px', border: '2px solid rgba(255,255,255,0.15)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
      <div className="pulse-ring" style={{ position: 'absolute', width: '300px', height: '300px', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 1.2s' }} />

      {/* Sparkles */}
      {sparklePositions.map((pos, i) => (
        <div key={i} className="animate-sparkle" style={{ position: 'absolute', width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '50%', ...pos, animationDelay: pos.delay }} />
      ))}

      {/* Main content */}
      <div ref={contentRef} style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '700px', padding: '80px 32px' }}>
        <p className="cta-badge" style={{ fontSize: '12px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '24px' }}>
          {t('cta.eyebrow')}
        </p>

        <h2 className="cta-heading text-glow" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.15, color: '#ffffff', marginBottom: '24px', fontFamily: "'Thmanya', sans-serif", textShadow: '0 0 40px rgba(255,255,255,0.1)' }}>
          {t('cta.title1')}<br /><span style={{ color: 'rgba(255,255,255,0.85)' }}>{t('cta.title2')}</span>
        </h2>

        <p className="cta-subtext" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', fontFamily: "'Thmanya', sans-serif'", whiteSpace: 'pre-line' }}>
          {t('cta.desc')}
        </p>

        {/* CTA Button */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ position: 'absolute', inset: '-8px', borderRadius: '60px', background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', filter: 'blur(16px)', opacity: hovered ? 1 : 0.6, transition: 'opacity 0.3s ease' }} />
          <a href={getWhatsAppUrl(t('wa.order'))} target="_blank" rel="noopener noreferrer" className="cta-button"
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: 600, letterSpacing: '0.06em', color: hovered ? '#0b0b0b' : '#ffffff', backgroundColor: hovered ? '#ffffff' : 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '60px', padding: '20px 48px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none', fontFamily: "'Thmanya', sans-serif", backdropFilter: hovered ? 'none' : 'blur(10px)', overflow: 'hidden' }}>
            <span className="animate-shimmer" style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }} />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>{t('order.cta')}</span>
            <span style={{ display: 'inline-block', transition: 'transform 0.3s ease', transform: hovered ? 'translateX(-4px)' : 'translateX(0)' }}>&larr;</span>
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '48px', flexWrap: 'wrap' }}>
          {badges.map((badge) => (
            <div key={badge.label} className="cta-badge" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', fontFamily: "'Thmanya', sans-serif" }}>{badge.label}</span>
              <span style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>{badge.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
