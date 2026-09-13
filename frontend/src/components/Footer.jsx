function Footer({ school }) {
  return (
    <footer className="site-footer">
      <strong>{school.schoolName}</strong>
      <span>{school.address}</span>
      <span>{school.email} · {school.phone}</span>
    </footer>
  )
}

export default Footer