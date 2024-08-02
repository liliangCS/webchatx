import { http } from "@/utils";

export const userLogin = async (username, password) => {
  const res = await http.post("/user/login", { username, password });
  console.log(res);
};
