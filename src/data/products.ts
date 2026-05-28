export interface Product {
  id: string
  title: string
  titleAr: string
  subtitle: string
  subtitleAr: string
  img: string
  tagline: string
  taglineAr: string
  description: string[]
  descriptionAr: string[]
  features: string[]
  featuresAr: string[]
  price: string
  priceNote: string
  priceNoteAr: string
  pieces: string
  piecesAr: string
  flavors: string
  flavorsAr: string
  bestFor: string
  bestForAr: string
}

export const products: Product[] = [
  {
    id: '01',
    title: 'Normal Box',
    titleAr: 'الصندوق العادي',
    subtitle: 'Signature Collection',
    subtitleAr: 'المجموعة المميزة',
    img: '/images/normal-box.jpg',
    tagline: '6 pieces of handcrafted brownies, perfect for personal indulgence.',
    taglineAr: '6 قطع من البراونيز اليدوي — مثالي للاستمتاع الشخصي.',
    description: [
      'Our Normal Box contains 6 pieces of our signature handcrafted brownies, made fresh from our home kitchen with premium ingredients and heartfelt dedication. Each brownie is individually cut and packed with care.',
      'Choose between our two classic flavors: Salted Caramel Brownie with its perfect sweet-salty balance, or Single-Origin Cocoa Brownie for the pure chocolate lover.',
    ],
    descriptionAr: [
      'يحتوي الصندوق العادي على 6 قطع من البراونيز اليدوي المميز لدينا، محضّر طازجاً من مطبخنا المنزلي بمكونات ممتازة وتفانٍ صادق. كل قطعة براوني مقطعة ومعبأة بعناية فائقة.',
      'اختر بين نكهتينا الكلاسيكيتين: براوني كراميل مملح مع توازنه المثالي بين الحلو والمالح، أو براوني كاكاو من أصل واحد لعشاق الشوكولاته النقيّة.',
    ],
    features: [
      '6 pieces of signature brownies',
      'Two flavor options available',
      'Handcrafted fresh to order',
      'Premium packaging',
      'Perfect for personal indulgence',
      'Same-day delivery available',
    ],
    featuresAr: [
      '6 قطع من البراونيز المميزة',
      'خياران من النكهات المتاحة',
      'محضّر يدوياً طازجاً عند الطلب',
      'تغليف ممتاز',
      'مثالي للاستمتاع الشخصي',
      'توصيل في نفس اليوم متاح',
    ],
    price: '35 AED',
    priceNote: 'per box',
    priceNoteAr: 'للصندوق',
    pieces: '6 pieces',
    piecesAr: '6 قطع',
    flavors: 'Salted Caramel or Cocoa',
    flavorsAr: 'كراميل مملح أو كاكاو',
    bestFor: 'Personal treat',
    bestForAr: 'للاستمتاع الشخصي',
  },
  {
    id: '02',
    title: 'Silver Box',
    titleAr: 'الصندوق الفضي',
    subtitle: 'Sharing Collection',
    subtitleAr: 'مجموعة المشاركة',
    img: '/images/silver-box.jpg',
    tagline: '12 pieces of our finest brownies, ideal for sharing with loved ones.',
    taglineAr: '12 قطعة من أجود أنواع البراونيز — مثالي للمشاركة مع الأحباء.',
    description: [
      'The Silver Box brings together 12 pieces of our handcrafted brownies in an elegant silver presentation box. Perfect for sharing at small gatherings, family dinners, or as a thoughtful gift.',
      'Each piece is crafted with the same attention to detail — rich, fudgy centers with that signature crackly top. Mix and match flavors to create your perfect box.',
    ],
    descriptionAr: [
      'يقدم الصندوق الفضي 12 قطعة من البراونيز اليدوي في صندوق تقديم فضي أنيق. مثالي للمشاركة في التجمعات الصغيرة والعشائر العائلية، أو كهدية مدروسة.',
      'كل قطعة مصنوعة بنفس الاهتمام بالتفاصيل — قلب غني وطري مع القمة المقرمشة المميزة. امزج وطابق النكهات لإنشاء صندوقك المثالي.',
    ],
    features: [
      '12 pieces of handcrafted brownies',
      'Mix & match flavors',
      'Elegant silver gift box',
      'Freshly baked to order',
      'Ideal for sharing',
      'Gift-ready packaging',
    ],
    featuresAr: [
      '12 قطعة من البراونيز اليدوي',
      'امزج وطابق النكهات',
      'صندوق هدايا فضي أنيق',
      'مخبوز طازجاً عند الطلب',
      'مثالي للمشاركة',
      'تغليف جاهز للهدايا',
    ],
    price: '75 AED',
    priceNote: 'per box',
    priceNoteAr: 'للصندوق',
    pieces: '12 pieces',
    piecesAr: '12 قطعة',
    flavors: 'Mixed or single flavor',
    flavorsAr: 'نكهات مختلطة أو فردية',
    bestFor: 'Sharing with loved ones',
    bestForAr: 'للمشاركة مع الأحباء',
  },
  {
    id: '03',
    title: 'Golden Box',
    titleAr: 'الصندوق الذهبي',
    subtitle: 'Celebration Collection',
    subtitleAr: 'مجموعة الاحتفالات',
    img: '/images/golden-box.jpg',
    tagline: '24 pieces of indulgence — the ultimate choice for gatherings and celebrations.',
    taglineAr: '24 قطعة من المتعة — الخيار الأمثل للاجتمعات والاحتفالات.',
    description: [
      'The Golden Box is our grandest offering — 24 pieces of handcrafted brownies in a luxurious gold presentation box. The ultimate centerpiece for celebrations, corporate events, or when you want to make a lasting impression.',
      'Each brownie is a testament to our commitment to quality: single-origin cocoa, real butter, farm-fresh eggs, and absolutely no preservatives. Handcrafted with love from our kitchen to your gathering.',
    ],
    descriptionAr: [
      'الصندوق الذهبي هو أرقى عروضنا — 24 قطعة من البراونيز اليدوي في صندوق تقديم ذهبي فاخر. القطعة المركزية المثالية للاحتفالات والفعاليات المؤسسية، أو عندما تريد ترك انطباع دائم.',
      'كل براوني شهادة على التزامنا بالجودة: كاكاو من أصل واحد، زبدة حقيقية، بيض طازج من المزرعة، وخالٍ تماماً من المواد الحافظة. محضّر بالحب من مطبخنا إلى لقائك.',
    ],
    features: [
      '24 pieces of premium brownies',
      'Full flavor assortment',
      'Luxurious gold gift box',
      'Handcrafted with premium ingredients',
      'Perfect for large gatherings',
      'Custom messages available',
    ],
    featuresAr: [
      '24 قطعة من البراونيز الممتازة',
      'مجموعة كاملة من النكهات',
      'صندوق هدايا ذهبي فاخر',
      'محضّر يدوياً بمكونات ممتازة',
      'مثالي للتجمعات الكبيرة',
      'رسائل مخصصة متاحة',
    ],
    price: '125 AED',
    priceNote: 'per box',
    priceNoteAr: 'للصندوق',
    pieces: '24 pieces',
    piecesAr: '24 قطعة',
    flavors: 'Full assortment',
    flavorsAr: 'مجموعة كاملة',
    bestFor: 'Celebrations & events',
    bestForAr: 'للاحتفالات والفعاليات',
  },
]

export const whatsappNumber = '+971547841424'

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }
  return base
}
