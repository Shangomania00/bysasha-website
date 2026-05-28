import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

type Lang = 'ar' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: (key: string) => string
  dir: 'rtl' | 'ltr'
}

const translations: Record<Lang, Record<string, string>> = {
  ar: {
    // Header
    'nav.collection': 'المجموعة',
    'nav.promise': 'وعدنا',
    'nav.order': 'الطلب',
    'nav.whatsapp': 'واتساب',
    'lang.switch': 'English',

    // Hero
    'hero.eyebrow': 'براونيز منزلية الصنع · منذ 2024',
    'hero.title1': 'الوحيدة التي',
    'hero.title2': 'تحتاجها',
    'hero.desc': 'براونيز يدوية الصنع محضّرة بالحب من مطبخنا المنزلي. مكونات ممتازة، نكهات غنية، وتجربة حلوى استثنائية تجلب الفرح في كل قضمة.',
    'hero.cta': 'اطلب عبر واتساب',
    'hero.secondary': 'شاهد مجموعتنا →',

    // Philosophy
    'philosophy.text': 'مشروع منزلي فاخر للبراونيز اليدوي منذ عام 2024 — الأناقة والنكهات الغنية وتجارب حلوى لا تُنسى مليئة بالحب.',
    'philosophy.tag1': 'محضّر يدوياً',
    'philosophy.tag2': 'مكونات ممتازة',
    'philosophy.tag3': 'صُنع بالحب',

    // Works
    'works.title': 'مجموعتنا',
    'works.subtitle': 'الصناديق المميزة',

    // Capabilities
    'capabilities.eyebrow': 'ما نعد به',
    'capabilities.title': 'وعدنا',
    'capabilities.desc': 'من اختيار المكونات الممتازة حتى اللمسة اليدوي الأخيرة، كل براوني من بواسطة ساشي مصنوع بمكونات أصيلة وطعم رائع. تجربة حلوى استثنائية تجلب الفرح:',
    'capabilities.s1': 'مكونات ممتازة',
    'capabilities.d1': 'كاكاو من أصل واحد، زبدة حقيقية، بيض طازج من المزرعة، بدون مواد حافظة',
    'capabilities.s2': 'محضّر يدوياً طازجاً',
    'capabilities.d2': 'كل دفعة محضّرة طازجاً عند الطلب من مطبخنا المنزلي',
    'capabilities.s3': 'نكهتان مميزتان',
    'capabilities.d3': 'براوني كراميل مملح وبراوني كاكاو من أصل واحد',
    'capabilities.s4': 'تغليف أنيق',
    'capabilities.d4': 'كل صندوق مصمم بأناقة ليعكس الجودة الممتازة بداخله',
    'capabilities.s5': 'توصيل في نفس اليوم',
    'capabilities.d5': 'براونيز طازجة توصل إلى باب منزلك في جميع أنحاء المدينة',
    'capabilities.s6': 'صناديق جاهزة للهدايا',
    'capabilities.d6': 'مثالي لأعياد الميلاد والاحتفالات وهدايا الشركات',
    'capabilities.s7': 'طلبات مخصصة',
    'capabilities.d7': 'الطلبات الخاصة والطلبات الكبيرة مرحب بها بكل سرور',
    'capabilities.s8': 'دفع مرن',
    'capabilities.d8': 'الدفع عند الاستلام، التحويل البنكي، أو الدفع الإلكتروني الآمن',

    // Hero Bottom (Order)
    'order.eyebrow': 'خطوات بسيطة',
    'order.title': 'اطلب براونيزك عبر واتساب.',
    'order.s1': 'تصفح مجموعتنا واختر صندوقك المفضل',
    'order.s2': 'راسلنا عبر واتساب باختيارك',
    'order.s3': 'شارك اسمك ورقمك وعنوانك',
    'order.s4': 'اختر طريقة التوصيل المفضلة لديك',
    'order.s5': 'أكد طلبك وأتمم الدفع',
    'order.s6': 'نحضّر طلبك بحب',
    'order.s7': 'استمتع وشاركنا رأيك',
    'order.payment': 'خيارات الدفع',
    'order.pay1': 'الدفع عند الاستلام',
    'order.pay2': 'التحويل البنكي',
    'order.pay3': 'الدفع الإلكتروني',
    'order.cta': 'اطلب عبر واتساب',

    // Professional Brownies
    'pro.title1': 'براونيز',
    'pro.title2': 'احترافية',
    'pro.subtitle': 'بواسطة ساشي · محضّرة بالحب',

    // Animated CTA
    'cta.eyebrow': 'بواسطة ساشي · BY SASHAI',
    'cta.title1': 'اطلب الآن',
    'cta.title2': 'واستمتع بالطعم',
    'cta.desc': 'براونيز محضّرة يدوياً بمكونات ممتازة.\nتوصيل سريع، دفع عند الاستلام.',
    'cta.badge1': 'توصيل سريع',
    'cta.badge1sub': 'Same-day Delivery',
    'cta.badge2': 'دفع عند الاستلام',
    'cta.badge2sub': 'Cash on Delivery',
    'cta.badge3': 'مكونات ممتازة',
    'cta.badge3sub': 'Premium Ingredients',

    // Footer
    'footer.order': 'الطلب',
    'footer.order1': 'واتساب: +971 54 784 1424',
    'footer.order2': 'راسلنا لطلبك',
    'footer.order3': 'توصيل في نفس اليوم متاح',
    'footer.payment': 'الدفع',
    'footer.pay1': 'الدفع عند الاستلام',
    'footer.pay2': 'التحويل البنكي',
    'footer.pay3': 'الدفع الإلكتروني',
    'footer.collection': 'المجموعة',
    'footer.col1': 'الصندوق العادي (6 قطع) — 35 درهم',
    'footer.col2': 'الصندوق الفضي (12 قطعة) — 75 درهم',
    'footer.col3': 'الصندوق الذهبي (24 قطعة) — 125 درهم',
    'footer.contact': 'التواصل',
    'footer.contactDesc': 'تواصل معنا عبر واتساب للطلبات والاستفسارات. نحن هنا لتجربة سلسة وممتعة.',

    // Product Detail
    'product.back': 'رجوع',
    'product.inside': 'ما بداخله',
    'product.price': 'السعر',
    'product.pieces': 'القطع',
    'product.flavors': 'النكهات',
    'product.bestfor': 'الأفضل لـ',
    'product.order': 'اطلب عبر واتساب',
    'product.backCol': 'العودة للمجموعة',
    'product.notfound': 'المنتج غير موجود.',

    // WhatsApp
    'wa.order': 'مرحباً بواسطة ساشي! أود طلب براونيز.',
    'wa.question': 'مرحباً بواسطة ساشي! عندي سؤال.',
  },
  en: {
    // Header
    'nav.collection': 'Collection',
    'nav.promise': 'Our Promise',
    'nav.order': 'Order',
    'nav.whatsapp': 'WhatsApp',
    'lang.switch': 'العربية',

    // Hero
    'hero.eyebrow': 'HOMEMADE BROWNIES · EST. 2024',
    'hero.title1': 'The Only Sashai',
    'hero.title2': 'You Need',
    'hero.desc': 'Handcrafted brownies made with love from our home kitchen. Premium ingredients, rich flavors, and an unforgettable dessert experience that brings joy to every bite.',
    'hero.cta': 'Order on WhatsApp',
    'hero.secondary': 'See Our Collection →',

    // Philosophy
    'philosophy.text': 'A premium home-based project crafting handcrafted brownies since 2024 — elegance, rich flavors, and unforgettable experiences filled with love.',
    'philosophy.tag1': 'Handcrafted',
    'philosophy.tag2': 'Premium',
    'philosophy.tag3': 'Made with Love',

    // Works
    'works.title': 'Our Collection',
    'works.subtitle': 'Signature Boxes',

    // Capabilities
    'capabilities.eyebrow': 'What We Promise',
    'capabilities.title': 'Our Promise',
    'capabilities.desc': 'From premium ingredients to the handcrafted touch, every brownie from BY SASHAI is made with authentic ingredients and exquisite flavor. An exceptional dessert experience that brings joy:',
    'capabilities.s1': 'Premium Ingredients',
    'capabilities.d1': 'Single-origin cocoa, real butter, farm-fresh eggs, no preservatives',
    'capabilities.s2': 'Handcrafted Fresh',
    'capabilities.d2': 'Every batch made fresh to order from our home kitchen',
    'capabilities.s3': 'Two Signature Flavors',
    'capabilities.d3': 'Salted Caramel Brownie and Single-Origin Cocoa Brownie',
    'capabilities.s4': 'Elegant Packaging',
    'capabilities.d4': 'Each box beautifully crafted to reflect the premium quality inside',
    'capabilities.s5': 'Same-Day Delivery',
    'capabilities.d5': 'Fresh brownies delivered to your door across the city',
    'capabilities.s6': 'Gift-Ready Boxes',
    'capabilities.d6': 'Perfect for birthdays, celebrations, corporate gifting',
    'capabilities.s7': 'Custom Orders',
    'capabilities.d7': 'Special requests and large orders accommodated with pleasure',
    'capabilities.s8': 'Flexible Payment',
    'capabilities.d8': 'Cash on delivery, bank transfer, or secure online payment',

    // Hero Bottom (Order)
    'order.eyebrow': 'Simple Steps',
    'order.title': 'Order your brownies via WhatsApp.',
    'order.s1': 'Browse our collection and choose your box',
    'order.s2': 'Message us on WhatsApp with your selection',
    'order.s3': 'Share your name, contact number, and address',
    'order.s4': 'Choose your preferred delivery method',
    'order.s5': 'Confirm your order and complete payment',
    'order.s6': 'We prepare your order with love',
    'order.s7': 'Enjoy and share your feedback with us',
    'order.payment': 'Payment Options',
    'order.pay1': 'Cash on Delivery',
    'order.pay2': 'Bank Transfer',
    'order.pay3': 'Online Payment',
    'order.cta': 'Order on WhatsApp',

    // Professional Brownies
    'pro.title1': 'Professional',
    'pro.title2': 'Brownies',
    'pro.subtitle': 'BY SASHAI · Handcrafted with Love',

    // Animated CTA
    'cta.eyebrow': 'BY SASHAI · HOMEMADE BROWNIES',
    'cta.title1': 'Order Now',
    'cta.title2': '& Enjoy the Taste',
    'cta.desc': 'Handcrafted brownies with premium ingredients.\nFast delivery, cash on delivery.',
    'cta.badge1': 'Fast Delivery',
    'cta.badge1sub': 'Same-day Delivery',
    'cta.badge2': 'Cash on Delivery',
    'cta.badge2sub': 'Cash on Delivery',
    'cta.badge3': 'Premium Ingredients',
    'cta.badge3sub': 'Premium Ingredients',

    // Footer
    'footer.order': 'ORDERING',
    'footer.order1': 'WhatsApp: +971 54 784 1424',
    'footer.order2': 'DM us to order',
    'footer.order3': 'Same-day delivery available',
    'footer.payment': 'PAYMENT',
    'footer.pay1': 'Cash on Delivery',
    'footer.pay2': 'Bank Transfer',
    'footer.pay3': 'Online Payment',
    'footer.collection': 'COLLECTION',
    'footer.col1': 'Normal Box (6 pcs) — 35 AED',
    'footer.col2': 'Silver Box (12 pcs) — 75 AED',
    'footer.col3': 'Golden Box (24 pcs) — 125 AED',
    'footer.contact': 'CONTACT',
    'footer.contactDesc': 'Contact us via WhatsApp for orders and any questions. We are here for a smooth and delightful experience.',

    // Product Detail
    'product.back': 'Back',
    'product.inside': "What's Inside",
    'product.price': 'Price',
    'product.pieces': 'Pieces',
    'product.flavors': 'Flavors',
    'product.bestfor': 'Best For',
    'product.order': 'Order on WhatsApp',
    'product.backCol': 'Back to Collection',
    'product.notfound': 'Product not found.',

    // WhatsApp
    'wa.order': 'Hi BY SASHAI! I would like to order brownies.',
    'wa.question': 'Hi BY SASHAI! I have a question.',
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar')

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('bysashai-lang', newLang)
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'ar' ? 'en' : 'ar')
  }, [lang, setLang])

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] || key
    },
    [lang]
  )

  useEffect(() => {
    const saved = localStorage.getItem('bysashai-lang') as Lang | null
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLangState(saved)
      document.documentElement.lang = saved
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr'
    }
  }, [])

  const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
