const baseURL =
  import.meta.env.VITE_BACKEND_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://tastynest-d8t1.onrender.com");
    
    
export default baseURL;