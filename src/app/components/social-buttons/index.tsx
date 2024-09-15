import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/instagram-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./styles.scss"

export function SocialButtons() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/jvctrmd">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/jvmedeiros/">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/JVMedeiros">
        <GitHubIcon />
      </a>
      <a href="">
        <TwitterIcon />
      </a>
    </div>
  )
}