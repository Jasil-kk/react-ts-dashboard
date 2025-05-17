import React from "react";
import useUser from "./useUser";
import UserCardSkeleton from "./UserCardSkeleton";
import UserCard from "./UserCard";
import AddButton from "../../components/Buttons/AddButton";
import AddUser from "./AddUser";
import SearchIcon from "../../assets/icons/SearchIcon";

const Users: React.FC = () => {
  const {
    filteredUsers,
    loading,
    error,
    addModal,
    setAddModal,
    formik,
    searchTerm,
    setSearchTerm,
    sortOrder,
    toggleSortOrder,
  } = useUser();

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="w-full h-full overflow-auto p-5">
      <h1 className="mb-2 text-[#23272E] dark:text-[#ffffff] font-bold text-2xl">
        Users
      </h1>

      <div className="mb-5 w-full flex items-center justify-end gap-5 flex-wrap-reverse">
        <button
          onClick={toggleSortOrder}
          className="px-4 h-[38px] bg-green-800 text-white rounded hover:bg-green-900 cursor-pointer"
        >
          Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>

        <div className="relative w-full max-w-[300px]">
          <input
            type="text"
            placeholder="Search user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm font-normal text-[#202224] placeholder:text-[#20222481] outline-0 border border-[#D5D5D5] dark:border-[#7a7a7a] focus:border-[#a8a7a7] dark:focus:border-[#e2e0e0] rounded-lg bg-[#FFFFFF] dark:bg-[#797878] w-full h-[38px] pl-9 pr-4"
          />
          <SearchIcon className="absolute top-1/2 -translate-y-[50%] left-3" />
        </div>
        <AddButton text="Add New User" onClick={() => setAddModal(true)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <UserCardSkeleton key={idx} />
          ))
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map(({ id, name, email, company }) => (
            <UserCard
              key={id}
              name={name}
              email={email}
              companyName={company.name}
            />
          ))
        ) : (
          <p className="mt-10 text-center col-span-full text-gray-500 dark:text-gray-300">
            No users found.
          </p>
        )}
      </div>
      <AddUser
        isOpen={addModal}
        onClose={() => setAddModal(false)}
        formik={formik}
      />
    </div>
  );
};

export default Users;
