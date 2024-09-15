import Image from "next/image";

import './styles.scss'

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, I'm João 👋</h1>
        <h2>Fullstack Software Engineer</h2>
      </div>
      <Image
        src="/me.jpeg"
        alt="Next.js logo"
        width={310}
        height={290}
        priority
      />
    </div>
  )
}