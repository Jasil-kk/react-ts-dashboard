import React from "react";

interface UserCardProps {
  name: string;
  email: string;
  companyName: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, companyName }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition dark:text-white">
      <h2 className="font-semibold text-lg mb-2">{name}</h2>
      <p>
        <span className="font-medium">Email:</span> {email}
      </p>
      <p>
        <span className="font-medium">Company:</span> {companyName}
      </p>
    </div>
  );
};

export default UserCard;
