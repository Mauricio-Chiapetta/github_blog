import { useState, useEffect } from "react";
import { ProfileCard } from "./components/ProfileCard";
import { RepoCards } from "./components/RepoCards";
import { Header } from "./components/Header";

async function fetchGithubProfile() {
  const response = await fetch(
    "https://api.github.com/users/Mauricio-Chiapetta"
  );
  const data = await response.json();
  return data;
}

async function fetchGithubRepositories() {
  const response = await fetch(
    "https://api.github.com/users/Mauricio-Chiapetta/repos"
  );
  const data = await response.json();
  return data;
}

function App() {
  const [profile, setProfile] = useState([]);
  const [repository, setRepository] = useState([]);

  function sortRepositoriesByDate(repositories) {
    return repositories.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }

  useEffect(() => {
    fetchGithubProfile().then((res) => {
      setProfile(res);
      console.log("Dados: ", res);
    });
  }, []);

  useEffect(() => {
    fetchGithubRepositories().then((res) => {
      const sortedRepos = sortRepositoriesByDate(res);
      setRepository(sortedRepos);
      console.log("repository:", res);
    });
  }, []);

  return (
    <>
      <Header />
      <ProfileCard profile={profile} />
      {/* fazer o campo de input para procurar repositórios e se não tiver renderizar um componente dizendo que o repositório não existe */}
      <RepoCards repository={repository} />
    </>
  );
}

export default App;
