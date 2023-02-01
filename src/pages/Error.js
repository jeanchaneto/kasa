import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  )
}

export default Error;