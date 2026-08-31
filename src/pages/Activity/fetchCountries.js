import { delayedPromise } from "../../logics/delayedPromise";

const countries = [
  { value: "argentina", label: "Argentina" },
  { value: "australia", label: "Australia" },
  { value: "brazil", label: "Brazil" },
  { value: "canada", label: "Canada" },
  { value: "chile", label: "Chile" },
  { value: "china", label: "China" },
  { value: "colombia", label: "Colombia" },
  { value: "costa-rica", label: "Costa Rica" },
  { value: "egypt", label: "Egypt" },
  { value: "fiji", label: "Fiji" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
  { value: "india", label: "India" },
  { value: "italy", label: "Italy" },
  { value: "jamaica", label: "Jamaica" },
  { value: "japan", label: "Japan" },
  { value: "kenya", label: "Kenya" },
  { value: "mexico", label: "Mexico" },
  { value: "morocco", label: "Morocco" },
  { value: "new-zealand", label: "New Zealand" },
  { value: "nigeria", label: "Nigeria" },
  { value: "papua-new-guinea", label: "Papua New Guinea" },
  { value: "peru", label: "Peru" },
  { value: "samoa", label: "Samoa" },
  { value: "south-africa", label: "South Africa" },
  { value: "south-korea", label: "South Korea" },
  { value: "spain", label: "Spain" },
  { value: "sweden", label: "Sweden" },
  { value: "thailand", label: "Thailand" },
  { value: "united-states", label: "United States" },
];

/**
 * 国を取得します
 */
export const fetchCountries = () => delayedPromise(countries, 1500);
