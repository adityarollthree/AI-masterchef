import chefLogo from "../images/chef-claude-logo.png";
export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="chef-claude-logo" />
      <h1>Chef on Clouds</h1>
    </header>
  );
}
