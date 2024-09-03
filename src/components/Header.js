import Logo from "../assets/logo.png"
import "./Header.css"
export default function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="logo" height="50" width="50"/>
        <a href="/" className="home">Home</a>
    </header>
  )
}
