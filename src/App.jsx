import { useState, useEffect } from "react";
import { ProfileCard } from "./components/ProfileCard";
import { RepoCards } from "./components/RepoCards";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
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
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = async (ev) => {
    ev.preventDefault();
    if (!query.trim()) {
      alert("Por favor, insira um termo de busca.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}+user:Mauricio-Chiapetta`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Erro ao buscar o repositório. . .");
      }

      const data = await response.json();
      setFilteredRepositories(data.items);
      setQuery("");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro");
    } finally {
      setIsLoading(false);
    }
  };

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
      <Form
        handleSearch={handleSearch}
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
      />
      <RepoCards
        repository={
          filteredRepositories.length > 0 ? filteredRepositories : repository
        }
      />
    </>
  );
}

export default App;
