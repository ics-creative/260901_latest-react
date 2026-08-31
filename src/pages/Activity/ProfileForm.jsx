import { useState } from "react";
import { TextInput } from "../../components/TextInput";

/**
 * ユーザーの情報を入力するフォーム
 */
export const ProfileForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="form">
      <TextInput
        onChange={(e) => setName(e.target.value)}
        label="Name"
        value={name}
      />
      <TextInput
        onChange={(e) => setAddress(e.target.value)}
        label="Address"
        value={address}
      />
      <TextInput
        onChange={(e) => setPhone(e.target.value)}
        label="Phone"
        value={phone}
      />
    </div>
  );
};
