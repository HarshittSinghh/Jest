jest.mock("./db");         
const db = require("./db");
const getUser = require("./user");

test("returns fake users from mock DB", async () => {
  // Setup mock for multiple users
  db.findUserById
    .mockResolvedValueOnce({ id: 1, name: "Harshit" })
    .mockResolvedValueOnce({ id: 2, name: "Kriti" })
    .mockResolvedValueOnce({ id: 3, name: "Harshita" })
    .mockResolvedValueOnce({ id: 4, name: "Aayush" })
    .mockResolvedValueOnce({ id: 5, name: "Jyoti" })
    .mockResolvedValueOnce({ id: 6, name: "Shreyan" });

  const user1 = await getUser(1);
  expect(user1).toEqual({ id: 1, name: "Harshit" });
  expect(db.findUserById).toHaveBeenCalledWith(1);

  const user2 = await getUser(2);
  expect(user2).toEqual({ id: 2, name: "Kriti" });
  expect(db.findUserById).toHaveBeenCalledWith(2);

  const user3 = await getUser(3);
  expect(user3).toEqual({ id: 3, name: "Harshita" });
  expect(db.findUserById).toHaveBeenCalledWith(3);

  const user4 = await getUser(4);
  expect(user4).toEqual({ id: 4, name: "Aayush" });
  expect(db.findUserById).toHaveBeenCalledWith(4);

  const user5 = await getUser(5);
  expect(user5).toEqual({ id: 5, name: "Jyoti" });
  expect(db.findUserById).toHaveBeenCalledWith(5);

  const user6 = await getUser(6);
  expect(user6).toEqual({ id: 6, name: "Shreyan" });
  expect(db.findUserById).toHaveBeenCalledWith(6);
});
