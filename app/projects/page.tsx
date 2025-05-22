import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My personal projects",
};

interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "YoutubeParser",
    year: 2025,
    description: "Analyze videos for inappropriate content",
    url: "https://github.com/achrysaetos/youtube-moderation",
  },
  {
    title: "ScreenshotAI",
    year: 2025,
    description: "Chrome extension for actionable insight",
    url: "https://github.com/achrysaetos/screenshot-extension",
  },
  {
    title: "ImageX",
    year: 2025,
    description: "Image visualization and bounding box tool",
    url: "https://github.com/achrysaetos/image-viewer",
  },
  {
    title: "Chatterup",
    year: 2023,
    description: "AI-powered chatbot for querying documents",
    url: "https://github.com/achrysaetos/nextjs-production",
  },
  {
    title: "CourseTable",
    year: 2022,
    description: "Course search database for Yale students",
    url: "https://github.com/coursetable/coursetable",
  },
  {
    title: "HouseMe",
    year: 2020,
    description: "Subletting web app for campuses",
    url: "https://github.com/yale-swe/s22-college-sublet",
  },
  {
    title: "Twitter Clone",
    year: 2019,
    description: "Fully functional social networking site",
    url: "https://github.com/achrysaetos/Twitter-clone",
  },
  {
    title: "Indeedio",
    year: 2019,
    description: "Personalized job search engine",
    url: "https://github.com/achrysaetos/indeedio",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="float-right text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
        <a href="https://github.com/achrysaetos?tab=repositories" target="_blank" rel="noopener noreferrer">
          see more →
        </a>
      </div>
    </section>
  );
}
