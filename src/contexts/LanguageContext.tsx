import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    en: string;
    ur: string;
    hi: string;
  };
}

const translations: Translations = {
  welcome: {
    en: "Welcome to Path Guru",
    ur: "پاتھ گرو میں خوش آمدید",
    hi: "पाथ गुरु में आपका स्वागत है"
  },
  dashboard: {
    en: "Dashboard",
    ur: "ڈیش بورڈ",
    hi: "डैशबोर्ड"
  },
  colleges: {
    en: "Colleges",
    ur: "کالجز",
    hi: "कॉलेज"
  },
  ngos: {
    en: "NGO Support",
    ur: "این جی او سپورٹ",
    hi: "एनजीओ सहायता"
  },
  resources: {
    en: "Resources",
    ur: "وسائل",
    hi: "संसाधन"
  },
  profile: {
    en: "Profile",
    ur: "پروفائل",
    hi: "प्रोफाइल"
  },
  assessment: {
    en: "Assessment",
    ur: "تشخیص",
    hi: "मूल्यांकन"
  },
  careers: {
    en: "Careers",
    ur: "کیریئرز",
    hi: "करियर"
  },
  timeline: {
    en: "Timeline",
    ur: "ٹائم لائن",
    hi: "समयसीमा"
  },
  supportCenters: {
    en: "Support Centers",
    ur: "سپورٹ سینٹرز",
    hi: "सहायता केंद्र"
  },
  studentsGuided: {
    en: "Students Guided",
    ur: "رہنمائی شدہ طلبا",
    hi: "छात्र मार्गदर्शन"
  },
  collegesListed: {
    en: "Colleges Listed",
    ur: "درج کالجز",
    hi: "सूचीबद्ध कॉलेज"
  },
  ngoPartners: {
    en: "NGO Partners",
    ur: "این جی او پارٹنرز",
    hi: "एनजीओ साझेदार"
  },
  successRate: {
    en: "Success Rate",
    ur: "کامیابی کی شرح",
    hi: "सफलता दर"
  },
  getStarted: {
    en: "Get Started",
    ur: "شروع کریں",
    hi: "शुरू करें"
  },
  searchColleges: {
    en: "Search Colleges",
    ur: "کالجز تلاش کریں",
    hi: "कॉलेज खोजें"
  },
  viewDetails: {
    en: "View Details",
    ur: "تفصیلات دیکھیں",
    hi: "विवरण देखें"
  },
  collaborate: {
    en: "Collaborate",
    ur: "تعاون کریں",
    hi: "सहयोग करें"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};