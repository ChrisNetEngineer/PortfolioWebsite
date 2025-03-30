import Nav from "./components/nav";
import FrontPage from "./components/Front";
import LinkWithMeIcon from "./components/LinkWithMeIcon";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-500/70 dark:from-gray-900/50 dark:to-transparent">
        <Nav />
      </div>
      <div>
        <FrontPage />
        <LinkWithMeIcon />
      </div>
    </div>
  );
}
