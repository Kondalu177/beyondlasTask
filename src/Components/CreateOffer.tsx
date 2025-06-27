import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";

// Create Offer typescript props
type CreateOfferProps = {
  formik: any;
};
function CreateOffer({ formik }: CreateOfferProps) {
  const [value, setValue] = useState("1");
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle Form fields change
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className="bg-[#FFFFFF]" sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="overflow-x-auto w-full"
          >
            {/*  Tab list section start  */}
            <TabList
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                "& .MuiTab-root": {
                  color: "#0F0C1B66",
                  fontWeight: 550,
                  fontFamily: "sans-serif",
                  textTransform: "none",
                  fontSize: "16px",
                },
                "& .Mui-selected": {
                  color: "#0F0C1B !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#613FDD",
                  height: "3px",
                },
              }}
            >
              <Tab
                className="text-[#0F0C1B66] font-semibold font-sans normal-case text-base "
                label="Normal offer"
                value="1"
              />
              <Tab
                className="text-[#0F0C1B66] font-semibold font-sans normal-case text-base "
                label="Grey Niche offer"
                value="2"
              />
              <Tab
                className="text-[#0F0C1B66] font-semibold font-sans normal-case text-base "
                label="Homepage link"
                value="3"
              />
            </TabList>
            {/*  Tab list section end  */}
          </Box>
          {/*  Normal offer section start  */}
          <TabPanel value="1" sx={{ padding: "20px 10px" }}>
            <Box className=" w-full flex flex-col md:flex-row gap-5 ">
              <Box className="w-full md:w-1/4 flex flex-col gap-2">
                <InputLabel className="text-[#0F0C1B] font-[14px]">
                  Guest posting
                </InputLabel>
                <FormControl fullWidth size="small">
                  <InputBase
                    name="normalOffer.Guest_posting"
                    placeholder="54"
                    type="number"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputProps={{ min: 0 }}
                    value={formik.values.normalOffer.Guest_posting}
                    sx={{
                      "& input::placeholder": {
                        transition: "color 0.2s",
                      },
                      "& input:focus::placeholder": {
                        color: "transparent",
                      },
                      "& input": {
                        padding: "7px 5px",
                        borderLeft: "1px solid #EAEAEA",
                      },
                      "&:hover input": {
                        borderLeft: "1px solid #613fdd59",
                      },
                    }}
                    className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                    startAdornment={
                      <InputAdornment position="start" className="pl-2">
                        $
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box className="w-full md:w-1/4 flex flex-col gap-2">
                <InputLabel className="text-[#0F0C1B] font-[14px]">
                  Link insertion
                </InputLabel>
                <FormControl fullWidth size="small">
                  <InputBase
                    type="number"
                    inputProps={{ min: 0 }}
                    required
                    placeholder="54"
                    name="normalOffer.Link_insertion"
                    value={formik.values.normalOffer.Link_insertion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{
                      "& input::placeholder": {
                        transition: "color 0.2s",
                      },
                      "& input:focus::placeholder": {
                        color: "transparent",
                      },
                      "& input": {
                        padding: "7px 5px",
                        borderLeft: "1px solid #EAEAEA",
                      },
                      "&:hover input": {
                        borderLeft: "1px solid #613fdd59",
                      },
                    }}
                    className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                    startAdornment={
                      <InputAdornment position="start" className="pl-2">
                        $
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Box>
          </TabPanel>
          {/*  Guest posting section end  */}
          {/*  Grey Niche offer section start  */}

          <TabPanel value="2">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                }
                label="I am the owner of the website"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                  },
                }}
              />
            </FormGroup>
            {isChecked && (
              <Box className=" w-full flex flex-col flex-wrap  md:flex-row gap-5 ">
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <InputLabel className="text-[#0F0C1B] font-[14px]">
                    Enter Price
                  </InputLabel>
                  <FormControl fullWidth size="small">
                    <InputBase
                      type="number"
                      inputProps={{ min: 0 }}
                      required
                      placeholder="54"
                      name="greyNiche.Enter_price"
                      value={formik.values.greyNiche.Enter_price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      sx={{
                        "& input::placeholder": {
                          transition: "color 0.2s",
                        },
                        "& input:focus::placeholder": {
                          color: "transparent",
                        },
                        "& input": {
                          padding: "7px 5px",
                          borderLeft: "1px solid #EAEAEA",
                        },
                        "&:hover input": {
                          borderLeft: "1px solid #613fdd59",
                        },
                      }}
                      className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                      startAdornment={
                        <InputAdornment position="start" className="pl-2">
                          $
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </Box>
            )}
            <Box
              className={`mt-4 ${
                isChecked ? "opacity-50 pointer-events-none" : "opacity-100"
              }`}
            >
              <Box className=" w-full flex flex-col flex-wrap  md:flex-row gap-5 mb-5">
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <Typography className=" text-[#0F0C1B99] font-semibold pb-4">
                    Gambling
                  </Typography>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Guest Posting
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.GamblingGuest_posting1"
                        value={formik.values.greyNiche.GamblingGuest_posting1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Link Insertion
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.GamblingLink_insertion1"
                        value={formik.values.greyNiche.GamblingLink_insertion1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <Typography className=" text-[#0F0C1B99] font-semibold pb-4">
                    Crypto
                  </Typography>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Guest Posting
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.CryptoGuest_posting1"
                        value={formik.values.greyNiche.CryptoGuest_posting1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Link Insertion
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.CryptoLink_insertion1"
                        value={formik.values.greyNiche.CryptoLink_insertion1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <Typography className=" text-[#0F0C1B99] font-semibold pb-4">
                    Adult
                  </Typography>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Guest Posting
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.AdultGuest_posting1"
                        value={formik.values.greyNiche.AdultGuest_posting1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Link Insertion
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.AdultLink_insertion1"
                        value={formik.values.greyNiche.AdultLink_insertion1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <Box className=" w-full flex flex-col flex-wrap  md:flex-row gap-5 ">
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <Typography className=" text-[#0F0C1B99] font-semibold pb-2">
                    Gambling
                  </Typography>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Guest Posting
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.GamblingGuest_posting2"
                        value={formik.values.greyNiche.GamblingGuest_posting2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Link Insertion
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.GamblingLink_insertion2"
                        value={formik.values.greyNiche.GamblingLink_insertion2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <Typography className=" text-[#0F0C1B99] font-semibold pb-2">
                    Crypto
                  </Typography>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Guest Posting
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.CryptoGuest_posting2"
                        value={formik.values.greyNiche.CryptoGuest_posting2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Link Insertion
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.CryptoLink_insertion2"
                        value={formik.values.greyNiche.CryptoLink_insertion2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Box className="w-full md:w-1/4 flex flex-col gap-2">
                  <Typography className=" text-[#0F0C1B99] font-semibold pb-2">
                    Adult
                  </Typography>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Guest Posting
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.AdultGuest_posting2"
                        value={formik.values.greyNiche.AdultGuest_posting2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <InputLabel className="text-[#0F0C1B] font-[14px]">
                      Price for Link Insertion
                    </InputLabel>
                    <FormControl fullWidth size="small">
                      <InputBase
                        inputProps={{ min: 0 }}
                        required
                        placeholder="54"
                        name="greyNiche.AdultLink_insertion2"
                        value={formik.values.greyNiche.AdultLink_insertion2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                          "& input::placeholder": {
                            transition: "color 0.2s",
                          },
                          "& input:focus::placeholder": {
                            color: "transparent",
                          },
                          "& input": {
                            padding: "7px 5px",
                            borderLeft: "1px solid #EAEAEA",
                          },
                          "&:hover input": {
                            borderLeft: "1px solid #613fdd59",
                          },
                        }}
                        className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                        startAdornment={
                          <InputAdornment position="start" className="pl-2">
                            $
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>
          {/* Grey Niche offer section end */}
          {/* HomePage link sections start */}
          <TabPanel value="3">
            <Box className=" w-full flex flex-col gap-5 ">
              <Box className="w-full md:w-1/4 flex flex-col gap-2">
                <InputLabel className="text-[#0F0C1B] font-[14px]">
                  Guest posting
                </InputLabel>
                <FormControl fullWidth size="small">
                  <InputBase
                    inputProps={{ min: 0 }}
                    required
                    placeholder="54"
                    type="number"
                    name="homepageLink.Guest_posting"
                    value={formik.values.homepageLink.Guest_posting}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{
                      "& input::placeholder": {
                        transition: "color 0.2s",
                      },
                      "& input:focus::placeholder": {
                        color: "transparent",
                      },
                      "& input": {
                        padding: "7px 5px",
                        borderLeft: "1px solid #EAEAEA",
                      },
                      "&:hover input": {
                        borderLeft: "1px solid #613fdd59",
                      },
                    }}
                    className="border-2 hover:border-[#613fdd59] focus:border-[#EAEAEA] rounded  text-sm w-full"
                    startAdornment={
                      <InputAdornment position="start" className="pl-2">
                        $
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box className="w-full flex flex-col gap-2">
                <InputLabel
                  style={{ fontSize: "14px" }}
                  className="text-[#0F0C1B]"
                >
                  Description of Website
                </InputLabel>
                <TextareaAutosize
                  className={`border-2 md:w-1/2 outline-0 focus:placeholder-transparent rounded px-[5px] py-[3px] text-sm w-full
                    ${
                      formik.touched.homepageLink?.Description_Website &&
                      formik.errors.homepageLink?.Description_Website
                        ? "border-red-500"
                        : "border-[#EAEAEA] hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                    }
                    `}
                  aria-label="minimum height"
                  minRows={3}
                  name="homepageLink.Description_Website"
                  placeholder="Description"
                  value={formik.values.homepageLink.Description_Website}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.homepageLink?.Description_Website &&
                  formik.errors.homepageLink?.Description_Website && (
                    <span className="text-red-600 text-sm font-medium">
                      {formik.errors.homepageLink?.Description_Website}
                    </span>
                  )}
              </Box>
            </Box>
          </TabPanel>
          {/* HomePage link sections end */}
        </TabContext>
      </Box>
    </>
  );
}

export default CreateOffer;
