export const fetchHotels = async ()=> {
    try {
        const res = await fetch("https://demohotelsapi.pythonanywhere.com/hotels/");
        const data = res.json();
        return data;
    }
catch (error) {
  console.error(error);
  setError("Unable to load hotels. Please try again later.");
}
};