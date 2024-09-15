import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/instagram-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./styles.scss"

export function SocialButtons() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/jvctrmd" target="_blank">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/jvmedeiros/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/JVMedeiros" target="_blank">
        <GitHubIcon />
      </a>
    </div>
  )
}