import Image from "next/image";

import './styles.scss'

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, I&apos;m João 👋</h1>
        <h2>Fullstack Software Engineer</h2>
      </div>
      <Image
        src="/me.jpeg"
        alt="Profile Image"
        width={310}
        height={290}
        priority
      />
    </div>
  )
}