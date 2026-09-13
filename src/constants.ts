export interface Prize {
  name: string;
  contest: string;
  date: string;
  avatarHref: string;
}

export interface Project {
  name: string;
  avatar: string;
  description: string;
  demoLink: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface School {
  name: string;
  classes: string;
  avatar: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const PRIZES: Prize[] = [
            {
              name: "🥉Bronze Medal",
              contest: "ASMO (Asian Science and Maths Olympiad)",
              date: "07-2019",
              avatarHref: "https://globalolympiadsacademy.com/wp-content/uploads/2022/12/ASMO-INTERNATIONAL-LOGO.png",
            },
            {
              name: "Distinction",
              contest: "Bebras Computing Challenge",
              date: "04-2023",
              avatarHref: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774959844/logo-dark_svift9.png",
            },
            {
              name: "🥈Giải Nhì",
              contest: "Kỳ thi HSG Tin quận Thanh Xuân",
              date: "11-2023",
              avatarHref: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774959639/Picture3_uy5sad.png",          
            },
            {
              name: "🥈Giải Nhì",
              contest: "Kỳ thi HSG Toán quận Thanh Xuân",
              date: "11-2023",
              avatarHref: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774959639/Picture3_uy5sad.png" 
            },
            {
              name: "🥈Huy chương Bạc",
              contest: "HSGS Olympic môn Tin học",
              date: "05-2025",
              avatarHref: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774960486/Picture4_kmqv5o.png",
            },
            {
              name: "🏅Huy chương Vàng",
              contest: "Vietnam AI Championship",
              date: "09-2025",
              avatarHref: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774958885/VAIC_qzyrd4.png",
            },
	    {
              name: "🥉Giải ba",
              contest: "Vietnam Mathematical Modeling Competition",
              date: "06-2025",
              avatarHref: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1789309114/VM2C_owwhne.png",
            }
];

export const PROJECTS: Project[] = [
  {
    name: "3D Particles Simulator",
    avatar: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774926352/Untitled_lpsxot.png",
    description: "An interactive 3D particle simulate planet orbit.",
    demoLink: "https://codingchallengejs.github.io/",
  },
  {
    name: "Flappy Bird Unity",
    avatar: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774927380/474645894_553189871009059_3564708826470541901_n_zuz6lz.jpg",
    description: "Casual 2D game in Unity.",
    demoLink: "#",
  },
  {
    name: "Fanyun-chat",
    avatar: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1774926623/Untitled_fvrljj.png",
    description: "A social media app.",
    demoLink: "https://fanyun-chat.vercel.app/",
  },
  {
    name: "NeuroLex - IELTS Vocabularies Learner",
    avatar: "https://res.cloudinary.com/dflrkkdvt/image/upload/v1789309400/Screenshot_2026-09-13_212255_hvevx1.png",
    description: "Learn english words using spaced repetition technique.",
    demoLink: "https://neurolex-q9ro.onrender.com/",
  },
];

export const BLOGS: Blog[] = [
  {
    id: "blog-2",
    title: "Learning Socket.io",
    date: "2026-03-29",
    content: `
# Real-time Web
Socket.io is good for real-time communication.

### Benefit
- Low latency
- Easy to use
- Robust
    `,
  },
  {
    id: "blog-1",
    title: "Welcome to my blog",
    date: "2026-03-28",
    content: `
# Hello World

## Math in Markdown
Here is a LaTeX example:
$E = mc^2$

Some skill table:
| Skill | Level |
|-------|-------|
| C++   | Advanced |
| React | Intermediate |
    `,
  },
];

export const SKILLS : Skill[] = [
            {
              "category": "Problem Solving & Competitive Programming",
              "items": [
                "Codeforces (1400+ rating)",
                "LeetCode (250+ problems)",
                "VJudge (330 problems)"
              ]
            },
            {
              "category": "Game Development",
              "items": [
                "C++ SFML",
                "DirectX",
                "C++ OpenGL",
                "C++ SDL",
                "Unity 2D",
                "Python",
                "Electron.js"
              ]
            },
            {
              "category": "Web Frontend & UI/UX Design",
              "items": [
                "React",
                "Vite",
                "p5.js",
                "matter.js",
                "TailwindCSS",
                "Bootstrap",
                "Figma",
                "W3CSS"
              ]
            },
            {
              "category": "Web Backend",
              "items": [
                "Node.js",
                "Socket.io",
                "Supabase"
              ]
            },
            {
              "category": "Databases",
              "items": [
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Redis"
              ]
            },
            {
              "category": "Tools & Dev-Ops",
              "items": [
                "Git",
                "Docker",
                "npm/npx",
                "Firebase"
              ]
            }
];

export const QUOTES = [
  "We all need people who will give us feedbacks. That's how we improve.",
  "Hoa cũng đẹp, bầu trời cũng đẹp, nhưng hai thứ đó chẳng có gì giống nhau.",
  "Regret is not a sign that you were bad; it's a sign that you are now better than who you were.",
  "Thanh xuân giống như một cơn mưa rào, cho dù bị cảm lạnh bạn vẫn muốn đắm chìm trong cơn mưa ấy một lần nữa."
];

export const SCHOOLS: School[] = [
  {
    name: "HUS High School for Gifted Students (HSGS)",
    classes: "Final High School (A2 Mathematics)",
    avatar: "https://media.licdn.com/dms/image/v2/C4D0BAQH8dBq_RpRWxg/company-logo_200_200/company-logo_200_200/0/1630552772720?e=2147483647&v=beta&t=s3CdmcJEdbfMxY-sqwQ7QsOdSMUbOnPwxAAW-cNiBAw",
  },
  { name: "Thanh Xuân Nam Secondary School", classes: "2022-2024", avatar: "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448185185_944033227524875_4378490976267642481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEtT-c6EE6QNJPV1qvhex7Xdh9B44D_IBB2H0HjgP8gEFN0dMHts-EKdo_T769T1siU0jxZSywQAppZI7jfkpET&_nc_ohc=AYHIL11g5NcQ7kNvwHb2q8R&_nc_oc=AdoqRS-zmPKYw8BCnvkOW6D3KaM4Sp9zO8j23yS6uKWfN3JS2kZSAWqTq_SkeRgOn-A&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=LroEbAczo3lcefHMEqwNQg&_nc_ss=7a3a8&oh=00_AfxBMZxccx0_PvWFulKZfT4dZ3Qr7hIdqlUUP0YEHm_mQw&oe=69D0537C" },
  { name: "Vạn Phúc Secondary School", classes: "2020-2022", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9QaIqF4bnnxYmbgK8i4jVRE6bxkZzRzl8A&s" },
  { name: "Nguyễn Quý Đức Primary School", classes: "2019-2020", avatar: "https://static.kiddihub.com/images/01622167403.jpg" },
  { name: "Lê Quý Đôn - Hà Đông Primary School", classes: "2017-2019", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLiImL5kl9DIssJAwzUOCNKGsmqlAP7JJlA&s", },
  { name: "Trung Văn Primary School", classes: "2015-2017", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7l5XJC_OjK-Bk45baIcFqc5Lp5xE1RvwnGQ&s" },
];
