import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    oasis,
    carrent,
    qtrip,
    brew,
    threejs,
    criodo,
    bitnine,
    qkart,
    pizza,
    qtify

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Android Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "Android Developer Intern",
        company_name: "LetsGrowMore",
        // icon: starbucks,
        iconBg: "#383E56",
        date: "Sep 2022 - Oct 2022",
        points: [
            "Developed advanced Android apps with a 20% performance boost, including high-performing Covid-19 tracking precise facial recognition, and immersive Augmented reality faces with ARCore",
            "Collaborated seamlessly with cross-functional teams, leading to a 20% increase in project efficiency and timely delivery",
            "Utilized a comprehensive tech stack—Android, Java, Firebase, ARCore, Sceneform, Volley, and Firebase ML Vision—contributing to a 25% improvement in application performance and user experience"
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "Oasis infobyte",
        icon: oasis,
        iconBg: "#E6DEDD",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Engineered a full-stack pizza delivery app using React, MongoDB, and Node.js, enhancing order efficiency.",
            "Implemented user authentication functionalities, leading to a 30% reduction in unauthorized access attempts.",
            "Integrated Razorpay checkout for payment processing, resulting in a 25% increase in successful transactions.",

        ],
    },
    {
        title: "Fellowship in Full Stack Web Development",
        company_name: "Crio.do",
        icon: criodo,
        iconBg: "#383E56",
        date: "Mar 2023 - Present",
        points: [
            "Built real-world projects from scratch and solved over 400+ data structures and algorithms problems.",
            "Acquired practical tech skills through real-world experiences, boosting proficiency by 25%.",
            "Spearheaded the design and development of innovative web applications, integrating advanced technologies—QTrip,QTripDynamic, QKart, and XBoard, resulting in a 30% increase in overall application efficiency.",
        ],
    },
    {
        title: "Software developer Intern",
        company_name: "Bitnine Global",
        icon: bitnine,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Started my role as a Software Engineer Intern working on the AGE repository and then Agensgraph a graph database.",

        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Qkart",
        description:
            "E-commerce platform enabling users to search, add products to cart,complete purchases via a seamless checkout page.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: qkart,
        source_code_link: "https://github.com/KiranSg-coder/QKart",
    },
    {
        name: "QTrip Dynamic",
        description:
            " QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: qtrip,
        source_code_link: "https://github.com/KiranSg-coder/QTrip-Dynamic",
    },
    {
        name: "Brewery Review System",
        description:
            "Web application allowing users to create accounts, browse, rate, and comment on local breweries.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: brew,
        source_code_link: "https://github.com/KiranSg-coder/brewery-review-system_",
    },
    {
        name: "Pizza delivery app",
        description:
            "Introducing our pizza app: user-friendly login, customizable orders, Razorpay payments, and seamless admin controls. Built with React, MongoDB, and Node.js for efficiency and reliability.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongoDB",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: pizza,
        source_code_link: "https://github.com/KiranSg-coder/OIBSIP_Pizza_delivery_app",
    },
    {
        name: "QTify",
        description:
            "QTify is a song-browsing application  using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongoDB",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: qtify,
        source_code_link: "https://github.com/KiranSg-coder/L-square-QTify",
    },
];

export { services, technologies, experiences, testimonials, projects };