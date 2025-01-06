import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function IconText({ icon, text, className }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <FontAwesomeIcon icon={icon} className="text-base-span" />
      <p className="text-base-subtitle">{text}</p>
    </span>
  );
}

export function ProfileCard({ profile }) {
  return (
    <div className="bg-base-profile bottom-28 relative p-7 rounded-xl lg:mx-52 sm:mx-12 mx-4 flex flex-col sm:flex-row">
      <img
        src={profile.avatar_url}
        alt="profilePic"
        className="sm:w-44 w-32 rounded-full mx-auto sm:mx-0 shadow-lg shadow-black/25"
      />

      <div className="flex flex-col sm:px-9 px-4 mt-4 sm:mt-0">
        <span className="flex sm:gap-x-96 items-center flex-col sm:flex-row gap-4">
          <h1 className="text-base-title font-bold sm:text-xl text-lg">
            {profile.name}
          </h1>
          <a
            href={profile.html_url}
            target="_blanck"
            className="text-blue text-sm border-b-blue border-b hover:border-b-2 transition flex items-center"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </span>
        <p className="text-base-text mt-4 text-center sm:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum magni
          reiciendis libero vitae? Impedit assumenda necessitatibus mollitia
          eligendi dolor veritatis.
        </p>
        <div className="flex sm:gap-8 sm:mt-12 mt-8 flex-col sm:flex-row gap-4">
          <IconText icon={faGithub} text={profile.login} />
          <IconText icon={faCity} text={profile.location} />
          <IconText icon={faUsers} text={`${profile.followers} Seguidores`} />
        </div>
      </div>
    </div>
  );
}
