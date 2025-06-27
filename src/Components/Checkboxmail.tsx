import { useState } from "react";
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Checkbox,
} from "@mui/material";

// List of checkbox options
const checkboxOptions: string[] = [
  "Animals / Pets",
  "Education",
  "Food",
  "Lifestyle",
  "Politics",
  "Art",
  "Energy & Solar Energy",
  "Gambling",
  "Marijuana / Vaporizers",
  "Real Estate",
  "Auto",
  "Entertainment & Music",
  "Gaming",
  "Marketing",
  "Beauty",
  "Environment",
  "General",
  "Medical",
  "EnvironmentSafety",
  "Blogging",
  "Events",
  "Health & Fitness",
  "News",
  "SEO",
  "Business / Entrepreneur",
  "Family / Parenting",
  "Home & Garden",
  "Other",
  "Sex & Adult",
  "Fashion",
  "Italian Sites",
  "Outdoors",
  "Shopping",
  "Directory",
  "Finance",
  "Legal",
  "Photography",
];

// Checkbox component to handle checkbox selection Typescript type for the props
type CheckboxmailProps = {
  name: string;
  formik: any;
};
function Checkboxmail({ name, formik }: CheckboxmailProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Function to handle checkbox selection on change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const current = formik.values[name] || [];

    const updated = checked
      ? [...current, value]
      : current.filter((v) => v !== value);

    formik.setFieldValue(name, updated);
  };

  //   const handleSubmit = () => {
  //     console.log("Selected options:", selectedOptions);
  //   };
  return (
    <>
      <Box>
        <Box>
          <FormGroup className="flex flex-row flex-wrap  w-full ">
            {checkboxOptions.map((optionValue) => (
              <Box key={name} className="w-1/2 md:w-1/5">
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "12px",
                    },
                  }}
                  control={
                    <Checkbox
                      size="small"
                      value={optionValue}
                      checked={formik.values[name]?.includes(optionValue)}
                      onChange={handleChange}
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                      }}
                    />
                  }
                  label={optionValue}
                />
              </Box>
            ))}
          </FormGroup>
        </Box>
      </Box>
    </>
  );
}

export default Checkboxmail;
