import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  isNew?: boolean;
}

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [addModal, setAddModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isSorted, setIsSorted] = useState<boolean>(false); // NEW state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAddUserSubmit = (
    values: { name: string; email: string; company_name: string },
    {
      resetForm,
      setSubmitting,
    }: {
      resetForm: () => void;
      setSubmitting: (isSubmitting: boolean) => void;
    }
  ) => {
    const newUser: User = {
      id: users.length + 1,
      name: values.name,
      email: values.email,
      company: {
        name: values.company_name,
      },
      isNew: true,
    };

    setUsers([newUser, ...users]);
    setAddModal(false);
    resetForm();
    setSubmitting(false);

    setIsSorted(false);

    setTimeout(() => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === newUser.id ? { ...user, isNew: false } : user
        )
      );
    }, 5000);
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company_name: Yup.string().required("Company name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company_name: "",
    },
    validationSchema: UserSchema,
    onSubmit: handleAddUserSubmit,
  });

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!isSorted) {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      }

      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    setIsSorted(true);
  };

  return {
    users,
    filteredUsers,
    loading,
    error,
    setUsers,
    addModal,
    setAddModal,
    formik,
    searchTerm,
    setSearchTerm,
    sortOrder,
    toggleSortOrder,
  };
};

export default useUsers;
