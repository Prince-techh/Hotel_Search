export default function HotelInfo({ hotel }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <img
        src={hotel.thumbnail}
        alt={hotel.name}
        className="w-full h-[450px] object-cover"
      />

      <div className="p-8">


        <h1 className="text-4xl font-bold text-gray-800">
          {hotel.name}
        </h1>

        <div className="flex items-center gap-6 mt-4 text-lg">

          <p className="text-yellow-500 font-semibold">
            ⭐ {hotel.rating}
          </p>

          <p className="text-gray-600">
            📍 {hotel.location}
          </p>

        </div>


        <p className="text-3xl font-bold text-blue-600 mt-6">
          ₹ {hotel.price}
          <span className="text-lg text-gray-500 font-normal">
            {" "}
            / night
          </span>
        </p>


        <div className="mt-8">

          <h2 className="text-2xl font-semibold mb-3">
            Description
          </h2>

          <p className="text-gray-600 leading-8">
            {hotel.description}
          </p>

        </div>

      </div>

    </div>
  );
}