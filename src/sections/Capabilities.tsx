import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLanguage } from '../contexts/LanguageContext'

const services = (t: (k: string) => string) => [
  { label: t('capabilities.s1'), detail: t('capabilities.d1') },
  { label: t('capabilities.s2'), detail: t('capabilities.d2') },
  { label: t('capabilities.s3'), detail: t('capabilities.d3') },
  { label: t('capabilities.s4'), detail: t('capabilities.d4') },
  { label: t('capabilities.s5'), detail: t('capabilities.d5') },
  { label: t('capabilities.s6'), detail: t('capabilities.d6') },
  { label: t('capabilities.s7'), detail: t('capabilities.d7') },
  { label: t('capabilities.s8'), detail: t('capabilities.d8') },
]

export default function Capabilities() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="capabilities" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0b0b0b', padding: 'clamp(100px, 12vw, 160px) clamp(20px, 4vw, 60px)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1210 0%, #0b0b0b 50%, #1a1512 100%)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '60px', paddingBottom: '28px', borderBottom: '1px solid rgba(255,255,255,0.35)' }}>
          <div style={{ flex: '1 1 500px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '18px' }}>
              {t('capabilities.eyebrow')}
            </p>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 500, letterSpacing: '0.01em', lineHeight: 1, color: '#ffffff', fontFamily: "'Thmanya', sans-serif", marginBottom: '24px' }}>
              {t('capabilities.title')}
            </h2>
            <p style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: '640px' }}>
              {t('capabilities.desc')}
            </p>
          </div>
          <div style={{ flex: '0 0 clamp(180px, 22vw, 280px)', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <OrbitalBadge />
          </div>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2px', backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.18)' }}>
          {services(t).map((service, i) => (
            <li key={i} style={{ backgroundColor: 'rgba(11,11,11,0.55)', padding: '28px 32px', display: 'flex', gap: '20px', alignItems: 'flex-start', minHeight: '140px' }}>
              <span style={{ flex: '0 0 auto', width: '28px', fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', fontVariantNumeric: 'tabular-nums', paddingTop: '7px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ flex: '1 1 0%' }}>
                <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', fontWeight: 600, letterSpacing: '0.02em', lineHeight: 1.2, color: '#ffffff', fontFamily: "'Thmanya', sans-serif", marginBottom: '10px' }}>
                  {service.label}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,0.72)', margin: 0 }}>{service.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function OrbitalBadge() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const pathId = `orbital-path-${Math.floor(Math.random() * 10000)}`
    const path = svg.querySelector('path')
    if (!path) return
    path.setAttribute('id', pathId)
    path.setAttribute('fill', 'none')

    const textContent = 'BY SASHAI \u2022 HOMEMADE BROWNIES \u2022 EST. 2024 \u2022 '
    const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    textEl.setAttribute('fill', '#ffffff')
    textEl.setAttribute('font-family', "'Helvetica Neue', sans-serif")
    textEl.setAttribute('font-size', '18px')
    textEl.setAttribute('font-weight', '500')
    textEl.setAttribute('letter-spacing', '2px')

    const tp1 = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
    tp1.setAttribute('href', `#${pathId}`)
    tp1.setAttribute('startOffset', '0%')
    tp1.textContent = textContent

    const tp2 = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
    tp2.setAttribute('href', `#${pathId}`)
    tp2.setAttribute('startOffset', '0%')
    tp2.textContent = textContent

    textEl.appendChild(tp1)
    textEl.appendChild(tp2)
    svg.appendChild(textEl)

    const textPaths = svg.querySelectorAll('textPath')
    const tween1 = gsap.fromTo(textPaths[0], { attr: { startOffset: '0%' } }, { attr: { startOffset: '-100%' }, duration: 25, ease: 'none', repeat: -1 })
    const tween2 = gsap.fromTo(textPaths[1], { attr: { startOffset: '100%' } }, { attr: { startOffset: '0%' }, duration: 25, ease: 'none', repeat: -1 })

    return () => { tween1.kill(); tween2.kill() }
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', transform: 'rotate(-15deg)' }}>
      <svg ref={svgRef} viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
        <path d="M200,40 A160,160 0 1,1 199.99,40" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.25" />
      </svg>
    </div>
  )
}
