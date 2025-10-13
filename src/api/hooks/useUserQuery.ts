import { api } from "@/api/apiClient";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => api.get("/user/me").then(res => res.data),
  });
