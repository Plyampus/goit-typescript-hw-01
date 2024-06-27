import axios from "axios";

// Визначення інтерфейсу для структури даних, які можуть бути повернуті.
// Це може бути будь-який тип, який ви очікуєте отримати від API.
interface Data {
  // ...
}

// Використання Generics для типізації повернутих даних.
async function fetchData<T = Data>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
