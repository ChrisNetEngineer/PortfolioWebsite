import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function LinkWithMeIcon() {
  return (
    <div className="mt-10 ml-6 lg:ml-10 ">
      <nav>
        <ul className="flex space-x-7">
          <li>
            <Link href="https://github.com/ChrisNetEngineer">
              <FaGithub size={32} className="black hover:text-gray-600" />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/yourlinkedinprofile">
              <FaLinkedin
                size={32}
                className="text-blue-600 hover:text-blue-800"
              />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/yourtwitterhandle">
              <FaTwitter
                size={32}
                className="text-sky-500 hover:text-sky-700"
              />
            </Link>
          </li>
          <li>
            <Link href="mailto:your.email@example.com">
              <FaEnvelope
                size={32}
                className="text-gray-700 hover:text-gray-500"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
