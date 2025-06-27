import * as Yup from "yup";

const FormValidationSchema = Yup.object().shape({
  terms: Yup.boolean().oneOf([true], "You must accept the Terms & Conditions"),
  websiteUrl: Yup.string()
    .matches(
      /^((https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/\S*)?$/,
      "Enter a valid website URL"
    )
    .required("Website URL is Required"),
  country: Yup.string().required("Country is Required"),
  language: Yup.string().required("Language is Required"),
  description1: Yup.string()
    .required("Description is Required")
    .min(350, "Minimum 350 characters required"),
  homepageLink: Yup.object({
    Description_Website: Yup.string().required("Description is Required"),
  }),
  description3: Yup.string()
    .required("Description is Required")
    .min(350, "Minimum 350 characters required"),
  advertiserMinLinks: Yup.number().when("advertiserLinkCount", {
    is: "A maximum number of links to the advertiser:",
    then: (schema) =>
      schema.min(0, "Min must be >= 0").required("Min is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  advertiserMaxLinks: Yup.number().when("advertiserLinkCount", {
    is: "A maximum number of links to the advertiser:",
    then: (schema) =>
      schema.min(0, "Max must be >= 0").required("Max is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  articleMinWords: Yup.number().when("articleWordCount", {
    is: "No, the advertiser (client) needs to provide the content",
    then: (schema) =>
      schema.min(0, "Min must be >= 0").required("Min is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  articleMaxWords: Yup.number().when("articleWordCount", {
    is: "No, the advertiser (client) needs to provide the content",
    then: (schema) =>
      schema.min(0, "Max must be >= 0").required("Max is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default FormValidationSchema;
