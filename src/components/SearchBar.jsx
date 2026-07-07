export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by hotel name or city..."
      className="w-full max-w-2xl border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
    />
  );
}