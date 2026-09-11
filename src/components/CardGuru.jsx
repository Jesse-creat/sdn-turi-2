function CardGuru({ teacher }) {
  return <article className="profile-card"><div className="avatar">{teacher.initials}</div><h3>{teacher.name}</h3><p>{teacher.role}</p></article>
}

export default CardGuru