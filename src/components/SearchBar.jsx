export default function SearchBar() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-6xl">
      <form className="grid grid-cols-5 gap-4">


        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Destination
          </label>

          <input
            type="text"
            placeholder="Enter city or hotel"
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Check In
          </label>

          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Check Out
          </label>

          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Guests
          </label>

          <select className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>

      </form>
    </div>
  );
}