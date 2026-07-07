import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={hotel.thumbnail}
        alt={hotel.name}
        className="h-48 w-full object-cover"
      />

   
      <div className="p-4">

        <h3 className="text-xl font-bold text-gray-800">
          {hotel.name}
        </h3>

<p className="text-gray-500 text-sm">
  📍 {hotel.location}
</p>

        <p className="text-yellow-500 font-semibold mt-2">
          ⭐ {hotel.rating} / 5
        </p>

<p className="text-blue-600 font-bold mt-2">
  ₹ {hotel.price} / Night
</p>
        <button
          onClick={() => navigate(`/hotel/${hotel.id}`)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </button>

      </div>
    </div>
  );
}