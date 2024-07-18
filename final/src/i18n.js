// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Create/Join Team": "Create/Join Team",
      "Analytics": "Analytics",
      "Search Matches": "Search Matches",
      "Create Tournament": "Create Tournament",
      "FAQ": "FAQ",
      "Frequently Asked Questions": "Frequently asked Questions",
      "How do I create a tournament?": "How do I create a tournament?",
      "To create a tournament, navigate to the 'Create Tournament' section and fill out the form with the necessary details.": "To create a tournament, navigate to the 'Create Tournament' section and fill out the form with the necessary details.",
      "How do I join a team?": "How do I join a team?",
      "To join a team, go to the 'Create/Join Team' section, find a team that matches your skills, and send a request to join.": "To join a team, go to the 'Create/Join Team' section, find a team that matches your skills, and send a request to join.",
      "What games are supported?": "What games are supported?",
      "Currently, we support games such as CS2, Valorant, Overwatch 2, and League of Legends. More games will be added in the future.": "Currently, we support games such as CS2, Valorant, Overwatch 2, and League of Legends. More games will be added in the future.",
      "How can I contact support?": "How can I contact support?",
      "If you need further assistance, you can reach out to our support team through the 'Contact Us' section on the website.": "If you need further assistance, you can reach out to our support team through the 'Contact Us' section on the website.",
      "Contact Us": "Contact Us",
      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Your message": "Your message",
      "Send": "Send"
    }
  },
  es: {
    translation: {
      "Home": "Inicio",
      "Create/Join Team": "Crear/Unirse a un Equipo",
      "Analytics": "Analítica",
      "Search Matches": "Buscar Partidos",
      "Create Tournament": "Crear Torneo",
      "FAQ": "Preguntas Frecuentes",
      "Frequently Asked Questions": "Preguntas Frecuentes",
      "How do I create a tournament?": "¿Cómo creo un torneo?",
      "To create a tournament, navigate to the 'Create Tournament' section and fill out the form with the necessary details.": "Para crear un torneo, navegue a la sección 'Crear Torneo' y complete el formulario con los detalles necesarios.",
      "How do I join a team?": "¿Cómo me uno a un equipo?",
      "To join a team, go to the 'Create/Join Team' section, find a team that matches your skills, and send a request to join.": "Para unirse a un equipo, vaya a la sección 'Crear/Unirse a un equipo', encuentre un equipo que coincida con sus habilidades y envíe una solicitud para unirse.",
      "What games are supported?": "¿Qué juegos son compatibles?",
      "Currently, we support games such as CS2, Valorant, Overwatch 2, and League of Legends. More games will be added in the future.": "Actualmente, apoyamos juegos como CS2, Valorant, Overwatch 2 y League of Legends. Se agregarán más juegos en el futuro.",
      "How can I contact support?": "¿Cómo puedo contactar al soporte?",
      "If you need further assistance, you can reach out to our support team through the 'Contact Us' section on the website.": "Si necesita más ayuda, puede comunicarse con nuestro equipo de soporte a través de la sección 'Contáctenos' en el sitio web.",
      "Contact Us": "Contáctenos",
      "Your Name": "Tu Nombre",
      "Your Email": "Tu Correo Electrónico",
      "Your message": "Tu mensaje",
      "Send": "Enviar"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
