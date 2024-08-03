import { dbConnPool } from "./index.js";

// 根据用户名查询用户是否存在
export const queryUserByUsername = async (username) => {
  const sqlStr = "select count(*) from users where username = ?";
  const [results, fields] = await dbConnPool.execute(sqlStr, [username]);
  console.log(results, fields);
};
