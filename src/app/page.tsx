import Image from "next/image";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Info } from "./components/information";
import { SocialButtons } from "./components/social-buttons";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />

      <div className="buttons">
        <SocialButtons />
        <a className="primary-btn" href="mailto: jv.medeiros.gallina@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>

    </main>
  );
}
