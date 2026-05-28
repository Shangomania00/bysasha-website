import { useEffect, useRef, useState } from 'react'
import { getWhatsAppUrl } from '../data/products'
import { useLanguage } from '../contexts/LanguageContext'

interface HeaderProps {
  scrollRef: React.MutableRefObject<{ y: number; speed: number }>
  forceLight?: boolean
}

export default function Header({ scrollRef, forceLight = false }: HeaderProps) {
  const { t, toggle, lang } = useLanguage()
  const [isCompact, setIsCompact] = useState(false)
  const [overHeroRaw, setOverHeroRaw] = useState(true)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const check = () => {
      const y = scrollRef.current.y
      setIsCompact(y > 100)
      setOverHeroRaw(y < window.innerHeight * 0.85)
      rafRef.current = requestAnimationFrame(check)
    }
    rafRef.current = requestAnimationFrame(check)
    return () => cancelAnimationFrame(rafRef.current)
  }, [scrollRef])

  const overHero = overHeroRaw && !forceLight
  const textColor = overHero ? '#ffffff' : '#000000'
  const bgColor = overHero ? 'transparent' : '#ffffff'
  const borderColor = overHero ? 'rgba(255,255,255,0.18)' : '#000000'

  const navItems = [
    { label: t('nav.collection'), target: '#works' },
    { label: t('nav.promise'), target: '#capabilities' },
    { label: t('nav.order'), target: '#hero' },
  ]

  const handleNavClick = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: isCompact ? '64px' : '88px',
        backgroundColor: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 60px)',
        transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Brand */}
      <div
        style={{
          fontSize: '16px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          cursor: 'pointer',
          color: textColor,
          transition: 'color 0.4s ease',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        BY SASHAI
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '4px' }}>
        {navItems.map((item) => (
          <NavItem
            key={item.target}
            label={item.label}
            overHero={overHero}
            onClick={() => handleNavClick(item.target)}
          />
        ))}

        {/* WhatsApp */}
        <NavItem
          label={t('nav.whatsapp')}
          overHero={overHero}
          onClick={() => window.open(getWhatsAppUrl(t('wa.order')), '_blank')}
          isHighlight
        />

        {/* Language Toggle */}
        <button
          onClick={toggle}
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: overHero ? '#0b0b0b' : '#ffffff',
            backgroundColor: overHero ? '#ffffff' : '#000000',
            border: `1px solid ${borderColor}`,
            padding: '8px 16px',
            marginLeft: lang === 'ar' ? '12px' : '0',
            marginRight: lang === 'en' ? '12px' : '0',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            fontFamily: "'Thmanya', sans-serif",
          }}
        >
          {t('lang.switch')}
        </button>
      </nav>
    </header>
  )
}

function NavItem({
  label,
  overHero,
  onClick,
  isHighlight = false,
}: {
  label: string
  overHero: boolean
  onClick: () => void
  isHighlight?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const baseColor = overHero ? '#ffffff' : '#000000'
  const hoverBg = overHero ? '#ffffff' : '#000000'
  const hoverFg = overHero ? '#000000' : '#ffffff'

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        fontSize: '13px',
        fontWeight: isHighlight ? 600 : 400,
        letterSpacing: '0.08em',
        backgroundColor: isHighlight
          ? (hovered ? 'transparent' : (overHero ? 'rgba(255,255,255,0.2)' : '#000000'))
          : (hovered ? hoverBg : 'transparent'),
        color: isHighlight
          ? (hovered ? baseColor : '#ffffff')
          : (hovered ? hoverFg : baseColor),
        border: isHighlight ? `1px solid ${baseColor}` : 'none',
        margin: isHighlight ? 'auto 0' : '0',
        height: isHighlight ? '40px' : '100%',
        cursor: 'pointer',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        whiteSpace: 'nowrap',
        fontFamily: "'Thmanya', sans-serif",
      }}
    >
      {label}
    </button>
  )
}
