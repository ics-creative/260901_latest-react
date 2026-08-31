import { use, useState } from "react";
import { SelectBox } from "../../components/SelectBox";
import { TextInput } from "../../components/TextInput";

/**
 * アンケートを入力するフォーム
 */
export const QuestionnaireForm = ({ resource }) => {
  const countries = use(resource);
  const [animals, setAnimals] = useState("");
  const [foods, setFoods] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="form">
      <TextInput
        onChange={(e) => setAnimals(e.target.value)}
        label="Favorite Animals"
        value={animals}
      />
      <TextInput
        onChange={(e) => setFoods(e.target.value)}
        label="Favorite Foods"
        value={foods}
      />
      <SelectBox
        label="Favorite Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        list={countries}
      />
    </div>
  );
};
