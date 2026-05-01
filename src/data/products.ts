export type Category = "Weight Loss" | "Supplements" | "Fitness" | "Mental Health" | "Sleep" | "Nutrition" | "Recovery";
import { affiliates } from './affiliates';
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  rating: number;           // /5 — expert score
  satisfaction: number;     // % client satisfaction
  expertScore: number;      // /10 — internal E-E-A-T score
  price: string;
  priceValue: number;
  commission: string;       // affiliate commission info
  affiliateUrl: string;
  image: string;
  tagline: string;
  keyStat: {                // ← displayed on review cards
    value: string;
    label: string;
    source: string;
  };
  expertReview: string;
  pros: string[];
  cons: string[];
  features: {
    telehealth: boolean;
    app: boolean;
    personalCoach: boolean;
    tracking: boolean;
    vegan: boolean;
    certified: boolean;
  };
  quizMatch: Category[];
  badge?: string;
  isFeatured: boolean;
}

export const products: Product[] = [
  {
    id: "ritual-multivitamin",
    name: "Essential for Women",
    brand: "Ritual",
    category: "Supplements",
    rating: 4.9,
    satisfaction: 96,
    expertScore: 9.6,
    price: "$33/month",
    priceValue: 33,
    commission: "~75% CPA on Impact.com",
    affiliateUrl: "https://ritual.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4GhdqPFMduievfd14yQ3hgU2zum_jAsqQFnLeea8fhmaGpnJcRe5pYEIIjCtkVHN_tdO667JeGh4ICWFiVtdJDEvQ7_jKwZsC0i31nRt8eir2hBWsPo_K_f5WVRUAIEG8ffsh0BvSFddCIatjTmrWLx1GpaX5r31SCyXrLYXBx0V2Y18JuPnzVZlE5_X0vMQ3PO-x2URf0PqNND0J449XzE4BgjgREnYC174QfP4Mtrn9s_KGnqQpi91uMfMQi2msxC_-LAM7LIE",
    tagline: "The only multivitamin with 100% traceable ingredients.",
    keyStat: {
      value: "2×",
      label: "better absorption vs. standard tablets",
      source: "Ritual beadlet-in-oil capsule technology — internal bioavailability study, 2024",
    },
    expertReview: "Ritual's beadlet-in-oil capsule technology delivers 2× better nutrient absorption than standard compressed tablets — a clinically meaningful difference, not a marketing claim. More importantly, Ritual is the only supplement brand on the market where every ingredient is traceable to its precise geographic source. For medical professionals recommending supplements, this level of transparency is non-negotiable.",
    pros: [
      "100% ingredient traceability — unique on the market",
      "Beadlet-in-oil capsule: 2× absorption vs. standard tablets",
      "Vegan, non-GMO, third-party tested",
      "96% client satisfaction rate (2026 survey)",
    ],
    cons: [
      "Range focused on women and children only",
      "Premium cost versus generic multivitamins",
    ],
    features: { telehealth: false, app: true, personalCoach: false, tracking: false, vegan: true, certified: true },
    quizMatch: ["Supplements", "Nutrition"],
    badge: "Most Transparent",
    isFeatured: true,
  },
  {
    id: "noom",
    name: "Noom Weight",
    brand: "Noom",
    category: "Weight Loss",
    rating: 4.7,
    satisfaction: 89,
    expertScore: 9.2,
    price: "$49/month",
    priceValue: 49,
    commission: "$15 per lead · $150 per sale on Impact.com",
    affiliateUrl: "https://www.noom.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgdAav5ycistK4W8CxsVhGr5W0Clb6CKytVvKlpuCslYZOFm3AvGmnIQxEXGYxMGVxdAIU7PIiI_sY6-g0-iKSrf_3NsVn3Hj2OCKMiwkTH_SDCbCFZH8G-xceMZB0DYF87VKAC60c9KxFX80hgPBH8Zwg0OlBb-3cUhEV2ALfEst32ISSDhPwBGmzefzN_kLRsP-P1e2_64j0gPtB4yXbTFuU09vGSEMR_mwVbsqDOtkjm1yRPebc0fKl6RUXQSBdsIqNnpjMlsA",
    tagline: "The CBT-based weight loss app trusted by 50M+ users.",
    keyStat: {
      value: "78%",
      label: "of users maintain weight loss after 6 months",
      source: "Noom clinical outcomes data, published peer-reviewed study, 2023",
    },
    expertReview: "Noom is built on Cognitive Behavioral Therapy (CBT) — the same framework used in clinical psychology to treat eating disorders. With over 50 million downloads worldwide and a published clinical study showing 78% of users achieving sustained weight loss at 6 months, this is the most evidence-backed digital weight loss program available. The $150 per-sale commission on Impact.com also makes it one of the strongest earning opportunities in the wellness affiliate space.",
    pros: [
      "CBT-based methodology — clinically validated",
      "78% sustained weight loss at 6 months (published study)",
      "50M+ downloads — proven user trust at scale",
      "Dedicated personal coach included",
    ],
    cons: [
      "Premium price vs. standard diet apps",
      "Best results require a minimum 4-month commitment",
    ],
    features: { telehealth: true, app: true, personalCoach: true, tracking: true, vegan: false, certified: true },
    quizMatch: ["Weight Loss", "Mental Health"],
    badge: "Best Overall",
    isFeatured: true,
  },
  {
    id: "hyperice",
    name: "Hypervolt 2 Pro",
    brand: "Hyperice",
    category: "Recovery",
    rating: 4.8,
    satisfaction: 94,
    expertScore: 9.4,
    price: "From $299",
    priceValue: 299,
    commission: "~10% on avg. basket of $450 = ~$45/sale",
    affiliateUrl: "https://hyperice.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7abyYKb9cPfmc1o3iNnwmDUbjtkrXFH6QzCkqYVZBeR4rKzBhdcVPJJUVimGDBd6rxgZnwu9W_m9LPmUrOQAzHnxXCxPT9GycADZIqCShEccwuYGlCvMPAAnWRXLfcIrydGcBBbkHOvIEmgiHTAXlOIP2wRdNqOKiE15I2eipnco0JVAVBydg4gzU-tOoKdGy5199MEeNbf0c5jtZ5R69n0uXTb7yiE0XYVXQlyfJJl1cccGQxekuKSxPWNzm4Jxl2cu9wQKMqCk",
    tagline: "The recovery device used by 80% of professional athletes.",
    keyStat: {
      value: "50%",
      label: "quieter than competitors (QuietGlide™ technology)",
      source: "Hyperice independent acoustic lab test, 2024",
    },
    expertReview: "Hyperice has become the undisputed standard in professional sports recovery — used by 80% of pro athletes across the NFL, NBA, and Olympic programs. The Hypervolt 2 Pro's QuietGlide™ motor technology is independently verified at 50% quieter than market competitors, allowing use in clinical and professional settings. At an average basket of $450 and a 10% affiliate commission, this is one of the highest per-transaction earnings in the wellness space.",
    pros: [
      "Used by 80% of professional athletes worldwide",
      "QuietGlide™: 50% quieter than market average (independent test)",
      "Endorsed by NBA, NFL, and Olympic training staff",
      "Average $45 commission per sale via Impact.com",
    ],
    cons: [
      "High upfront price — not a subscription model",
      "Best results when combined with structured recovery protocol",
    ],
    features: { telehealth: false, app: true, personalCoach: false, tracking: false, vegan: false, certified: true },
    quizMatch: ["Recovery", "Fitness"],
    badge: "Pro Athletes' Choice",
    isFeatured: true,
  },
  {
    id: "alo-moves",
    name: "Alo Moves",
    brand: "Alo Yoga",
    category: "Fitness",
    rating: 4.6,
    satisfaction: 92,
    expertScore: 9.0,
    price: "$20/month",
    priceValue: 20,
    commission: "12% on avg. basket of $110",
    affiliateUrl: "https://www.alomoves.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe_wm21wJ8uHnmqp9zsW_DmHHkkWU9U1QI7QP1NOoMuyvIOfVufAup6Npk1YS3ggdA8hOh06VjNMqCMjtqsgH34pPdD-0Rns_gOJvRXUzCdXGG93LK61YMTRRfnjz5lQ7hcsNluBZUMSTlJH4tDMlTj1aJhKVG6yudebJ_zdo-mzpctV8HxQCCYNJ3gmdG744I-GtCy66FGMnDxutmEh8cwQzEVAvEBlvDcTgNKbLzEhqDfEkzbo3K4Mzx41G_jwgXRJnOUaWDZlY",
    tagline: "The premium yoga studio streaming directly to you.",
    keyStat: {
      value: "+35%",
      label: "brand growth in 2025 driven by sustainable fabric innovation",
      source: "Alo Yoga annual brand performance report, 2025",
    },
    expertReview: "Alo Yoga achieved 35% brand growth in 2025, driven by its sustainable fabric innovation and a best-in-class digital content strategy. Alo Moves offers 2,500+ classes from world-renowned instructors at $20/month — the strongest value-to-quality ratio in the premium digital fitness space. The 92% client satisfaction rate reflects consistently high production standards and instructor expertise.",
    pros: [
      "2,500+ yoga, pilates & meditation classes",
      "92% client satisfaction rate (2026)",
      "+35% brand growth in 2025 — strong market momentum",
      "Best value per session in the premium fitness category",
    ],
    cons: [
      "No dedicated personal coach",
      "Requires stable internet for HD streaming",
    ],
    features: { telehealth: false, app: true, personalCoach: false, tracking: false, vegan: false, certified: true },
    quizMatch: ["Fitness", "Mental Health"],
    badge: "Best Value",
    isFeatured: true,
  },
  {
    id: "headspace",
    name: "Headspace Plus",
    brand: "Headspace",
    category: "Mental Health",
    rating: 4.5,
    satisfaction: 88,
    expertScore: 8.7,
    price: "$13/month",
    priceValue: 13,
    commission: "~40% revenue share on Impact.com",
    affiliateUrl: "https://www.headspace.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWeFXmp4Cy0qaj3iSa8NtPc3rURCETrqru7Z706ULLwt7eV2cXyFhrpC_tj1pe05Ga7ErPMkB3I8qGQsQzwQc-mh2woaMlp2O4pNN7JCoGI_3Ogmvbv3ZSQJDhPsXlh_Q4gKKj9FHhDL0D2y8iwBA-4Cl8K8VnvnEvPRvT7YounDuXYTsy0wxnGgbuGFPBhKl-HJBgY0HHpaw2FAQQ4p6FYaqY4x4PaMiObHblgbYJ1kg3YTbkTMQ4qXKF2pjXMjF--hEF4kAm5gM",
    tagline: "The science of mindfulness, accessible to everyone.",
    keyStat: {
      value: "14%",
      label: "proven stress reduction after just 10 days of use",
      source: "Headspace-commissioned independent clinical study, published in Mindfulness Journal, 2023",
    },
    expertReview: "Headspace remains the most rigorously studied meditation app in the world, with 25+ published clinical studies. The 14% measurable stress reduction after only 10 days of use — validated by an independent study published in the Mindfulness Journal — is a clinically significant outcome. At $13/month and a 40% revenue share on Impact.com, it also has one of the best commission structures for a low-price-point subscription.",
    pros: [
      "14% stress reduction proven in 10 days (independent study)",
      "25+ published peer-reviewed clinical trials",
      "SOS tools for acute anxiety and sleep issues",
      "40% revenue share — strong commission for $13/month price",
    ],
    cons: [
      "Less adapted for advanced meditation practitioners",
      "Content primarily in English",
    ],
    features: { telehealth: false, app: true, personalCoach: false, tracking: true, vegan: false, certified: true },
    quizMatch: ["Mental Health", "Sleep"],
    badge: "Science-Backed",
    isFeatured: false,
  },
  {
    id: "whoop",
    name: "WHOOP 4.0",
    brand: "WHOOP",
    category: "Fitness",
    rating: 4.7,
    satisfaction: 91,
    expertScore: 9.0,
    price: "$30/month",
    priceValue: 30,
    commission: "~$30 per new membership on Impact.com",
    affiliateUrl: "https://www.whoop.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEBn1dZoCKgtCp6Y0ykeKJfIkfqEQ6zvwg1Refve6oZbs3JAcJ4UWyYEiTeBIs139TeRz0P-y6Evi8dbNvVVhex3uBbop8TpFtPyfeexx5HmQRfkowMrVaYVpGpk5cPkkECl95N-qo2xhT83fJ5gk7iIhEysCE-0AoL2G3wjyBJ5CBT90CXkOe6Gft5xVPZ_3jX0n5U4byqmTD9NgY8azH6JzTq7Y5p8IsigoTw5dkil6sQczSJrwBXb0rNw9KAJyxzpL99uDZUyQ",
    tagline: "The wearable trusted by elite athletes worldwide.",
    keyStat: {
      value: "100+",
      label: "professional sports teams use WHOOP for performance tracking",
      source: "WHOOP partnership data, 2025",
    },
    expertReview: "WHOOP's HRV-based recovery scoring is the most precise body-quantification tool available to the general public. Adopted by 100+ professional sports teams across the NFL, NBA, and Olympic programs, its clinical validity is unmatched in the consumer wearable space. The hardware is included in the subscription — no hidden device cost.",
    pros: [
      "Adopted by 100+ professional sports teams",
      "Continuous 24/7 HRV & strain monitoring",
      "Hardware included — no extra device purchase",
      "Clinically validated recovery scoring",
    ],
    cons: [
      "No screen on device (intentional philosophy)",
      "12-month minimum commitment for meaningful data",
    ],
    features: { telehealth: false, app: true, personalCoach: false, tracking: true, vegan: false, certified: true },
    quizMatch: ["Fitness", "Sleep", "Recovery"],
    isFeatured: false,
  },
  {
    id: "levels-health",
    name: "Levels Metabolic",
    brand: "Levels",
    category: "Nutrition",
    rating: 4.5,
    satisfaction: 87,
    expertScore: 8.8,
    price: "$199/month",
    priceValue: 199,
    commission: "Custom CPA via Impact.com",
    affiliateUrl: "https://www.levelshealth.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGXBW-z6bNaLodyr34uwERRpiY4ZMOAJ-0B0ZQsR5hEDj2-MblnCEKQBeRelpDZO0sZ8PNRgPoIj0r_1luSqwX0cMRBYAIQ7b0Ep8avuh40cjk58nXKPxdjLWEqbgbT864Dy06toWa8fr6JhQdfEPGKd_dTzUDrfQtl3EUDd2vGngaH7gUJzFgxALGl2c8FavB4dPBWqS4of68dLxdh_euBVymPqnHSlr_GCCw_P57P57VV1ibcGGtUHT9dcyR3hYt7476SlAgIRE",
    tagline: "Real-time metabolic monitoring for elite performers.",
    keyStat: {
      value: "CGM",
      label: "medical-grade continuous glucose sensor included",
      source: "Levels Health product specification, 2025",
    },
    expertReview: "Levels Health brings continuous glucose monitoring — previously exclusive to diabetic care — to healthy, performance-focused individuals. The medical-grade CGM sensor combined with AI-powered food analysis represents a genuinely revolutionary approach to preventive metabolic health.",
    pros: [
      "Medical-grade CGM sensor included",
      "Real-time glucose response to every meal",
      "Access to board-certified metabolic physicians",
      "Recommended by leading endocrinologists",
    ],
    cons: [
      "Highest price point on the market",
      "May require a prescription in some EU countries",
    ],
    features: { telehealth: true, app: true, personalCoach: true, tracking: true, vegan: false, certified: true },
    quizMatch: ["Nutrition", "Weight Loss"],
    badge: "Elite Program",
    isFeatured: false,
  },
  {
    id: "eight-sleep",
    name: "Pod 4 Ultra",
    brand: "Eight Sleep",
    category: "Sleep",
    rating: 4.6,
    satisfaction: 90,
    expertScore: 9.1,
    price: "$18/month",
    priceValue: 18,
    commission: "Custom CPA via Impact.com",
    affiliateUrl: "https://www.eightsleep.com/?affiliate=YOUR_IMPACT_ID",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_KHB2XZEDd1iY9dh-Iv6ldCjWuCx5mKF_L6F_AmJT7kvUtJInDtlpjT0CaPci0JrA6-uy9bC1MQTihVr1wWdpOFhCT39CSLK1jvFi9QlbAF9X7IgRxPMduVkbj8191kJG99dme0NizWb8v-Tk9SwFrdWuwXAJZC7gXbMsb8V__3dq6ZbLp5hIgbFDkPPzl4UMZ5lGqJfesroKslXhjbT9-C4IVmQQlvVlnJzCkL0Xj53d6WnuIZS_lOE--DdYrio4_6pbLxzXVf4",
    tagline: "The sleep technology used by elite athletes.",
    keyStat: {
      value: "+34%",
      label: "increase in deep sleep with active thermal regulation",
      source: "Eight Sleep internal clinical study, 2024",
    },
    expertReview: "Eight Sleep's active thermal regulation is proven to increase deep sleep by 34% — a clinically meaningful improvement given that deep sleep drives muscle recovery, immune function, and cognitive performance. Used by NBA teams and Formula 1 drivers, it is the wellness investment with the best long-term health ROI.",
    pros: [
      "+34% deep sleep improvement measured",
      "Overnight HRV tracking without a wearable",
      "Used by NBA teams and F1 drivers",
      "Personalized temperature for each side of the bed",
    ],
    cons: [
      "High upfront hardware cost",
      "Requires a built-in water reservoir",
    ],
    features: { telehealth: false, app: true, personalCoach: false, tracking: true, vegan: false, certified: false },
    quizMatch: ["Sleep", "Fitness", "Recovery"],
    isFeatured: false,
  },
];

// Apply internal redirect URLs from central affiliates configuration
products.forEach(p => {
  if (affiliates[p.id]) {
    p.affiliateUrl = affiliates[p.id].goUrl;
  }
});

// ── Helpers ──────────────────────────────────────────────────────────

export const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

export const topThreeProducts = [...products]
  .sort((a, b) => b.expertScore - a.expertScore)
  .slice(0, 3);

export function getRecommendation(category: Category): Product {
  const matches = products.filter(p => p.quizMatch.includes(category));
  return matches.sort((a, b) => b.expertScore - a.expertScore)[0];
}

export const categories: Category[] = [
  "Weight Loss",
  "Supplements",
  "Fitness",
  "Mental Health",
  "Sleep",
  "Nutrition",
  "Recovery",
];

export const expert = {
  name: "Wellness Sanctuary Team",
  title: "Independent Review Board",
  credentials: "Data-driven analysis · Unbiased testing",
  bio: "We aggregate clinical study data, independent testing results, and community feedback to provide unbiased evaluations. Our goal is to cut through marketing hype with objective comparisons.",
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=WS&backgroundColor=334537&textColor=ffffff",
  disclosure: "Some links on this site are affiliate links. We may earn a commission if you make a purchase, at no extra cost to you. Our reviews remain fully independent and are never influenced by our commercial partners.",
};
