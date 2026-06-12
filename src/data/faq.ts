export interface FaqItem {
  q: { tr: string; en: string };
  a: { tr: string; en: string };
}

export const faqItems: FaqItem[] = [
  {
    q: { tr: "Web sitesi kaç günde hazırlanır?", en: "How long does it take to build a website?" },
    a: {
      tr: "Kapsama göre değişir: tek sayfalık tanıtım siteleri ortalama 5-10 gün, çok bölümlü özel siteler 2-4 hafta sürer. Görüşme sonrası net bir teslim takvimi paylaşırız.",
      en: "It depends on scope: single-page sites take 5-10 days on average, multi-section custom sites 2-4 weeks. We share a clear delivery schedule after our first conversation.",
    },
  },
  {
    q: { tr: "Mevcut sitem yenilenebilir mi?", en: "Can my existing website be redesigned?" },
    a: {
      tr: "Evet. Mevcut sitenizi inceleyip nelerin korunacağına ve nelerin yenileneceğine birlikte karar veririz. İçerikleriniz kaybolmaz, görünüm baştan tasarlanır.",
      en: "Yes. We review your current site and decide together what to keep and what to renew. Your content stays — the look is redesigned from scratch.",
    },
  },
  {
    q: { tr: "Mobilde düzgün çalışır mı?", en: "Will it work properly on mobile?" },
    a: {
      tr: "Kesinlikle. Tasarımlarımız önce mobil düşünülerek hazırlanır. Siteniz telefon, tablet ve bilgisayarda aynı kalitede görünür.",
      en: "Absolutely. Our designs are built mobile-first. Your site looks equally polished on phones, tablets and desktops.",
    },
  },
  {
    q: { tr: "Domain ve yayınlama konusunda yardımcı oluyor musunuz?", en: "Do you help with domains and publishing?" },
    a: {
      tr: "Evet. Alan adı seçiminden sitenin yayına alınmasına kadar tüm süreci sizin adınıza yönetiriz. Siz hiçbir teknik işlemle uğraşmazsınız.",
      en: "Yes. From choosing a domain to taking the site live, we manage the whole process for you. You never deal with anything technical.",
    },
  },
  {
    q: { tr: "Teknik bilgim yok, yine de süreç ilerler mi?", en: "I have no technical knowledge — can we still work together?" },
    a: {
      tr: "Elbette. Müşterilerimizin çoğu teknik bilgiye sahip değildir. Sizden sadece işletmenizi anlatmanızı isteriz; gerisini biz hallederiz.",
      en: "Of course. Most of our clients aren't technical. All we ask is that you tell us about your business — we handle the rest.",
    },
  },
  {
    q: { tr: "Tasarım bana özel mi olacak?", en: "Will the design be unique to me?" },
    a: {
      tr: "Evet. Hazır şablon kullanmıyoruz. Renkler, yazılar, görseller ve sayfa akışı işletmenize ve müşteri kitlenize göre sıfırdan tasarlanır.",
      en: "Yes. We don't use templates. Colors, typography, imagery and page flow are designed from scratch for your business and your customers.",
    },
  },
  {
    q: { tr: "Ücretsiz yayınlama seçeneği var mı?", en: "Is there a free publishing option?" },
    a: {
      tr: "Evet. Uygun projelerde siteyi domain almadan ücretsiz yayınlama seçenekleriyle de hazırlayabiliriz. Dilerseniz daha sonra kendi alan adınıza da bağlanabilir.",
      en: "Yes. For suitable projects, we can prepare your site with free publishing options — no domain purchase needed. It can later be connected to your own domain whenever you like.",
    },
  },
];
