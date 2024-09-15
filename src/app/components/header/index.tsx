import Image from "next/image";

import './styles.scss'

export function Header() {
  return(
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
  )
}