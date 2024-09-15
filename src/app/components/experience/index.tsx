import Image from "next/image";
import { SectionTitle } from "../section-title";

import "./styles.scss"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle content="Experience" />
      <p>Almost five years working as a Software Developer, in companies such as Hospital Albert Einstein, Zappts and IClubs.IO</p>
      <div className="experience-time">
        <div className="experience-language">
          <Image
            src="/react.png"
            alt="React logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>3 years</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image
            src="/react-native.svg"
            alt="React Native logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 year</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image
            src="/node.png"
            alt="Node logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-5">
              <span>5 years</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image
            src="/js.png"
            alt="Javascript logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-5">
              <span>5 years</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image
            src="/ts.png"
            alt="Typescript logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-5">
              <span>5 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}