import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Hey, I'm Leck.
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a software engineer in San Francisco, currently working on startups.
        </p>
        <p>
          Previously, I was at a few
          {" "}
          <a
            href="https://www.linkedin.com/in/leck-tang-b15b89171"
            target="_blank"
          >
            other companies
          </a>
          {" "}
          where I helped implement AI intake for home services and built visualization tools for infrastructure planning.
        </p>
        <p>
          Before that, I graduated from Yale with a double major in CS and Econ, and in high school, I published programming manuals for Java in the Apple iBooks store.
        </p>
        <p>
          I'm excited about fintech, b2b saas, startups, AI, and VR.
        </p>
        <p>
          Would you like to{" "}
          <a href="/" target="_blank">
            chat with me
          </a>
          ?
        </p>
      </div>
    </section>
  );
}
