import React from "react";
import "./Hero.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faX } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { Link } from "react-scroll";

function Hero({ who }) {
  return (
    <div className="hero-overlay">
      <div>
        <p className="para">0.1 &nbsp; Intro</p>
        <h1 className="intro-head">Who I Am</h1>
        <p className="who-iam-para">{who}</p>
        <div>
          {/* Scroll to the Contact section */}
          <a href="#Contact">
            <h2 className="amigo">Let's get going, amigo</h2>
          </a>
        </div>

        <div className="hero-icon">
          <a
            href="https://github.com/aswanth-v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://linkedin.com/in/aswanth-v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://t.me/LUCIFER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>

          <a
            href="https://twitter.com/aswanth962072"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faX} />
          </a>
        </div>
      </div>
      <div className="hero-textsphere">
        <TagCloud
          options={(w) => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
            initSpeed: "fast",
            keep: true,
          })}
          onClick={(tag) => alert(tag)}
          onClickOptions={{ passive: true }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Redux",
            "Next.js",
            "TailwindCSS",
            "SQL",
            "TypeScript",
            "Angular",
            "Java",
            "C++",
            "Three.js",
            "Python",
            "Django",
            "GraphQL",
            "Firebase",
            "AWS",
            "Docker",
            "PostgreSQL",
            "MySQL",
            "Vue.js",
            "Jest",
            "SASS",
            "Bootstrap",
            "Kubernetes",
            "WebSocket",
            "Nginx",
            "CI/CD",
            "Linux",
            "Framer Motion",
            "Figma",
            "REST API",
            "Vite",
            "Zod",
            "Prisma",
            "Stripe",
            "Jira",
            "Notion",
            "Supabase",
            "tRPC",
            "WebRTC",
            "ESLint",
            "Prettier",
            "React Native",
            "Expo",
            "Webpack",
          ]}
        </TagCloud>
      </div>
    </div>
  );
}

export default Hero;
