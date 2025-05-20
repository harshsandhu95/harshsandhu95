import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Harsh Sandhu",
  initials: "HS",
  url: "https://harshsandhu.com",
  location: "Ludhiana, IN",
  locationLink: "https://www.google.com/maps/place/ludhiana",
  description:
    "Harsh Sandhu is a software engineer and entrepreneur based in Ludhiana, India. He is the co-founder of Waterhouse Foundation and a fullstack developer at MagicEdtech.",
  summary:
    "I started coding when I was 12 years old. I love building things and helping people. I'm a fullstack developer and a startup founder.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "me@harshsandhu.com",
    tel: "+919878781378",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/harshsandhu95",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/harshsandhu95",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/harshsandhu95",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@harshsandhu95",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@harshsandhu.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MagicEdtech",
      href: "https://magicedtech.com",
      badges: [],
      location: "Hybrid",
      title: "Fullstack Developer",
      logoUrl:
        "https://www.magicedtech.com/wp-content/uploads/2022/12/magicedtech.svg",
      start: "August 2024",
      end: "Present",
      description:
        "I'm a fullstack developer at MagicEdtech. I'm responsible for building the frontend and backend of the MagicEdtech platform.",
    },
  ],
  education: [
    {
      school: "CT University",
      href: "https://ctuniversity.in",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "https://www.ctuniversity.in/images/ct-logo.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [],
} as const;
