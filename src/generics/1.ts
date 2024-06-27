import axios from "axios";

interface Data {
  id: number; 
  title: string; 
  description: string; 
  createdAt: Date; 
  updatedAt: Date;
}

async function fetchData<T = Data>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error; 
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

fetchData<User>("https://api.example.com/users/1")
  .then((user) => {
    console.log(user.id); 
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
