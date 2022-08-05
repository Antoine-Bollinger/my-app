import media1 from "../public/portfolio/1.webp";
import media2 from "../public/portfolio/2.webp";
import media3 from "../public/portfolio/3.webp";
import media4 from "../public/portfolio/4.webp";
import media5 from "../public/portfolio/5.webp";
import media6 from "../public/portfolio/6.webp";

import media1_laptop from "../public/portfolio/laptop/1.webp";
import media2_laptop from "../public/portfolio/laptop/2.webp";
import media3_laptop from "../public/portfolio/laptop/3.webp";
import media4_laptop from "../public/portfolio/laptop/4.webp";
import media5_laptop from "../public/portfolio/laptop/5.webp";
import media6_laptop from "../public/portfolio/laptop/6.webp";

import media1_mobile from "../public/portfolio/mobile/1.webp";
import media2_mobile from "../public/portfolio/mobile/2.webp";
import media3_mobile from "../public/portfolio/mobile/3.webp";
import media4_mobile from "../public/portfolio/mobile/4.webp";
import media5_mobile from "../public/portfolio/mobile/5.webp";
import media6_mobile from "../public/portfolio/mobile/6.webp";

export const portfolio = [
    {
        title: "LaMeilleureVersionDeMoi",
        src: media1,
        src_laptop: media1_laptop,
        src_mobile: media1_mobile,
        description: {
            en: "A website that presents the activity of Sabrina Appriou, personal development coach, founder of LaMeilleureVersionDeMoi.",
            fr: "Sabrina, coach en développement personnel et fondatrice de LaMeilleureVersionDeMoi, souhaite développer sa visibilité sur le net et m'a confié la création de son site.",
            pt: "Sabrina, coach de desenvolvimento pessoal e fundadora do LaMeilleureVersionDeMoi, quer desenvolver sua visibilidade na Internet e me confiou a criação de seu site."
        },
        url: "https://lameilleureversiondemoi.netlify.app/",
        git: "https://github.com/antoinebollinger/lameilleureversiondemoi",
    },
    {
        title: 'Antoine Traductions',
        src: media2,
        src_laptop: media2_laptop,
        src_mobile: media2_mobile,
        description: {
            en: "My website as a translator. My first septs in web... Originaly developed in only Html & CSS, it is now powered by Php.",
            fr: "Mon site en tant que traducteur. Mes premiers pas dans le web. D'abord écrit en simple Html & Css, j'ai ensuite refondu le site en Php.",
            pt: "Meu site apresentando o meu trabalho de tradutor. Meus primeiros passos no Web... primeiro escrito em simples Html & CSS, passei agora para o Php."
        },
        url: "https://www.antoine-traductions.com",
        git: "https://github.com/antoinebollinger/antoine-traductions",
    },
    {
        title: 'Les timbres de Michel',
        src: media3,
        src_laptop: media3_laptop,
        src_mobile: media3_mobile,
        description: {
            en: "Michel needed to offer his duplicate stamps for exchange. I took care of it.",
            fr: "Michel avait besoin de proposer ses timbres en double pour échange. Je m'en suis chargé.",
            pt: "Michel precisava de um website para expor a coleção de selos dele. Eu que fiz."
        },
        url: "https://lestimbresdemichel.fr/",
        git: "https://github.com/antoinebollinger/lestimbresdemichel.fr",
    },
    {
        title: "Groupomania",
        src: media4,
        src_laptop: media4_laptop,
        src_mobile: media4_mobile,
        description: {
            en: "Social network project (Openclassrooms bootcamp). A very special project in my Openclassrooms bootcamp, the final one. Using node.js and Express for the back, and Vue.js for the front.",
            fr: "Projet de réseau social dans le cadre de ma formation Openclassrooms. Un très beau projet final : back-end avec Node.js et Express, front-end avec Vue.js.",
            pt: "Projeto de rede social no contexto da minha formação Openclassrooms. Um projeto final muito interessante, cheio de aprendizagens: back-end com Node.js & Express, front com Vue.js."
        },
        url: "https://ab-groupomania.netlify.app/",
        git: "https://github.com/antoinebollinger/AntoineBollinger_7_03022021",
    },
    {
        title: 'Orinoco',
        src: media5,
        src_laptop: media5_laptop,
        src_mobile: media5_mobile,
        description: {
            en: "eCommerce website (Openclassrooms bootcamp). For this, we already had the back-end. We had to write from scratch the front-end, in Javascript.",
            fr: "Projet de site e-commerce (formation Openclassrooms). Ecrit en pur Javascript (le back étant fourni), un projet complet et très instructif.",
            pt: "Projeto de site eCommerce (formação Openclassrooms). Para este projeto, ja tinhamos o back-end. Bastava escrever o front... em Javascript, 'from scratch'!"
        },
        url: "https://ab-orinoco.netlify.app/index.html",
        git: "https://github.com/antoinebollinger/AntoineBollinger_5_15122020",
    },
    {
        title: 'OhMyFood',
        src: media6,
        src_laptop: media6_laptop,
        src_mobile: media6_mobile,
        description: {
            en: "Project Integrate a mobile website with animations in CSS. Add CSS animations in a website was very funny!",
            fr: "Projet Dynamiser un site (animations CSS). Ajouter les animations CSS a été un grand plaisir !",
            pt: "Projeto Animar um site (animações CSS). Adicionar as animações CSS foi muito divertido!"
        },
        url: "https://ab-ohmyfood.netlify.app/",
        git: "https://github.com/antoinebollinger/AntoineBollinger_3_18112020",
    }
];