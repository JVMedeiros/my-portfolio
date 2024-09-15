import Image from "next/image";
import { SectionTitle } from "../section-title";
import { Skill } from "../skill";

import "./styles.scss"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle content="Experience" />
      <p>Almost five years working as a Software Developer, in companies such as Hospital Albert Einstein, Zappts and IClubs.IO</p>
      <div className="experience-time">
        <Skill image="/react.png" measure={3} years="3 years"/>
        <Skill image="/react-native.svg" measure={1} years="1 year"/>
        <Skill image="/node.png" measure={5} years="5 years"/>
        <Skill image="/js.png" measure={5} years="5 years"/>
        <Skill image="/ts.png" measure={5} years="5 years"/>
        <Skill image="/golang.png" measure={1} years="1 year"/>
      </div>
    </div>
  )
}