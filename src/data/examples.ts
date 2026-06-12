import salon from "../assets/salon.jpg";
import restaurant from "../assets/restaurant.jpg";
import realestate from "../assets/realestate.jpg";
import consulting from "../assets/consulting.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import personal from "../assets/personal.jpg";

export interface ExampleItem {
  image: string;
  sector: { tr: string; en: string };
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
}

export const examples: ExampleItem[] = [
  {
    image: salon,
    sector: { tr: "Güzellik Merkezi", en: "Beauty Studio" },
    title: { tr: "Zarif ve randevu odaklı bir web sitesi", en: "An elegant, booking-focused website" },
    desc: {
      tr: "Hizmetlerinizi şık şekilde gösteren, müşterilerin hızlıca iletişime geçmesini sağlayan modern bir yapı.",
      en: "A modern structure that showcases your services elegantly and lets customers get in touch fast.",
    },
  },
  {
    image: restaurant,
    sector: { tr: "Restoran / Kafe", en: "Restaurant / Café" },
    title: { tr: "Lezzeti daha ilk ekranda hissettiren site", en: "A site that conveys flavor from the first screen" },
    desc: {
      tr: "Menünüzü, atmosferinizi ve konumunuzu müşteriye en net şekilde anlatan etkileyici bir web deneyimi.",
      en: "An impressive web experience that presents your menu, atmosphere and location with total clarity.",
    },
  },
  {
    image: realestate,
    sector: { tr: "Emlak / İnşaat", en: "Real Estate / Construction" },
    title: { tr: "Güven veren kurumsal görünüm", en: "A corporate look that builds trust" },
    desc: {
      tr: "Projelerinizi daha prestijli gösteren, yatırımcı ve müşteride güven oluşturan güçlü bir dijital sunum.",
      en: "A powerful digital presentation that makes your projects look prestigious and earns investor trust.",
    },
  },
  {
    image: consulting,
    sector: { tr: "Danışmanlık", en: "Consulting" },
    title: { tr: "Uzmanlığınızı daha güçlü gösteren yapı", en: "A structure that amplifies your expertise" },
    desc: {
      tr: "Hizmetlerinizi sade, net ve profesyonel şekilde anlatarak güven oluşturan bir web sitesi.",
      en: "A website that builds trust by presenting your services simply, clearly and professionally.",
    },
  },
  {
    image: ecommerce,
    sector: { tr: "Online Satış", en: "Online Brand" },
    title: { tr: "Ürünlerinizi daha değerli gösteren vitrin", en: "A storefront that makes your products look premium" },
    desc: {
      tr: "Ürünlerinizi temiz, modern ve satın alma isteği uyandıran bir düzende sunar.",
      en: "Presents your products in a clean, modern layout that sparks the desire to buy.",
    },
  },
  {
    image: personal,
    sector: { tr: "Kişisel Marka", en: "Personal Brand" },
    title: { tr: "İsminizi güçlü bir markaya dönüştüren sayfa", en: "A page that turns your name into a strong brand" },
    desc: {
      tr: "Kim olduğunuzu, ne sunduğunuzu ve neden tercih edilmeniz gerektiğini net şekilde anlatır.",
      en: "Tells clearly who you are, what you offer and why you should be the obvious choice.",
    },
  },
];
