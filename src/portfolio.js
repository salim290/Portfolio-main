/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Salim",
  logo_name: "Salim ;)",
  nickname: "harry / picleric",
  full_name: "Salim Alkhodor",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1A70Ld25kha6pdoYSVH6D5YY4JyRAhP3N/view?usp=sharing",
  mail: "mailto:salimalkhodor@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/salim290",
  linkedin: "https://linkedin.com/in/salim-alkhodor-72a1731aa",
  gmail: "salimalkhodor@gmail.com",
  //gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/salem.alkther",
  twitter: "https://twitter.com/Salimalkhodor/",
  instagram: "https://www.instagram.com/salim_kh290/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express, Flask, Django and Fast-API",
        "⚡ Integration of third party services such as Firebase/ AWS / GCP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
           skillName: "Unreal Engine",
           fontAwesomeClassname: "simple-icons:unrealengine",
           style: {
             color: "black",
           },
         },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
             color: "#0865A6",
          },
        },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
           skillName: "Docker",
           fontAwesomeClassname: "simple-icons:docker",
           style: {
             color: "#1488C6",
           },
         },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "HTW University of Applied Sciences Berlin",
      subtitle: "Bachelors in International Media and Computing",
      logo_path: "SRM_Logo.png",
      alt_name: "HTW Berlin",
      duration: "2019 - 2023",
      descriptions: [
        "⚡  I'm currently pursuing my Bachelors in Computer Science and Engineering.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.htw-berlin.de/",
    },
  ],
};

const certifications = {
  certifications: [
    /*
  {
    title: "Google Cloud",
    subtitle: "Google Cloud Training",
    logo_path: "google_logo.png",
    certificate_link:
      "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
    alt_name: "MongoDB University",
    // color_code: "#2AAFED",
    color_code: "#2AAFED",
  },
  {
    title: "Hackathon",
    subtitle: "Backyard Hacks 2.0",
    logo_path: "hackathon1.png",
    // certificate_link:
    //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    alt_name: "hackathon",
    color_code: "#f47e2c",
  },
  {
    title: "Hackathon",
    subtitle: "HyperHacks",
    logo_path: "hackathon2.png",
    // certificate_link:
    //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    alt_name: "hackathon",
    color_code: "#E2405F",
  },
  // {
  //   title: "A300: Atlas Security",
  //   subtitle: "MongoDB University",
  //   logo_path: "mongo.png",
  //   certificate_link:
  //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
  //   alt_name: "MongoDB University",
  //   // color_code: "#F6B808",
  //   color_code: "#47A048",
  // },
  {
    title: "Contributor's Hack",
    subtitle: "Hakin Codes",
    logo_path: "HakinCodes.jfif",
    certificate_link:
      "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
    alt_name: "Opensource Event",
    color_code: "#fefd7b",
  },
  // {
  //   title: "MLH Local Hack Day: Build",
  //   subtitle: "Major League Hacking",
  //   logo_path: "mlh-logo.svg",
  //   certificate_link:
  //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
  //   alt_name: "Google",
  //   color_code: "#fe0037",
  // },
  {
    title: "Olympiad",
    subtitle: "Ramanujan Mathematics Olympiad",
    logo_path: "Olympiad.png",
    certificate_link:
      "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    alt_name: "Postman",
    // color_code: "#f36c3d",
    color_code: "#fffbf3",
  },
  {
    title: "Competitive Programming",
    subtitle: "Reply Challenges",
    logo_path: "Reply.jfif",
    certificate_link:
      "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
    alt_name: "Reply",
    color_code: "#2AAFED",
  },
  {
    title: "Competitive Programming",
    subtitle: "Google Hash Code",
    logo_path: "google_logo.png",
    certificate_link:
      "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    alt_name: "Reply",
    color_code: "#2AAFED",
  },
  {
    title: "Training",
    subtitle: "30 Days of Open Source",
    logo_path: "CFC.jfif",
    certificate_link:
      "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    alt_name: "Postman",
    // color_code: "#f36c3d",
    color_code: "#a60000",
  },
  {
    title: "Training",
    subtitle: "Git Learning",
    logo_path: "Progate.png",
    certificate_link:
      "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    alt_name: "Reply",
    color_code: "#88e7ce",
  },
  // color_code: "#8C151599",
  // color_code: "#7A7A7A",
  // color_code: "#0C9D5899",
  // color_code: "#C5E2EE",
  // color_code: "#ffc475",
  // color_code: "#g",
  // color_code: "#ffbfae",
  // color_code: "#fffbf3",
  // color_code: "#b190b0",

 */
  ],


};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web developer (student work)",
          company: "Home Klick GmbH",
          company_url: "https://home-klick.de/",
          logo_path: "img.png",
          duration: "Aug 2022 - Present",
          location: "Presence",
          description: `Developed predictive models and deployed it on a full-stack website using Wordpress and React. 
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Internationalization and Localization (student work)",
          company: "HTW Berlin",
          company_url: "https://www.htw-berlin.de/",
          logo_path: "SRM_Logo.png",
          duration: "Nov 2021 - Feb 2022",
          location: "Remote",
          description: `Internationalization and Localization for whole the project 'German International University of Applied Sciences' 
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },

      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Web developer",
          company: "Home Klick GmbH",
          company_url: "https://home-klick.de/",
          logo_path: "img.png",
          duration: "Apr 2022 - Aug 2022",
          location: "Berlin",
          description:
            "Create configurator to view virtual apartments, make changes and show current base price and surcharge(Communication between react, Unreal and Server)",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Pictures Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Pictures, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
};

const projects = {
  data: [
     {
      id: "0",
      name: "Allmende",
      url: "https://github.com/allmende-app",
      description:
        "Allmende is a social network app, where you can share your interest in nature with other common-minded people and learn about local nature.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",

        },
        {
          name: "Heroku",
          iconifyClass: "logos-heroku",

        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/salim290/Youtube-Downloader",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "HTW Share ",
      url: "https://github.com/CarolineLuz/htw-share",
      description:
        "The goal of this project is a fully working application for the HTW Berlin, where you can borrow and lend tools, in order to reduce the buying behaviour, making things not go to waste.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
      /*
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/salim290/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/salim290/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/salim290/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/salim290/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/salim290/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/salim290/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/salim290/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/salim290/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/salim290/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/salim290/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/salim290/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },*/
    {
      id: "15",
      name: "my own Website",
      url: "https://github.com/salim290/Portfolio-main",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
