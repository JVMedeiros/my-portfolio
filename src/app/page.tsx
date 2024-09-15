import { Experience } from './components/experience'
import { Header } from './components/header'
import { Info } from './components/information'

import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialButtons } from './components/social-buttons'

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <div className="buttons">
          <SocialButtons/>
          <a className="btn-primary" href="mailto:jv.medeiros.gallina@gmail.com" target="_blank">
            contact me
            <EmailIcon/>
          </a>
        </div>
    </main>
  )
}