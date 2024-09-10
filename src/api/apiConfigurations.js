//in this file make custom hooks for GET,DELETE,POST,PUT methodes for API RESPONSE FROM BACK-END

import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
//GET Request For Products
export function useGetAllProductsResponse() {
  async function getAllProductsResponse() {
    try {
      const res = await axios.get("http://localhost:8000/api/products/");
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
        url: `http://localhost:8000/api/products/${idProducts}`,
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
    },
  });
}
//UPDATE Request For Products
export function useUpdateProduct(getIdProductsForEdit) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newInfoProducts) => {
      return axios.put(
        `http://localhost:8000/api/products/${getIdProductsForEdit}`,
        newInfoProducts
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

//POST Request For Products
export function usePostProduct(
  setTitleProduct,
  setPriceProduct,
  setCountProduct,
  setImgProduct,
  setPopularityProduct,
  setSaleProduct,
  setColorsProduct
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newInfoProducts) => {
      return axios.post("http://localhost:8000/api/products", newInfoProducts);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      setTitleProduct("");
      setPriceProduct("");
      setCountProduct("");
      setImgProduct("");
      setPopularityProduct("");
      setSaleProduct("");
      setColorsProduct("");
    },
    onError: (err) => {
      console.log(err);
    },
  });
}
//GET Request For Comments
export function useGetAllCommenstResponse() {
  async function getAllCommentsResponse() {
    const res = await axios.get("http://localhost:8000/api/comments/");
    return res.data; // Return res.data
  }

  return useQuery({
    queryKey: ["comments"],
    queryFn: getAllCommentsResponse,
  });
}

//DELETE Request For Comments
export function useRemoveComments() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["removeComments"],
    mutationFn: (idCommentsDelete) => {
      return axios.delete(
        `http://localhost:8000/api/comments/${idCommentsDelete}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}

//PUT Request For Comments
export function useUpdateComments(commentId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateComments"],
    mutationFn: (newCommentInfo) => {
      return axios.put(
        `http://localhost:8000/api/comments/${commentId}`,
        newCommentInfo
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });
}

//POST Accept Comment For Comments
export function useAcceptComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["acceptComment"],
    mutationFn: (idCommentsConfirm) => {
      return axios.post(
        `http://localhost:8000/api/comments/accept/${idCommentsConfirm}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });
}

//POST Reject Comment For Comments
export function useRejectComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["rejectComment"],
    mutationFn: (idCommentsReject) => {
      return axios.post(
        `http://localhost:8000/api/comments/reject/${idCommentsReject}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
}
//-------------------------------------------------> Users Api <---------------------------------------------------------------------------

//GET Request For Users
export function useGetUserRequest() {
  async function getUsers() {
    const usersResponse = await axios.get("http://localhost:8000/api/users/");
    return usersResponse.data;
  }
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
}

//DELETE Request For Users
export function useRemoveUsers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["userDelete"],
    mutationFn: (userId) => {
      return axios.delete(`http://localhost:8000/api/users/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
}

//PUT Request For Users
export function useUpdateUser(userId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateUser"],
    mutationFn: (newUesrs) => {
      return axios.put(`http://localhost:8000/api/users/${userId}`, newUesrs);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
}
//->>>>>>>>>>>>>>>>>>>>>>>>> orders
export function useGetOrders() {
  async function getOrders() {
    const res = await axios.get("http://localhost:8000/api/orders/");
    return res.data;
  }
  return useQuery({ queryKey: ["orders"], queryFn: getOrders });
}
