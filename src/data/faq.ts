export interface FaqItem {
  q: { tr: string; en: string };
  a: { tr: string; en: string };
}

export const faqItems: FaqItem[] = [
  {
    q: { tr: "Web sitesi kaç günde teslim edilir?", en: "How long does it take to deliver a website?" },
    a: {
      tr: "Kapsama göre değişir: landing page ortalama 5-10 gün, çok bölümlü premium siteler 2-4 hafta, 3D showroom projeleri 3-6 hafta sürer. Brief sonrası net bir teslim takvimi paylaşıyoruz.",
      en: "It depends on scope: landing pages take 5-10 days on average, multi-section premium sites 2-4 weeks, and 3D showroom projects 3-6 weeks. We share a clear delivery schedule after the brief.",
    },
  },
  {
    q: { tr: "3D animasyonlu site her cihazda çalışır mı?", en: "Do 3D animated sites work on every device?" },
    a: {
      tr: "Evet. 3D sahneleri mobil cihazlar için otomatik olarak hafifletiyoruz; düşük donanımlı cihazlarda performans korunur, deneyim bozulmaz.",
      en: "Yes. We automatically optimize 3D scenes for mobile devices; performance is preserved on lower-end hardware without breaking the experience.",
    },
  },
  {
    q: { tr: "Domain ve hosting dahil mi?", en: "Are domain and hosting included?" },
    a: {
      tr: "Paketlere göre değişir. İsterseniz domain ve hosting kurulumunu biz üstleniriz, isterseniz mevcut altyapınıza teslim ederiz. Ücretsiz yayın seçenekleri de sunuyoruz.",
      en: "It varies by package. We can handle domain and hosting setup for you, or deliver to your existing infrastructure. We also offer free publishing options.",
    },
  },
  {
    q: { tr: "GitHub Pages ile ücretsiz yayın yapılabilir mi?", en: "Can the site be published for free with GitHub Pages?" },
    a: {
      tr: "Evet. İsterseniz siteniz domain almadan GitHub Pages üzerinde kullanıcıadı.github.io/proje-adı formatında yayınlanabilir.",
      en: "Yes. If you prefer, your site can be published on GitHub Pages without buying a domain, in the username.github.io/project-name format.",
    },
  },
  {
    q: { tr: "E-ticaret sitesi de yapıyor musunuz?", en: "Do you also build e-commerce sites?" },
    a: {
      tr: "Evet. Ürün vitrini, sepet ve ödeme akışı dahil satışa hazır e-ticaret siteleri tasarlıyoruz. İhtiyaca göre hazır altyapı entegrasyonu veya özel çözüm sunuyoruz.",
      en: "Yes. We design sales-ready e-commerce sites including product showcase, cart and checkout flows. Depending on your needs, we offer platform integration or custom solutions.",
    },
  },
  {
    q: { tr: "Tasarım bana özel mi olacak?", en: "Will the design be unique to me?" },
    a: {
      tr: "Kesinlikle. Hazır şablon kullanmıyoruz. Markanızın kimliğine, hedef kitlenize ve sektörünüze özel sıfırdan tasarım üretiyoruz.",
      en: "Absolutely. We don't use templates. Every design is created from scratch, tailored to your brand identity, audience and industry.",
    },
  },
];
