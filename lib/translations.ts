import { desc } from "framer-motion/client";
import { title } from "process";

export const translations = {
  fr: {
    sections: {
      about: "a-propos",
      projects: "projets",
      contact: "contact",
    },
    nav: {
      returnHomepage: "Retour à l'accueil",
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
      modeToggle: "Basculer entre le thème clair et sombre",
      burger: {
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        open: "Ouvrir",
        close: "Fermer",
        menu: "le menu",
      },
    },
    about: {
      title: "À Propos",
      tags: {
        location: "Angoulême",
        webDev: "Développement Web",
        webDesign: "Web Design",
        uxUi: "UX/UI",
      },
      description:
        "Étudiant de 2e année en BUT Métiers du Multimédia et de l'Internet à l'IUT d'Angoulême. Passionné par le développement web et le design, je crée des expériences utilisateur intuitives et esthétiques en combinant design et développement.",
      education: {
        title: "Mon parcours",
        iut: {
          location: "IUT d'Angoulême",
          degree: "BUT Métiers du Multimédia et de l'Internet",
          date: "2024 - 2027",
        },
        epitech: {
          location: "Epitech Technology - Bordeaux",
          degree: "Ingénierie logicielle",
          date: "2023 - 2024",
        },
        highschool: {
          location: "Lycée Les Iris - Lormont",
          degree: "Baccalauréat général obtenu",
          date: "Juillet 2023",
        },
      },
      viewCV: "Voir mon CV",
      cvLink: "/assets/GIL_Valentin_CV.pdf",
    },
    projects: {
      title: "Projets",
      seeProject: "Accéder au site",
      cineroule: {
        description:
          "Site web interactif permettant aux utilisateurs de voter pour leurs designs d'affiches de films préférés. Interface intuitive avec système de vote en temps réel et options d'accessibilité.",
        date: "14/06/2025",
      },
      mmiPlanning: {
        description:
          "Application web pour consulter son emploi du temps et ceux des autres groupes d'élèves, actualisé en temps réel avec possibilité de partager les cours entre utilisateurs.",
        date: "08/09/2025",
      },
    },
    contact: {
      title: "Contact",
      infos: {
        available: "Disponible",
        usefulLinks: "Liens utiles :",
      },
      form: {
        title: "Contactez-moi",
        lastName: "Nom",
        firstName: "Prénom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Une erreur s'est produite. Veuillez réessayer.",
      },
    },
    footer: {
      description:
        "Étudiant en BUT MMI passionné par le développement web et la création d'expériences numériques modernes et accessibles.",
      navigation: "Navigation",
      contact: {
        title: "Contact & Réseaux",
        follow: "Me suivre :",
      },
      rights: "Tous droits réservés.",
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
    },
  },
  en: {
    sections: {
      about: "about",
      projects: "projects",
      contact: "contact",
    },
    nav: {
      returnHomepage: "Return to homepage",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      modeToggle: "Toggle between light and dark theme",
      burger: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
        open: "Open",
        close: "Close",
        menu: "menu",
      },
    },
    about: {
      title: "About",
      tags: {
        location: "Angoulême",
        webDev: "Web Development",
        webDesign: "Web Design",
        uxUi: "UX/UI",
      },
      description:
        "Second-year student in Multimedia and Internet Technologies at the Institute of Technology of Angoulême. Passionate about web development and design, I create intuitive and aesthetic user experiences by combining design and development.",
      education: {
        title: "My Education",
        iut: {
          location: "Institute of Technology of Angoulême",
          degree: "Bachelor's degree in Multimedia and Internet Technologies",
          date: "2024 - 2027",
        },
        epitech: {
          location: "Epitech Technology - Bordeaux",
          degree: "Software Engineering",
          date: "2023 - 2024",
        },
        highschool: {
          location: "High School - Lormont",
          degree: "French General Baccalaureate",
          date: "July 2023",
        },
      },
      viewCV: "View my CV",
      cvLink: "/assets/GIL_Valentin_CV_English.pdf",
    },
    projects: {
      title: "Projects",
      seeProject: "View website",
      cineroule: {
        description:
          "Interactive website allowing users to vote for their favorite movie poster designs. Intuitive interface with real-time voting system and accessibility options.",
        date: "2025-06-14",
      },
      mmiPlanning: {
        description:
          "Web application to view one's schedule and those of other student groups, updated in real-time with the ability to share classes between users.",
        date: "2025-09-08",
      },
    },
    contact: {
      title: "Contact",
      infos: {
        available: "Available",
        usefulLinks: "Useful links:",
      },
      form: {
        title: "Contact me",
        lastName: "Last Name",
        firstName: "First Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "An error occurred. Please try again.",
      },
    },
    footer: {
      description:
        "Student in Multimedia and Internet Technologies passionate about web development and creating modern and accessible digital experiences.",
      navigation: "Navigation",
      contact: {
        title: "Contact & Networks",
        follow: "Follow me :",
      },
      rights: "All rights reserved.",
      legal: "Legal Notices",
      privacy: "Privacy Policy",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.fr;
