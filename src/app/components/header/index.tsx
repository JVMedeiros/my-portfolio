import Image from "next/image";

import './styles.scss'

export function Header() {
  return(
    <div className="header">
    <Image
      src="/me.jpeg"
      alt="Next.js logo"
      width={325}
      height={310}
      priority
    />
    <div>
      <h1>Hi, I'm João 👋</h1>
      <h2>Fullstack Software Engineer</h2>
    </div>
  </div>
  )
}