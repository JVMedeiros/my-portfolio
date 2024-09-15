import "./styles.scss"

interface SectionTitleProps {
  content: string
}

export function SectionTitle({content}: SectionTitleProps) {
  return (
    <h3 className="section-title">{content}</h3>
  )
}