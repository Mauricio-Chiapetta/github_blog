export function Form({ handleSearch, query, setQuery, isLoading }) {
  return (
    <form
      onSubmit={handleSearch}
      className="grid grid-cols-1 gap-6 px-4 lg:mx-52 mb-2"
    >
      <input
        type="text"
        placeholder="Buscar Repositorios"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-base-input
            py-4 px-2 rounded-lg ring-1 ring-base-border hover:ring-base-label hover:ring-2 transition text-base-title focus:outline-none focus:ring-4 focus:ring-base-span"
      />

      <button
        type="submit"
        className="text-base-text bg-base-post max-w-20 rounded-lg hover:bg-base-border hover:text-base-subtitle transition"
      >
        {isLoading ? "Carregando..." : "Buscar"}
      </button>
    </form>
  );
}
