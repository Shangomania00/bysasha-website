import { getWhatsAppUrl } from '../data/products'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="footer" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #000000', padding: '80px clamp(20px, 4vw, 60px) 0', minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', paddingBottom: '80px' }}>
        <InfoColumn title={t('footer.order')} lines={[t('footer.order1'), t('footer.order2'), t('footer.order3')]} />
        <InfoColumn title={t('footer.payment')} lines={[t('footer.pay1'), t('footer.pay2'), t('footer.pay3')]} />
        <InfoColumn title={t('footer.collection')} lines={[t('footer.col1'), t('footer.col2'), t('footer.col3')]} />
        <div>
          <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.18em', color: '#000000', marginBottom: '20px' }}>{t('footer.contact')}</p>
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: 2 }}>
            <a href={getWhatsAppUrl(t('wa.question'))} target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>
              WhatsApp: +971 54 784 1424
            </a>
            <br />
            <span style={{ fontSize: '13px', color: '#999999' }}>{t('footer.contactDesc')}</span>
          </p>
        </div>
      </div>

      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0.85, paddingBottom: '0' }}>
        <span style={{ display: 'block', fontSize: 'clamp(80px, 18vw, 320px)', fontWeight: 400, letterSpacing: '-0.04em', color: '#000000', whiteSpace: 'nowrap', transform: 'translateY(15%)', userSelect: 'none' }}>
          BY SASHAI
        </span>
      </div>
    </footer>
  )
}

function InfoColumn({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.18em', color: '#000000', marginBottom: '20px' }}>{title}</p>
      <p style={{ fontSize: '14px', color: '#666666', lineHeight: 2 }}>
        {lines.map((line, i) => (
          <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
        ))}
      </p>
    </div>
  )
}
