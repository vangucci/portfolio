'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaPalette, FaVideo, FaChevronDown, FaServer, FaDatabase, FaCode, FaCertificate, FaPhone, FaWhatsapp, FaEnvelope, FaUser, FaQrcode, FaBars, FaTimes, FaTools, FaHandsHelping, FaLaptop, FaGlobe } from 'react-icons/fa';

const skillsData = {
  systemes: [
    { name: 'Windows Server 2012/2016/2022', level: 95 },
    { name: 'Windows Client (8, 10, 11)', level: 95 },
    { name: 'Linux (Debian, Ubuntu, Kali)', level: 75 },
    { name: 'Active Directory, DHCP, DNS', level: 85 },
    { name: 'VMware ESXi', level: 70 },
    { name: 'VirtualBox', level: 85 },
    { name: 'Backup Exec', level: 70 },
    { name: 'Kali Linux', level: 60 },
  ],
  design: [
    { name: 'Canva', level: 90 },
    { name: 'Montage vidéo (CapCut)', level: 85 },
    { name: 'Création affiches/logos', level: 95 },
    { name: 'Microsoft Designer', level: 80 },
  ],
  dev: [
    { name: 'HTML, CSS', level: 85 },
    { name: 'Arduino, Arduino IOT', level: 70 },
    { name: 'Node Red', level: 65 },
  ],
  langages: [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'C++',
    'Java',
  ],
  database: [
    { name: 'MySQL', level: 85 },
    { name: 'MariaDB', level: 80 },
    { name: 'Oracle', level: 70 },
  ],
  autres: [
    { name: 'Odoo (Installation & Configuration)', level: 85 },
    { name: 'Dolibarr (Installation & Configuration)', level: 70 },
    { name: 'WordPress', level: 80 },
    { name: 'Microsoft Office', level: 95 },
    { name: 'Web Acapella', level: 75 },
  ],
  services: [
    'Dépannage informatique',
    'Installation & configuration serveur',
    'Formation utilisateurs',
    'Gestion de parc informatique',
    'Installation cameras de surveillance',
    'Création de supports graphiques (affiches, flyers)',
    'Montage vidéo',
    'Gestion des backups',
    'Implémentation DHCP, DNS, Active Directory',
    'Configuration points d\'accès WiFi',
    'Mise en place de Visio-Conférence',
    'Déploiement VMware ESXi',
    'Création site web (HTML/CSS)',
    'Community Management',
    'Maintenance logicielle',
    'Installation & configuration imprimantes',
  ],
  logiciels: [
    'TeamViewer / AnyDesk',
    'Microsoft 365',
    'Microsoft Teams',
    'Zoom',
    'Google Drive / OneDrive',
    'VSCode',
    'IVMS',
  ],
};

const translations = {
  fr: {
    nav: ['A propos', 'Competences', 'Services', 'Logiciels', 'Projets', 'Certificats', 'Experience', 'Contact'],
    heroTitle: 'Portfolio',
    heroName: 'Modibo Traore',
    heroRole: 'Administrateur Système et Base de données',
    heroSubtitle: 'Assistant IT au Radisson Collection Hôtel Bamako',
    heroDesc: 'Administrateur Systèmes & Base de données - Design visuel, montage vidéo, développement web.',
    btnContact: 'Me contacter',
    btnCV: 'Télécharger CV',
    btnSkills: 'Competences',
    about: 'A propos',
    skills: 'Competences',
    services: 'Services',
    logiciels: 'Logiciels maîtrisés',
    projets: 'Projets',
    certificats: 'Certificats',
    experience: 'Experience',
    contact: 'Me contacter',
    languages: 'Langues',
    interests: 'Centres d\'intérêt',
    englishLevel: '(A1)',
    formation: 'Formation',
    sysNetwork: 'Systèmes & Réseaux',
    design: 'Design',
    dev: 'Développement',
    database: 'Base de données',
    autres: 'Autres',
    langages: 'Langages de programmation',
    viewProject: 'Découvrir le projet',
  },
  en: {
    nav: ['About', 'Skills', 'Services', 'Software', 'Projects', 'Certificates', 'Experience', 'Contact'],
    heroTitle: 'Portfolio',
    heroName: 'Modibo Traore',
    heroRole: 'System and Database Administrator',
    heroSubtitle: 'IT Assistant at Radisson Collection Hotel Bamako',
    heroDesc: 'Systems Administrator & Database - Visual design, video editing, web development.',
    btnContact: 'Contact Me',
    btnCV: 'Download CV',
    btnSkills: 'Skills',
    about: 'About',
    skills: 'Skills',
    services: 'Services',
    logiciels: 'Software',
    projets: 'Projects',
    certificats: 'Certificates',
    experience: 'Experience',
    contact: 'Contact',
    languages: 'Languages',
    interests: 'Interests',
    englishLevel: '(A1)',
    formation: 'Education',
    sysNetwork: 'Systems & Networks',
    design: 'Design',
    dev: 'Development',
    database: 'Database',
    autres: 'Others',
    langages: 'Programming Languages',
    viewProject: 'Discover the project',
  }
};

const experiences = [
  {
    title: 'Assistant IT',
    company: 'Radisson Collection Hôtel, Bamako',
    period: 'Août 2024 - Present',
    description: [
      'Analyse et définition des besoins en ressources informatiques',
      'Gestion de l\'ensemble du parc informatique',
      'Monitoring des installations informatiques',
      'Installation, configuration et mise à jour des systèmes',
      'Assistance des utilisateurs sur les applications métier',
      'Assistance des clients dans les chambres et salles de fêtes',
      'Installation et assistance visioconférence',
    ],
  },
  {
    title: 'IT & Gestionnaire de Stock',
    company: 'Luxury Palace Hôtel, Bamako',
    period: 'Décembre 2023 - Août 2024',
    description: [
      'Gestion de stock (magasin, bar, cuisine)',
      'Gestion du parc informatique',
      'Installation, configuration et mise à jour des systèmes',
      'Configuration des TV et téléphones en chambre',
      'Formation des nouveaux utilisateurs (Word, Excel, Odoo)',
      'Installation et maintenance des caméras',
      'Installation de nouveaux postes (ordinateurs, imprimantes)',
      'Assistance utilisateurs et clients',
      'Élaboration des listes d\'approvisionnement',
    ],
  },
  {
    title: 'Décorateur d\'événement',
    company: 'Handmade Design',
    period: '2014 - 2023',
    description: [
      'Service traiteur',
      'Décoration lumineuse et florale',
      'Location de salles d\'événements (Radisson Blu, Sheraton)',
      'Location de chaises et bâches',
      'Sonorisation',
      'Organisation complète d\'événements',
      'Conception de maquettes et logos',
      'Impression d\'affiches',
    ],
  },
];

const projects = [
  { 
    title: 'Digitalisation du Menu - Luxury Palace', 
    description: 'Conception et création complète d\'un menu digital interactif via QR code pour l\'hôtel Luxury Palace. Solution moderne permettant aux clients de parcourir le menu depuis leur smartphone sans application. Includes QR codes for restaurant and rooms.',
    icon: FaQrcode, 
    color: 'from-purple-500 to-indigo-500',
    link: 'https://sites.google.com/view/menuluxurypalace/accueil',
    tags: ['Google Sites', 'QR Code', 'UI/UX', 'Photographie'],
    images: [
      '/qrcode/Qr Code Luxury Palace Restaurant.png',
      '/qrcode/Qr Code Luxury Palace Chambre.png'
    ]
  },
  { 
    title: 'Affiches & Design', 
    description: 'Création d\'affiches, flyers et supports visuels pour événements (Mariages, Eid, Saint-Valentin, Ramadan, réveillons, anniversaires). Conception de A à Z avec Canva.',
    icon: FaPalette, 
    color: 'from-pink-500 to-rose-500',
    tags: ['Canva', 'Design Graphique', 'Photographie', 'Événements'],
    images: [
      '/affiches/Affiche MENU diner réveillon 2025  (1).png',
      '/affiches/Affiche Menu Saint Valentin 2026.png',
      '/affiches/Bonne fête d\'Eid el Fitr (1080 x 1080 px).png',
      '/affiches/Diner Reveillon 2025 (1).png',
      '/affiches/Les délices d\'Hawa crêpes.png.png',
      '/affiches/pack Bien Etre et Saveur.png',
      '/affiches/Saint Valentin 2026.png',
      '/affiches/WhatsApp Image 2026-03-01 at 14.32.36.jpeg'
    ]
  },
  { title: 'Montage video', description: 'Production video', icon: FaVideo, color: 'from-blue-500 to-cyan-500' },
];

const certificates = [
  { title: 'IT Customer Support Basics', link: 'https://www.credly.com/badges/2346ee2f-2b61-4dee-b956-9f0adae5b282/' },
  { title: 'Digital Awareness', link: 'https://www.credly.com/badges/0441fc69-86fc-4290-9385-bff8f0f5bf91/' },
  { title: 'Ethical Hacker', link: 'https://www.credly.com/badges/93f25ebe-b122-4540-8f52-8cae1e9963c1/' },
  { title: 'AWS Foundations - Premiers pas avec les éléments essentiels du nuage', file: '/certificats/Certificats/AWS Foundations  Premiers pas avec les elements essentiels du nuage AWS (Français)  AWS Foundations_ Getting Started with the AWS Cloud Essentials (French)_AWS Course Completion Certificate.pdf' },
  { title: 'Cloud Essentials Learning Plan', file: '/certificats/Certificats/Cloud Essentials Learning Plan (French)_AWS Learning Plan Completion Certificate.pdf' },
  { title: 'Computer Hardware Basics', file: '/certificats/Certificats/Computer_Hardware_Basics_Badge20241210-28-5z3vgl.pdf' },
  { title: 'Creating Digital Content', file: '/certificats/Certificats/CreatingDigitalContent20250107-25-iuf8sb.pdf' },
  { title: 'Démarrer avec l\'acquisition dans le nuage', file: '/certificats/Certificats/Démarrer avec l\'acquisition dans le nuage (Français) | Getting Started with Cloud Acquisition (French)_AWS Course Completion Certificate.pdf' },
  { title: 'Gestion de la facturation et des coûts AWS', file: '/certificats/Certificats/Gestion de la facturation et des coûts AWS_AWS Course Completion Certificate.pdf' },
  { title: 'Introduction to Cybersecurity', file: '/certificats/Certificats/Introduction_to_Cybersecurity_Badge20241210-27-bdzuum.pdf' },
  { title: 'Introduction to Data Science', file: '/certificats/Certificats/Introduction_to_Data_Science_Badge20241210-26-x7pury.pdf' },
  { title: 'AWS Cloud Practitioner Essentials', file: '/certificats/Certificats/Notions essentielles de l\'AWS Cloud Practitioner (Français) | AWS Cloud Practitioner Essentials (French)_AWS Course Completion Certificate.pdf' },
  { title: 'Operating Systems Basics', file: '/certificats/Certificats/Operating_Systems_Basics_Badge20241210-25-mtya36.pdf' },
  { title: 'Rôles professionnels dans le cloud', file: '/certificats/Certificats/Roles professionnels dans le cloud_AWS Course Completion Certificate.pdf' },
  { title: 'Escroquerie au président', file: '/certificats/Radisson certificates/Escroquerie au président.pdf' },
  { title: 'EU GDPR for Hospitality - F&B', file: '/certificats/Radisson certificates/EU GDPR for Hospitality_F&B Checklist.pdf' },
  { title: 'EU GDPR for Hospitality - Front Office', file: '/certificats/Radisson certificates/EU GDPR for Hospitality_Front Office Checklist.pdf' },
  { title: 'EU GDPR for Hospitality - Operations', file: '/certificats/Radisson certificates/EU GDPR for Hospitality_Operactions Checklist.pdf' },
  { title: 'Formation sensibilisation sécurité Kevin Mitnick', file: '/certificats/Radisson certificates/Formation sur la sensibilisation a  la sécurité Kevin Mitnick 2024.pdf' },
  { title: 'Jeu - Identifier les tentatives d\'hameçonnage', file: '/certificats/Radisson certificates/Jeu Identifier les tentatives d?h ameçonnage  principes de base.pdf' },
  { title: 'Spot the Phish - Liens malveillants', file: '/certificats/Radisson certificates/Jeu Spot the Phish  Édition Liens malveillants.pdf' },
  { title: 'Kit cybersécurité pour les fêtes', file: '/certificats/Radisson certificates/La sensibilisation en guise de cadeau  kit de cybersecurite pour les fetes de fin.pdf' },
  { title: 'Notions de base sur les rançongiciels', file: '/certificats/Radisson certificates/Notions de base sur les rançongiciels.pdf' },
  { title: 'Signaler les e-mails suspects (Microsoft 365)', file: '/certificats/Radisson certificates/Signaler les e-mails suspects  à l?’aide de Microsoft 365.pdf' },
  { title: 'Ingénierie sociale en 2024', file: '/certificats/Radisson certificates/Signaux d?alarme de l?inge nierie sociale en 2024.pdf' },
  { title: 'Voice on Security - Keep a Clean Desk', file: '/certificats/Radisson certificates/Voice on Security Keep a Clean Desk.pdf' },
  { title: 'Voice on Security - Piggybacking', file: '/certificats/Radisson certificates/Voice on Security Piggybacking.pdf' },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.5 }} viewport={{ once: true }} className="mb-3">
      <div className="flex justify-between mb-1"><span className="text-sm font-medium">{name}</span><span className="text-sm text-slate-400">{level}%</span></div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} transition={{ delay: delay + 0.2, duration: 0.8 }} viewport={{ once: true }} className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, description, icon: Icon, color, index, link, tags, images }: { title: string; description: string; icon: any; color: string; index: number; link?: string; tags?: string[]; images?: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <>
      <motion.a 
        href={link || '#'} 
        target={link ? '_blank' : undefined} 
        rel={link ? 'noopener noreferrer' : undefined}
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: index * 0.1 }} 
        viewport={{ once: true }} 
        whileHover={{ scale: 1.03 }}
        className="relative group block"
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40`} />
        <div className="relative bg-slate-800/80 rounded-2xl p-8 border border-slate-700 h-full">
          <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-6`}><Icon className="text-2xl text-white" /></div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-slate-400 text-sm mb-4">{description}</p>
          
          {/* Affichage des images */}
          {images && images.length > 0 && (
            <div className={`grid gap-2 mb-4 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className="relative rounded-lg overflow-hidden bg-white p-2 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedImage(img);
                  }}
                >
                  <img src={img} alt={`${title} ${i + 1}`} className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>
          )}
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">{tag}</span>
              ))}
            </div>
          )}
          {link && (
            <div className="mt-4 pt-4 border-t border-slate-700">
              <span className="text-blue-400 text-sm flex items-center gap-2">
                Découvrir le projet <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          )}
        </div>
      </motion.a>

      {/* Lightbox pour voir les images en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Agrandir" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  const t = translations[language];
  const navItems = t.nav.map((item: string) => item.toLowerCase().replace(/ /g, ''));
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <motion.div animate={{ x: mousePosition.x - 250, y: mousePosition.y - 250 }} transition={{ duration: 0.5 }} className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <motion.div animate={{ x: mousePosition.x - 400, y: mousePosition.y - 400 }} transition={{ duration: 0.7 }} className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MT</motion.h1>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {translations[language].nav.map((item: string, i: number) => (
              <motion.a key={item} href={`#${item.toLowerCase().replace(/ /g, '')}`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="hover:text-blue-400 transition-colors">{item}</motion.a>
            ))}
            <button 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="ml-2 px-3 py-1 bg-slate-700 rounded-full text-sm hover:bg-slate-600 transition-colors"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Bouton hamburger et langue mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="px-2 py-1 bg-slate-700 rounded-full text-xs hover:bg-slate-600 transition-colors"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button className="text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 border-b border-slate-800"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm">
                {translations[language].nav.map((item: string, idx: number) => (
                  <a 
                    key={idx} 
                    href={`#${item.toLowerCase().replace(/ /g, '')}`} 
                    className="hover:text-blue-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80" alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-blue-400 mb-4 tracking-widest uppercase text-sm">Portfolio</motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="mb-6">
              <img src="/Photo de profil Portfolio.jpeg" alt="Modibo Traoré" className="w-32 md:w-48 h-32 md:h-48 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6">Modibo <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Traore</span></motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg md:text-2xl lg:text-3xl text-slate-300 mb-4">{t.heroRole}</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="text-base md:text-lg text-purple-400 mb-6">{t.heroSubtitle}</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm md:text-lg text-slate-400 mb-6 max-w-2xl mx-auto px-4">{t.heroDesc}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4 justify-center">
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-medium text-sm md:text-base">{t.btnContact}</motion.a>
              <motion.a href="/Cv Modibo Traore.pdf.pdf" target="_blank" whileHover={{ scale: 1.05 }} className="px-6 py-3 md:px-8 md:py-4 border border-slate-600 rounded-full font-medium hover:border-blue-400 text-sm md:text-base">{t.btnCV}</motion.a>
              <motion.a href="#competences" whileHover={{ scale: 1.05 }} className="px-6 py-3 md:px-8 md:py-4 border border-slate-600 rounded-full font-medium hover:border-blue-400 text-sm md:text-base">{t.btnSkills}</motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ delay: 1, duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2"><FaChevronDown className="text-slate-400 text-2xl" /></motion.div>
      </section>

      <section id="about" className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80" alt="IT Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.about}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-slate-300">Diplômé de <strong className="text-blue-400">l'ECOSUP/ALTERNANCE</strong> en Informatique de Gestion.</p>
                <p className="text-lg text-slate-300">Assistant IT au <strong className="text-purple-400">Radisson Collection Hôtel, Bamako</strong>.</p>
                <p className="text-lg text-slate-300">Créatif avec <strong className="text-pink-400">Canva</strong> et passionné par le montage vidéo.</p>
                
                <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h4 className="font-semibold mb-3 text-blue-400">{t.languages}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Français</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Bambara</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Anglais {t.englishLevel}</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h4 className="font-semibold mb-3 text-pink-400">{t.interests}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Lecture</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Sport</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Musique</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Voyage</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">{t.formation}</h3>
                {[{ label: 'Master 1', sub: 'Informatique de Gestion', year: '2021-2022' }, { label: 'Licence 3', sub: 'MIAGE (Méthode Informatique Appliquée à la Gestion d\'Entreprise)', year: '2019-2020' }, { label: 'Licence 2', sub: 'Informatique de Gestion', year: '2018-2019' }, { label: 'Licence 1', sub: 'Gestion d\'Entreprise', year: '2017-2018' }, { label: 'Baccalauréat', sub: 'Finance', year: '2016-2017' }].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-xl border border-slate-600">
                    <p className="font-semibold text-blue-400">{item.label}</p>
                    <p className="text-sm text-slate-300">{item.sub}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="competences" className="py-16 md:py-32 bg-slate-800/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="Tech Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.skills}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[{ title: t.sysNetwork, icon: FaServer, skills: skillsData.systemes, color: 'from-blue-500 to-cyan-500' }, { title: t.design, icon: FaPalette, skills: skillsData.design, color: 'from-pink-500 to-rose-500' }, { title: t.dev, icon: FaCode, skills: skillsData.dev, langages: skillsData.langages, color: 'from-green-500 to-emerald-500' }, { title: t.database, icon: FaDatabase, skills: skillsData.database, color: 'from-purple-500 to-indigo-500' }, { title: t.autres, icon: FaTools, skills: skillsData.autres, color: 'from-orange-500 to-yellow-500' }].map((category, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}><category.icon className="text-xl text-white" /></div>
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  {category.skills && category.skills.map((skill: any, i: number) => <SkillBar key={i} name={skill.name} level={skill.level} delay={idx * 0.1 + i * 0.1} />)}
                  {category.langages && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {category.langages.map((lang: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">{lang}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-16 md:py-32 bg-slate-800/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80" alt="Services Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.services}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsData.services.map((service, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }} 
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaHandsHelping className="text-blue-400 text-xl" />
                    <span className="text-slate-300">{service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Logiciels */}
      <section id="logiciels" className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1920&q=80" alt="Logiciels Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.logiciels}</span></h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {skillsData.logiciels.map((logiciel, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: i * 0.1 }} 
                  viewport={{ once: true }}
                  className="px-4 md:px-5 py-2 md:py-3 bg-slate-800/80 rounded-full text-sm md:text-base text-slate-300 border border-slate-700 hover:border-blue-400 transition-colors"
                >
                  {logiciel}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projets" className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" alt="Projects Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.projets}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project, i) => <ProjectCard key={i} {...project} index={i} />)}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="certificats" className="py-16 md:py-32 bg-slate-800/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Certificates Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.certificats}</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {certificates.map((cert, i) => (
                <a key={i} href={cert.link || cert.file} target="_blank" rel="noopener noreferrer">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <FaCertificate className="text-blue-400 text-xl flex-shrink-0" />
                      <p className="text-sm text-slate-300">{cert.title}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" alt="Experience Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.experience}</span></h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div><h3 className="text-xl font-semibold text-white">{exp.title}</h3><p className="text-blue-400">{exp.company}</p></div>
                    <span className="text-slate-500 text-sm bg-slate-700/50 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">{exp.description.map((desc, i) => <li key={i} className="text-slate-400 text-sm flex items-start gap-2"><span className="text-blue-400 mt-1">▹</span>{desc}</li>)}</ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80" alt="Contact Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.contact}</span></h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a href="https://www.linkedin.com/in/modibo-traore-8958a8284/" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <FaLinkedin className="text-xl text-blue-400" /><span>LinkedIn</span>
              </a>
              <a href="tel:+22392022099" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <FaPhone className="text-xl text-green-400" /><span>+223 92 02 20 99</span>
              </a>
              <a href="https://wa.me/22392022099" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <FaWhatsapp className="text-xl text-green-400" /><span>WhatsApp</span>
              </a>
              <a href="mailto:modibotraore494@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <FaEnvelope className="text-xl text-pink-400" /><span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
