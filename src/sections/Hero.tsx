import { useState } from 'react'
import { getWhatsAppUrl } from '../data/products'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [ctaHovered, setCtaHovered] = useState(false)

  const orderSteps = [t('order.s1'), t('order.s2'), t('order.s3'), t('order.s4'), t('order.s5'), t('order.s6'), t('order.s7')]
  const payments = [t('order.pay1'), t('order.pay2'), t('order.pay3')]

  return (
    <section id="hero" style={{ position: 'relative', width: '100%', minHeight: '700px', backgroundColor: '#0b0b0b', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))' }}>
      {/* Left: Brownies image */}
      <div style={{ position: 'relative', width: '100%', minHeight: '420px', overflow: 'hidden' }}>
        <img src="/images/hero-brownies.jpg" alt="BY SASHAI" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.60) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 'clamp(24px, 4vw, 48px)', left: 'clamp(24px, 4vw, 48px)', right: 'clamp(24px, 4vw, 48px)', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.02, color: '#ffffff', fontFamily: "'Thmanya', sans-serif", marginBottom: '16px', textShadow: '0 2px 24px rgba(0,0,0,0.25)', maxWidth: '520px' }}>
            {t('pro.title1')}<br />{t('pro.title2')}
          </h2>
          <p style={{ fontSize: '13px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase' }}>
            {t('pro.subtitle')}
          </p>
        </div>
      </div>

      {/* Right: order info */}
      <div style={{ backgroundColor: '#0b0b0b', color: '#ffffff', padding: 'clamp(40px, 5vw, 72px) clamp(24px, 4vw, 60px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '520px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '14px' }}>{t('order.eyebrow')}</p>
          <h3 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '36px' }}>
            {t('order.title')}
          </h3>

          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {orderSteps.map((step, i) => (
              <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', minWidth: '24px', paddingTop: '1px' }}>{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: '28px', marginBottom: '28px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '12px' }}>{t('order.payment')}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {payments.map((method) => (
                <span key={method} style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.8)', padding: '8px 16px', border: '1px solid rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{method}</span>
              ))}
            </div>
          </div>

          <a href={getWhatsAppUrl(t('wa.order'))} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setCtaHovered(true)} onMouseLeave={() => setCtaHovered(false)}
            style={{ display: 'block', textAlign: 'center', marginTop: '12px', padding: '18px 24px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.16em', color: ctaHovered ? '#0b0b0b' : '#ffffff', backgroundColor: ctaHovered ? '#ffffff' : 'transparent', border: '1px solid #ffffff', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.25s ease', fontFamily: "'Thmanya', sans-serif", textDecoration: 'none' }}>
            {t('order.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
