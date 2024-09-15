import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>Almost five years working as a Software Developer, in companies such as Hospital Albert Einstein, Zappts and IClubs.IO</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Intermediate (B1-B2)</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>System Analysis and Development Associate Degree - FATEC de São José dos Campos</span>
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>
              contact me
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
