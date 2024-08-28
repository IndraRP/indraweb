

export const teamMembers = [
    {
        name: "HTML",
        desc: "HyperText Markup Language",
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        url: "https://en.wikipedia.org/wiki/HTML"
    },

    {
        name: "CSS",
        desc: "Cascading Style Sheets",
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
        url: "https://en.wikipedia.org/wiki/CSS"
    },

    {
        name: "JavaScript",
        desc: "Dinamyc programming language",
        image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        url: "https://en.wikipedia.org/wiki/JavaScript"
    },

    {
        name: "React JS",
        desc: "Frontend JavaScript Libraries",
        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        url: "https://react.dev/"
    },

    {
        name: "Next JS",
        desc: "Frontend JavaScript Libraries",
        image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        url: "https://nextjs.org/"
    },

    {
        name: "Node JS",
        desc: "Runtime JavaScript Libraries",
        image: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
        url: "https://nodejs.org/en"
    },

    {
        name: "Laravel",
        desc: "Backend PHP Framework",
        image: "https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png",
        url: "https://laravel.com/docs/11.x/releases"
    },

    {
        name: "Blade Laravel",
        desc: "Frontend PHP Framework",
        image: "https://avatars.githubusercontent.com/u/63051368?s=280&v=4",
        url: "https://laravel.com/docs/11.x/blade"
    },

    {
        name: "Tailwind CSS",
        desc: "Framework CSS Style",
        image: "https://www.ayoadesanya.com/_next/static/media/tailwind.01004e3d.png",
        url: "https://www.mysql.com/"
    },

    {
        name: "Bootstrap",
        desc: "Framework CSS Style",
        image: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
        url: "https://www.mysql.com/"
    },

    {
        name: "Storybook",
        desc: "Komponen Dokumentation",
        image: "https://user-images.githubusercontent.com/18430599/38112659-491f9112-3368-11e8-8b65-1725f19a61fa.png",
        url: "https://storybook.js.org/"
    },
    
    {
        name: "Mysql",
        desc: "Database Management",
        image: "https://pngimg.com/d/mysql_PNG23.png",
        url: "https://www.mysql.com/"
    },

];
  

// Fungsi untuk mengambil nama
export function getNames() {
    return teamMembers.map(member => member.name);
}

// Fungsi untuk mengambil jobdesk
export function getJobDesk() {
    return teamMembers.map(member => member.jobDesk);
}

// Fungsi untuk mengambil keahlian
export function getSkills() {
    return teamMembers.map(member => member.skills);
}
