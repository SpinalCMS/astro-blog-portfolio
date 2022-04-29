export const siteConfig = {
    name: "Erik S. Olsen",
    description: "My name is Erik, and I'm a digital marketing expert in Austin, TX. I'm currently running the SEM and CRO operations for ICG America.",
    url: "https://eriksolsen.com",
    social: {
        rss: "/rss.xml",
        github: "https://github.com/tusamni",
        linkedin: "https://www.linkedin.com/in/erikstewartolsen"
    },
    siteRepo: "https://github.com/tusamni/astro-blog-portfolio"
}

export const imageConfig = {
    directory: {
        local: "public/images/",
        public: "images/"
    },
    imageFormats: ['avif', 'webp'],
    imageSizes: [2000, 1440, 1080, 720, 480]
}

export const pageSize = 6
export const postSize = 6 // how many posts per page
export const photoSize = 4 // how many photo galleries per page