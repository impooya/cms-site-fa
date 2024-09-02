import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
//GET Request For Products
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

//DELETE Request For Products
export function useRemoveProducts(idProducts) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["removeProduct"],
    mutationFn: (idProducts) => {
      return axios({
        method: "delete",
        url: `http://localhost:3000/api/products/${idProducts}`,
      });
    },
    onSuccess: () => {
      const products = queryClient.getQueryData(["products"]) || [];
      const newProducts = products.filter(
        (product) => product.id !== Number(idProducts)
      );
      queryClient.setQueryData(["products"], newProducts);
    },
    onError: (error) => {
      console.error("Error deleting product:", error.message);
      // Optionally, you can show an error message to the user here
    },
  });
}

export function useUpdateProduct(getIdProductsForEdit) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newInfoProducts) => {
      return axios.put(
        `http://localhost:3000/api/products/${getIdProductsForEdit}`,
        newInfoProducts
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
