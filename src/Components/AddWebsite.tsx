import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkboxmail from "./Checkboxmail.tsx";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputBase,
  TextareaAutosize,
} from "@mui/material";
import CreateOffer from "./CreateOffer.tsx";
import Article from "./Article.tsx";
import axios from "axios";
import { useFormik } from "formik";
import FormValidation from "./Validation/FormValidation.tsx";
import useContries from "./Hooks/useContries.tsx";
import ReactVideo from "../assets/React.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function AddWebsite() {
  // State for the form inputs
  const [isAccepted, setIsAccepted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const { countries } = useContries();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const rowData = location.state;
  const navigate = useNavigate();

  // Formik form configuration and validation
  const formikInitialDefaults = {
    terms: false,
    websiteUrl: "",
    country: "us",
    language: "us",
    mainCategories: [],
    description1: "",
    normalOffer: {
      Guest_posting: "",
      Link_insertion: "",
    },
    greyNiche: {
      Enter_price: "",
      GamblingGuest_posting1: "",
      GamblingLink_insertion1: "",
      CryptoGuest_posting1: "",
      CryptoLink_insertion1: "",
      AdultGuest_posting1: "",
      AdultLink_insertion1: "",
      GamblingGuest_posting2: "",
      GamblingLink_insertion2: "",
      CryptoGuest_posting2: "",
      CryptoLink_insertion2: "",
      AdultGuest_posting2: "",
      AdultLink_insertion2: "",
    },
    homepageLink: {
      Guest_posting: "",
      Description_Website: "",
    },
    isArticleIncluded: "Yes",
    taggingPolicy: "We do not tag paid articles.",
    articleWordCount: "Length of the article is not limited.",
    articleMinWords: "",
    articleMaxWords: "",
    advertiserLinkCount: "We do not tag paid articles.",
    advertiserMinLinks: "",
    advertiserMaxLinks: "",
    allowDoFollowLinks: "Yes",
    otherLinksInArticle:
      "We DO NOT allow links to other websites in the content of the article.",
    linkTypeAllowed: "Only brand links, URL, navigational, graphic links.",
    description3: "",
  };

  // Function to handle expanding  showing data in form fields
  const getInitialValues = () => {
    if (rowData) {
      return {
        ...formikInitialDefaults,
        ...rowData,
        mainCategories: Array.isArray(rowData.mainCategories)
          ? rowData.mainCategories
          : rowData.mainCategories
          ? [rowData.mainCategories]
          : [],
        normalOffer: {
          ...formikInitialDefaults.normalOffer,
          ...(rowData.normalOffer || {}),
        },
        greyNiche: {
          ...formikInitialDefaults.greyNiche,
          ...(rowData.greyNiche || {}),
        },
        homepageLink: {
          ...formikInitialDefaults.homepageLink,
          ...(rowData.homepageLink || {}),
        },
        // Add similar merging for other nested objects if needed
      };
    }
    // local storage for form data save
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      try {
        return {
          ...formikInitialDefaults,
          ...JSON.parse(savedData),
        };
      } catch (error) {
        console.error("Failed to parse localStorage data", error);
      }
    }
    return formikInitialDefaults;
  };

  // State for the form validation errors using formik
  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: FormValidation,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      axios
        .post("http://localhost:5000/add_website", values)
        .then(() => {
          console.log("Data saved");
          localStorage.removeItem("formData");
          resetForm();
          navigate("/websites");
        })
        .catch((err) => {
          console.error("Error saving data", err);
        });
      resetForm();
    },
  });

  // Local storage for form data persistence
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formik.values));
  }, [formik.values]);

  // Event handlers for form language inputs
  const handleChange = (e) => {
    formik.handleChange(e);
    setLanguage(e.target.value);
  };
  // Event handlers for form name input
  const handleChangeName = (e) => {
    formik.handleChange(e);
    setCountry(e.target.value);
  };

  // Accordion toggle function
  const handleAccept = () => {
    setIsAccepted(true);
    setExpanded(false);
    formik.setFieldValue("terms", true);
  };
  // Tram & conditionals update form field
  useEffect(() => {
    if (rowData && rowData.terms) {
      setIsAccepted(true);
    }
  }, [rowData]);
  // Accordion toggle function
  const toggleAccordion = () => {
    setExpanded((prev) => !prev);
  };

  // Video play/pause functionality
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <Box className="bg-[#FDFCFF]">
        {/* Add website content and video section start  */}
        <h3 className="text-[24px] font-semibold p-5   font-sans, line-sp">
          Add a Website
        </h3>
        <Box className="flex flex-col md:flex-row justify-between bg-[#FFFFFF]">
          <Box className="flex flex-col w-full md:ml-10 md:w-1/2 p-5 justify-center">
            <h3 className=" font-semibold text-[24px] font-medium">
              Learn how to get best out of <br />
              linksera
            </h3>
            <ul className="list-disc ml-4 mt-5 text-[#0F0C1B99] font-[14px]">
              <li>How to add your website to the marketplace</li>
              <li>Setting pricing and niche/category filters</li>
              <li>Uploading sample articles or guidelines</li>
              <li>Editing or updating your website listing anytime</li>
              <li>Tips to make your listing stand out to buyers</li>
            </ul>
          </Box>
          <Box className="flex flex-col p-5 md:mr-10 w-full md:w-1/2 items-center justify-center relative">
            <video
              ref={videoRef}
              onClick={togglePlay}
              className="rounded-lg max-w-full h-auto"
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              src={ReactVideo}
            />

            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute text-[#613FDD] bg-white hover:bg-white p-3 rounded-full transition "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <PlayArrowIcon />
              </button>
            )}
          </Box>
        </Box>
        {/* Add website content and video section End  */}
        <form onSubmit={formik.handleSubmit}>
          {/* Term & condition according  start */}
          <Box className=" justify-center m-10 shadow-none border-[#EAEAEA] border-1 rounded-lg ">
            <Accordion
              className="border-[1px] shadow-none"
              expanded={expanded}
              onChange={toggleAccordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  Hey, Accept Preconditions before you start the listing!
                </Typography>
                {isAccepted ? (
                  <Box className="flex items-center h-[30px] mt-8 md:mt-0  gap-2 ml-auto mr-4 bg-[#34C7591A] font-[500] text-black rounded-[10px] px-2 py-1">
                    <CheckIcon className="text-[#34C759] text-[18px] mt-1" />
                    <span>Accepted</span>
                  </Box>
                ) : (
                  <Box className="flex items-center h-[30px] mt-8 md:mt-0 gap-2 ml-auto mr-4 bg-[#FF95001A] font-[500] text-black rounded-[10px] px-2 py-1">
                    <span className="h-2 w-2 bg-[#FF9500] rounded-full inline-block"></span>
                    <span>Pending</span>
                  </Box>
                )}
              </AccordionSummary>
              <AccordionDetails className="text-[#0F0C1B99] font-[14px]">
                Before you can proceed with your listing, please make sure to
                review all required preconditions. Accepting these is mandatory
                to continue. It ensures your submission meets our platform
                standards and avoids delays. Listings that don’t meet these
                terms may be rejected. Take a moment to go through them
                carefully before moving ahead. Once accepted, you’ll be able to
                start listing right away.
                <Box className="mt-4">
                  {!isAccepted ? (
                    <Button
                      variant="contained"
                      className="bg-[#613FDD] text-white rounded-lg normal-case"
                      onClick={handleAccept}
                    >
                      Accept
                    </Button>
                  ) : (
                    <Box className="flex w-[120px] mr-4 gap-1 bg-[#34C7591A] font-[500] text-black rounded-[10px] px-2 py-1">
                      <CheckIcon className="text-[#34C759] text-[18px] mt-1" />
                      <span>Accepted</span>
                    </Box>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/* Term & condition according  end */}
          <h3 className="text-xl font-semibold  ml-[60px] font-sans, line-sp">
            Website details
          </h3>
          {/* Add website section form field start */}
          <Box>
            <Container className="bg-[#FFFFFF]">
              <Box className="p-1 pt-5 pb-5 w-full flex flex-col md:flex-row gap-5 ">
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <InputLabel className="text-[#0F0C1B] font-[14px]">
                    Enter website
                  </InputLabel>
                  <InputBase
                    type="text"
                    name="websiteUrl"
                    value={formik.values.websiteUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.websiteUrl && formik.errors.websiteUrl
                        ? "www.example.com"
                        : "Website URL"
                    }
                    className={`rounded px-[5px] py-[3px] text-sm w-full transition duration-200
                      ${
                        formik.touched.websiteUrl && formik.errors.websiteUrl
                          ? "border-2 border-red-500"
                          : "border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                      }`}
                    sx={{
                      "& input::placeholder": {
                        transition: "color 0.2s",
                      },
                      "& input:focus::placeholder": {
                        color: "transparent",
                      },
                    }}
                  />
                  {formik.touched.websiteUrl && formik.errors.websiteUrl && (
                    <span className="text-red-600 text-sm font-medium">
                      {(() => {
                        const error = formik.errors.websiteUrl;
                        if (typeof error === "string") return error;
                        if (Array.isArray(error)) return error.join(", ");
                        return "";
                      })()}
                    </span>
                  )}
                </Box>
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <InputLabel className="text-[#0F0C1B] font-[14px]">
                    Website’s Primary language
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    name="language"
                    size="small"
                    value={formik.values.language}
                    onBlur={formik.handleBlur}
                    onChange={handleChange}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                          overflowY: "auto",
                        },
                      },
                    }}
                    className="border-2 rounded-md text-sm w-full"
                    sx={{
                      borderColor: "#EAEAEA",
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        borderColor: "#613fdd59",
                      },
                      "&:hover": {
                        borderColor: "#613fdd59",
                      },
                      "& .MuiSelect-select": {
                        padding: "8px 12px",
                      },
                    }}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        <Box className="flex items-center gap-2">
                          <img
                            src={country.flag}
                            alt={country.code}
                            className="w-4 h-4"
                          />
                          <Typography variant="body2" className="w-3">
                            {country.language}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.language && formik.errors.language && (
                    <span className="text-red-600 text-sm font-medium">
                      {(() => {
                        const error = formik.errors.language;
                        if (typeof error === "string") return error;
                        if (Array.isArray(error)) return error.join(", ");
                        return "";
                      })()}
                    </span>
                  )}
                </Box>
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <InputLabel className="text-[#0F0C1B] font-[14px]">
                    Your Majority of traffic comes from
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    name="country"
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    size="small"
                    onChange={handleChangeName}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                          overflowY: "auto",
                        },
                      },
                    }}
                    className="border-2 rounded-md text-sm w-full"
                    sx={{
                      borderColor: "#EAEAEA",
                      "& fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused": {
                        borderColor: "#613fdd59",
                      },
                      "&:hover": {
                        borderColor: "#613fdd59",
                      },
                      "& .MuiSelect-select": {
                        padding: "8px 12px",
                      },
                    }}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        <Box className="flex items-center gap-2">
                          <img
                            src={country.flag}
                            alt={country.code}
                            className="w-4 h-4"
                          />
                          <Typography variant="body2" className="w-3">
                            {country.name}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>

                  {(() => {
                    const error = formik.errors.country;
                    if (typeof error === "string") return error;
                    if (Array.isArray(error)) return error.join(", ");
                    return "";
                  })()}
                </Box>
              </Box>
              {/*  Main Category section form field start */}
              <Typography
                style={{ fontSize: "16px" }}
                className="text-[#0F0C1B] ml-1"
              >
                Main Category
              </Typography>
              <Box>
                <Checkboxmail name="mainCategories" formik={formik} />
              </Box>
              {/*  Main Category section form field end */}
              <Box className="w-full  flex flex-col gap-2 mt-5 mb-5">
                <InputLabel
                  style={{ fontSize: "14px" }}
                  className="text-[#0F0C1B]"
                >
                  Description of Website
                </InputLabel>
                <TextareaAutosize
                  className={`border-2 md:w-1/2 outline-0 focus:placeholder-transparent rounded px-[5px] py-[3px] text-sm w-full
                  ${
                    formik.touched.description1 && formik.errors.description1
                      ? "border-red-500"
                      : "border-[#EAEAEA] hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                  }
                  `}
                  aria-label="minimum height"
                  minRows={3}
                  name="description1"
                  placeholder="Description"
                  value={formik.values.description1}
                  onBlur={formik.handleBlur}
                  onChange={handleChange}
                />

                {(() => {
                  const error = formik.errors.description1;
                  if (typeof error === "string") return error;
                  if (Array.isArray(error)) return error.join(", ");
                  return "";
                })()}
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  className="w-full md:w-[20%]"
                  label="I am the owner of the website"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                />
              </FormGroup>
            </Container>
          </Box>
          {/* Add website section form field start */}
          {/*  Create offer section form field start */}
          <Box>
            <Container>
              <h3 className="text-xl font-semibold mt-7 mb-5 font-sans">
                Create offer
              </h3>
              <CreateOffer formik={formik} />
            </Container>
          </Box>
          {/*  Create offer section form field end */}
          {/*  Article specification section form field start */}
          <Box>
            <Container>
              <h3 className="text-xl font-semibold mt-7 mb-5 font-sans">
                Article specification
              </h3>
              <Article formik={formik} />
              <Box className="flex justify-end">
                <Button
                  className="mb-10 bg-[#613FDD] text-white text-md font-medium w-[160px] hover:bg-[#5A35D0] px-5 py normal-case"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Box>
            </Container>
          </Box>
          {/*  Article specification section form field end */}
        </form>
      </Box>
    </>
  );
}

export default AddWebsite;
