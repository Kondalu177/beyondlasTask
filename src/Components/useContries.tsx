import React, { useEffect, useState } from "react";

type Country = {
  code: string;
  name: string;
  flag: string;
  language: string;
};
function useContries() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=cca2,name,flags,languages")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item: any) => ({
          code: item.cca2?.toLowerCase() || "",
          name: item.name?.common || "",
          flag: item.flags?.svg || "",
          language: item.languages
            ? Object.values(item.languages).join(", ")
            : "N/A",
        }));
        setCountries(formatted);
      });
  }, []);

  return { countries };
}

export default useContries;
