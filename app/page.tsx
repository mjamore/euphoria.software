import Image from "next/image";
import { Inter } from "next/font/google";
import cn from "classnames";
import styles from "./page.module.css";

import ServiceOffering from "@/components/ServiceOffering";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn(styles.main, inter.className)}>
      <div className="flex items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-bold mb-4">Euphoria Software</h1>
          <h2 className="text-xl font-bold mb-2">You Dream It, We Build It</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            expedita incidunt dolorem! Necessitatibus laboriosam possimus vitae
            beatae laudantium amet iusto vel, dignissimos dolore veniam, sed, a
            in accusamus? Facere, porro.
          </p>
        </div>
        <video src="mac-morph.mp4" autoPlay loop muted playsInline />
      </div>

      <div className="flex">
        <ServiceOffering
          name="Create Engaging Websites"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea atque rem, pariatur, doloribus voluptatibus, assumenda numquam eius voluptate unde odit? Dignissimos neque minima doloremque facere libero earum quidem nulla!"
          buttonText="Help me build my website!"
        />
        <ServiceOffering
          name="Mobile Application Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea atque rem, pariatur, doloribus voluptatibus, assumenda numquam eius voluptate unde odit? Dignissimos neque minima doloremque facere libero earum quidem nulla!"
          buttonText="Help me build my mobile app!"
        />
        <ServiceOffering
          name="AI Tool Integration"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea atque rem, pariatur, doloribus voluptatibus, assumenda numquam eius voluptate unde odit? Dignissimos neque minima doloremque facere libero earum quidem nulla!"
          buttonText="Help me integrate AI into my app!"
        />
        <ServiceOffering
          name="Software Consulting"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea atque rem, pariatur, doloribus voluptatibus, assumenda numquam eius voluptate unde odit? Dignissimos neque minima doloremque facere libero earum quidem nulla!"
          buttonText="Help me improve my software engineering practices!"
        />
      </div>

      <div className="bg-blue-500 p-8">
        <h4 className="mb-6">Let&apos;s Work Together</h4>
        <form className="flex flex-col">
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" />
          <button type="submit">Contact</button>
        </form>
      </div>
    </main>
  );
}
