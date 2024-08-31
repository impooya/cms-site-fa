import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useGetAllProductsResponse() {
  async function getAllProductsResponse() {
    try {
      const res = await axios.get("http://localhost:3000/api/products/");
      return res.data; // Return the data directly
    } catch (err) {
      console.log(err);
      throw err; // Optionally re-throw the error for further handling
    }
  }

  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsResponse,
  });
}
