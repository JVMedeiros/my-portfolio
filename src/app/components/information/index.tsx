import { SectionTitle } from "../section-title"
import "./styles.scss"

export function Info() {
  return (
    <div className="infos">
      <SectionTitle content="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN - Intermediate (B1-B2)</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle content="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>System Analysis and Development Associate Degree - FATEC de São José dos Campos</span>
      </div>
    </div>
  )
}