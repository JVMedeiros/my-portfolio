import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Info } from "./components/information";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
        
          <div className="buttons">
            <div className="social">

            </div>
            <button>
              contact me
            </button>
          </div>

    </main>
  );
}
