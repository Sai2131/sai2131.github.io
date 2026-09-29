const LINKEDINURL = "https://www.linkedin.com/in/sai2131/"
const EMAIL  = "sai2131@icloud.com"
const PHONE = "(469)-428-3133"

export function Header() {

  return (
    <div className="text-center py-4">
      <h1 className="display-4 fw-bold mb-3 tracking-tight" style={{ color: '#f8fafc' }}>Sai Tarra</h1>
      <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
        <a className="text-decoration-none fw-medium" href={LINKEDINURL}>LinkedIn</a>
        <span className="text-secondary opacity-50 d-none d-md-inline">•</span>
        <a className="text-decoration-none fw-medium" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <span className="text-secondary opacity-50 d-none d-md-inline">•</span>
        <a className="text-decoration-none fw-medium" href={`tel:+1${PHONE.replace("()-+", "")}`}>{PHONE}</a>
        <span className="text-secondary opacity-50 d-none d-md-inline">•</span>
        <a className="text-decoration-none fw-bold" href="/Portfolio_Website/Resume.pdf" target="_blank" rel="noreferrer" >Resume</a>
      </div>
    </div>
  )
}