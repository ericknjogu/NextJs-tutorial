import AddNewUser from "@/components/add-new-user";
import { getUsersAction } from "../actions";
import SingleUserCard from "@/components/single-user";

async function UserManagement() {
  const getListOfUsers = await getUsersAction();

  console.log(getListOfUsers);

  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard
              key={userItem._id}
              user={userItem}
            />
          ))
        ) : (
          <h2>No users found please add new user </h2>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
