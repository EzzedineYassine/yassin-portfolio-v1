export type Language = "en" | "fr" | "ar" | "de";

export const translations = {
  en: {
    nav_about: "About Me",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_me: "Me",
    nav_connect: "Connect with Me",
    search_placeholder: "Search sections...",
    
    about_title: "About Me",
    about_text: "I'm a Business Information Systems student (FSEG Nabeul) passionate about full-stack web development and cybersecurity. I'm driven by curiosity and hands-on learning, actively building projects like e-commerce platforms and recommendation systems. Currently, I'm looking for a two-month internship to apply my technical skills in web and systems development within a dynamic team.",
    
    edu_title: "Education",
    edu_degree: "Licence en Informatique de Gestion",
    edu_school: "Faculté des Sciences Économiques et de Gestion de Nabeul (FSEG)",
    edu_progress_label: "Degree Completion Progress",
    edu_start: "Start (Sept 2024)",
    edu_end: "Graduation (June 2027)",
    edu_desc: "I am currently pursuing my Licence in Informatique de Gestion. The progress bar actively counts up in real-time.",
    
    projects_title: "Projects",
    project_ecommerce_title: "Full-Stack E-Commerce Platform (Phantom Stickers)",
    project_ecommerce_desc: "Designed a comprehensive e-commerce website using React and Vite. Implemented a centralized state architecture (Context API), a secure admin dashboard with CRUD functionalities, and persistent storage via Supabase and localStorage. Deployed continuously on Vercel.",
    project_movie_title: "Movie Recommendation System",
    project_movie_desc: "Developed a collaborative filtering machine learning algorithm in Python. Managed and analyzed complex datasets utilizing Pandas and Scikit-Learn libraries to generate personalized recommendations.",
    project_is_title: "Information System Design",
    project_is_desc: "Mapped system architectures and structured database schemas using UML diagrams. Wrote optimized queries and stored procedures with SQL and PL/SQL for high-performance databases.",
    btn_visit: "Visit Website",
    btn_view: "View Project",
    
    me_title: "Me",
    me_subtitle: "Business Information Systems Student · Full-Stack Developer",
    btn_email: "Email Me",
    btn_download_cv: "Download CV",
    
    connect_title: "Connect with Me",
    footer_text: "© Yassin Ezzedine",
  },
  fr: {
    nav_about: "À Propos",
    nav_education: "Formation",
    nav_projects: "Projets",
    nav_me: "Moi",
    nav_connect: "Me Contacter",
    search_placeholder: "Rechercher...",
    
    about_title: "À Propos",
    about_text: "Étudiant en Informatique de Gestion (FSEG Nabeul), passionné par le développement web full-stack et la cybersécurité. Curieux et adepte de l'apprentissage par la pratique, je réalise activement des projets tels que des plateformes e-commerce et des systèmes de recommandation. Actuellement, je recherche un stage de deux mois pour appliquer mes compétences techniques en développement web et systèmes d'information au sein d'une équipe dynamique.",
    
    edu_title: "Formation",
    edu_degree: "Licence en Informatique de Gestion",
    edu_school: "Faculté des Sciences Économiques et de Gestion de Nabeul (FSEG)",
    edu_progress_label: "Progression du diplôme",
    edu_start: "Début (Sept 2024)",
    edu_end: "Diplôme (Juin 2027)",
    edu_desc: "Je poursuis actuellement ma Licence en Informatique de Gestion. La barre de progression avance en temps réel.",
    
    projects_title: "Projets",
    project_ecommerce_title: "Plateforme E-Commerce Full-Stack (Phantom Stickers)",
    project_ecommerce_desc: "Conception d'une plateforme e-commerce complète avec React et Vite. Architecture d'état centralisée (Context API), dashboard administrateur sécurisé (CRUD), et persistance des données via Supabase/localStorage. Déploiement continu sur Vercel.",
    project_movie_title: "Système de Recommandation de Films",
    project_movie_desc: "Développement en Python d'un algorithme de filtrage collaboratif (Machine Learning). Analyse et manipulation de datasets complexes avec Pandas et Scikit-Learn pour générer des recommandations personnalisées.",
    project_is_title: "Conception de Système d'Information",
    project_is_desc: "Modélisation des architectures système et bases de données avec UML. Optimisation des requêtes et procédures stockées en SQL et PL/SQL pour des bases de données performantes.",
    btn_visit: "Visiter le site",
    btn_view: "Voir le projet",
    
    me_title: "Moi",
    me_subtitle: "Étudiant en Informatique de Gestion · Développeur Full-Stack",
    btn_email: "M'envoyer un email",
    btn_download_cv: "Télécharger CV",
    
    connect_title: "Me Contacter",
    footer_text: "© Yassin Ezzedine",
  },
  ar: {
    nav_about: "نبذة عني",
    nav_education: "التعليم",
    nav_projects: "المشاريع",
    nav_me: "أنا",
    nav_connect: "تواصل معي",
    search_placeholder: "ابحث في الأقسام...",
    
    about_title: "نبذة عني",
    about_text: "طالب في إعلامية التصرف (FSEG نابل) وشغوف بتطوير الويب الشامل والأمن السيبراني. مدفوع بالفضول والتعلم العملي، أقوم ببناء مشاريع نشطة مثل منصات التجارة الإلكترونية وأنظمة التوصية. حالياً، أبحث عن تدريب لمدة شهرين لتطبيق مهاراتي التقنية في تطوير الويب والأنظمة ضمن فريق ديناميكي.",
    
    edu_title: "التعليم",
    edu_degree: "الإجازة في إعلامية التصرف",
    edu_school: "كلية العلوم الاقتصادية والتصرف بنابل (FSEG)",
    edu_progress_label: "نسبة التقدم في الشهادة",
    edu_start: "البداية (سبتمبر 2024)",
    edu_end: "التخرج (جوان 2027)",
    edu_desc: "أواصل حالياً دراستي للحصول على الإجازة في إعلامية التصرف. شريط التقدم يحسب التطور في الوقت الفعلي.",
    
    projects_title: "المشاريع",
    project_ecommerce_title: "منصة تجارة إلكترونية متكاملة (Phantom Stickers)",
    project_ecommerce_desc: "تصميم موقع تجارة إلكترونية شامل باستخدام React و Vite. يتضمن بنية حالة مركزية (Context API)، ولوحة تحكم إدارية آمنة، وحفظ البيانات عبر Supabase و localStorage. نشر مستمر على Vercel.",
    project_movie_title: "نظام توصية الأفلام",
    project_movie_desc: "تطوير خوارزمية تعلم آلي للفلترة التعاونية باستخدام Python. إدارة وتحليل مجموعات البيانات المعقدة باستخدام مكتبات Pandas و Scikit-Learn لإنشاء توصيات مخصصة.",
    project_is_title: "تصميم أنظمة المعلومات",
    project_is_desc: "رسم هياكل النظم وقواعد البيانات باستخدام رسومات UML. كتابة استعلامات وإجراءات محسنة بـ SQL و PL/SQL لقواعد بيانات عالية الأداء.",
    btn_visit: "زيارة الموقع",
    btn_view: "عرض المشروع",
    
    me_title: "أنا",
    me_subtitle: "طالب إعلامية التصرف · مطور ويب شامل",
    btn_email: "راسلني",
    btn_download_cv: "تحميل السيرة الذاتية",
    
    connect_title: "تواصل معي",
    footer_text: "© ياسين عز الدين",
  },
  de: {
    nav_about: "Über Mich",
    nav_education: "Ausbildung",
    nav_projects: "Projekte",
    nav_me: "Ich",
    nav_connect: "Kontakt",
    search_placeholder: "Suchen...",
    
    about_title: "Über Mich",
    about_text: "Ich bin Student der Wirtschaftsinformatik (FSEG Nabeul) mit Leidenschaft für Full-Stack-Webentwicklung und Cybersicherheit. Angetrieben von Neugier und praxisorientiertem Lernen entwickle ich Projekte wie E-Commerce-Plattformen und Empfehlungssysteme. Zurzeit suche ich ein zweimonatiges Praktikum, um meine technischen Fähigkeiten in der Web- und Systementwicklung in einem dynamischen Team anzuwenden.",
    
    edu_title: "Ausbildung",
    edu_degree: "Bachelor in Wirtschaftsinformatik",
    edu_school: "Fakultät für Wirtschaftswissenschaften und Management Nabeul (FSEG)",
    edu_progress_label: "Studienfortschritt",
    edu_start: "Start (Sept 2024)",
    edu_end: "Abschluss (Juni 2027)",
    edu_desc: "Ich absolviere derzeit meinen Bachelor in Wirtschaftsinformatik. Der Fortschrittsbalken aktualisiert sich in Echtzeit.",
    
    projects_title: "Projekte",
    project_ecommerce_title: "Full-Stack E-Commerce-Plattform (Phantom Stickers)",
    project_ecommerce_desc: "Entwicklung einer umfassenden E-Commerce-Website mit React und Vite. Implementierung einer zentralisierten Statusarchitektur (Context API), eines sicheren Admin-Dashboards und persistenter Speicherung über Supabase und localStorage.",
    project_movie_title: "Filmempfehlungssystem",
    project_movie_desc: "Entwicklung eines auf maschinellem Lernen basierenden Algorithmus für kollaboratives Filtern in Python. Analyse komplexer Datensätze mit Pandas und Scikit-Learn.",
    project_is_title: "Informationssystem-Design",
    project_is_desc: "Modellierung von Systemarchitekturen und Datenbankschemata mit UML. Schreiben optimierter Abfragen mit SQL und PL/SQL für Hochleistungsdatenbanken.",
    btn_visit: "Website besuchen",
    btn_view: "Projekt ansehen",
    
    me_title: "Ich",
    me_subtitle: "Student der Wirtschaftsinformatik · Full-Stack-Entwickler",
    btn_email: "E-Mail Senden",
    btn_download_cv: "Lebenslauf (CV)",
    
    connect_title: "Kontakt",
    footer_text: "© Yassin Ezzedine",
  }
};

export type TranslationKey = keyof typeof translations.en;
