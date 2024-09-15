import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <h1>Hi, I'm João 👋</h1>
          <h2>Fullstack Software Engineer</h2>
        </div>
      </div>
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
