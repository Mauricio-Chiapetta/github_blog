import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function RepoCards({ repository }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return (
    <div className="grid grid-cols-1 gap-6 px-4 lg:mx-52 mb-2">
      <h1 className="font-bold text-base-text">
        <span className="text-base-title">Total:</span> {repository.length}
      </h1>
      {repository.map((repo) => (
        <div
          key={repo.id}
          className="bg-base-post shadow-md rounded-lg p-6 border-4 border-base-border hover:border-base-label transition-colors duration-300"
        >
          <h3 className="text-lg sm:text-xl font-bold text-base-title mb-2">
            {repo.name.toUpperCase()}
          </h3>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <p className="text-sm text-base-subtitle ">
              Criado em :{" "}
              <span className="text-base-title font-semibold">
                {formatDate(repo.created_at)}
              </span>
            </p>
            <p className="text-sm text-base-subtitle ">
              Atualizado em :{" "}
              <span className="text-base-title font-semibold">
                {formatDate(repo.updated_at)}
              </span>
            </p>
          </div>
          <h3 className="text-base-subtitle mb-1">
            Linguagem:{" "}
            <span className="text-base-text font-bold">
              {repo.language || "Readme"}
            </span>
          </h3>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-sky-400 hover:underline relative flex items-center gap-2 transition animate-pulse max-w-36"
          >
            Ver Repositório
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      ))}
    </div>
  );
}