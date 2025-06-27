import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

// Article component by typescript type definitions
type ArticleForm = {
  formik: any;
};
function Article({ formik }: ArticleForm) {
  return (
    <>
      <Box className="bg-[#FFFFFF]">
        <Box className="flex gap-5 flex-wrap">
          <Box className="w-full md:w-1/2">
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
              >
                Is writing of an article included in the offer?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="isArticleIncluded"
                value={formik.values.isArticleIncluded}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  label="Yes"
                />
                <FormControlLabel
                  value="No, the advertiser (client) needs to provide the content"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="No, the advertiser (client) needs to provide the content"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
              >
                Tagging articles policy:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="taggingPolicy"
                value={formik.values.taggingPolicy}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  value="We do not tag paid articles."
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="We do not tag paid articles."
                />
                <FormControlLabel
                  value="Articles are tagged only at the advertiser’s request."
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="Articles are tagged only at the advertiser’s request."
                />
                <FormControlLabel
                  value={`We always tag articles: "Sponsored article".`}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label={`We always tag articles: "Sponsored article".`}
                />
                <FormControlLabel
                  value="All links, including exact match anchors."
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="All links, including exact match anchors."
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className="w-full md:w-1/2">
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
              >
                Number of words in the article
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="articleWordCount"
                value={formik.values.articleWordCount}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  value="Length of the article is not limited."
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  label="Length of the article is not limited."
                />
                <FormControlLabel
                  value="No, the advertiser (client) needs to provide the content"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="No, the advertiser (client) needs to provide the content"
                />
              </RadioGroup>
              {formik.values.articleWordCount ===
                "No, the advertiser (client) needs to provide the content" && (
                <Box>
                  <Box className="w-full flex flex-col w-1/2 md:flex-row justify-between gap-2 pl-7">
                    <input
                      type="number"
                      placeholder="Min"
                      min="0"
                      name="articleMinWords"
                      value={formik.values.articleMinWords}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-2 rounded p-[5px] text-sm w-1/2 outline-0 ${
                        formik.touched.articleMinWords &&
                        formik.errors.articleMinWords
                          ? "border-red-500"
                          : "hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                      }`}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      min="0"
                      name="articleMaxWords"
                      value={formik.values.articleMaxWords}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-2 rounded p-[5px] text-sm w-1/2 outline-0 ${
                        formik.touched.articleMaxWords &&
                        formik.errors.articleMaxWords
                          ? "border-red-500"
                          : "hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                      }`}
                    />
                  </Box>
                  {formik.touched.articleMinWords &&
                    formik.errors.articleMinWords && (
                      <span className="text-red-600 text-xs ml-8">
                        {formik.errors.articleMinWords}
                      </span>
                    )}

                  {formik.touched.articleMaxWords &&
                    formik.errors.articleMaxWords && (
                      <span className="text-red-600 text-xs ml-[105px]">
                        {formik.errors.articleMaxWords}
                      </span>
                    )}
                </Box>
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
              >
                A number of links to the advertiser in the article:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="advertiserLinkCount"
                value={formik.values.advertiserLinkCount}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  value="We do not tag paid articles."
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="We do not tag paid articles."
                />
                <FormControlLabel
                  value="A maximum number of links to the advertiser:"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="A maximum number of links to the advertiser:"
                />
              </RadioGroup>
              {formik.values.advertiserLinkCount ===
                "A maximum number of links to the advertiser:" && (
                <Box>
                  <Box className="w-full flex flex-col w-1/2 md:flex-row justify-between gap-2 pl-7">
                    <input
                      type="number"
                      placeholder="Min"
                      min="0"
                      name="advertiserMinLinks"
                      value={formik.values.advertiserMinLinks}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`border-2 rounded p-[5px] text-sm w-1/2 outline-0
                      ${
                        formik.touched.advertiserMinLinks &&
                        formik.errors.advertiserMinLinks
                          ? "border-red-500"
                          : "hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                      }`}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      name="advertiserMaxLinks"
                      value={formik.values.advertiserMaxLinks}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      min="0"
                      className={`border-2 rounded p-[5px] text-sm w-1/2 outline-0
                      ${
                        formik.touched.advertiserMaxLinks &&
                        formik.errors.advertiserMaxLinks
                          ? "border-red-500"
                          : "hover:border-[#613fdd59] focus:border-[#EAEAEA]"
                      }`}
                    />
                  </Box>
                  {formik.touched.advertiserMinLinks &&
                    formik.errors.advertiserMinLinks && (
                      <span className="text-red-600 text-xs ml-8">
                        {formik.errors.advertiserMinLinks}
                      </span>
                    )}

                  {formik.touched.advertiserMaxLinks &&
                    formik.errors.advertiserMaxLinks && (
                      <span className="text-red-600 text-xs ml-[105px]">
                        {formik.errors.advertiserMaxLinks}
                      </span>
                    )}
                </Box>
              )}
            </FormControl>
          </Box>
          <Box className="w-full md:w-1/2">
            <FormControl>
              <FormLabel
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
              >
                I allow DO FOLLOW links in the article
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="allowDoFollowLinks"
                value={formik.values.allowDoFollowLinks}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label=" No"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
              >
                Other links in the article:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="otherLinksInArticle"
                value={formik.values.otherLinksInArticle}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  value="We allow links to other websites in the content of the article."
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="We allow links to other websites in the content of the article."
                />
                <FormControlLabel
                  value="We DO NOT allow links to other websites in the content of the article."
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="We DO NOT allow links to other websites in the content of the article."
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box className="w-full flex flex-col md:flex-row justify-between gap-5 pt-5 pb-10">
          <Box className="w-full md:w-1/2">
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                className="text-[#0F0C1B]"
                sx={{
                  color: "#0F0C1B",
                  "&.Mui-focused": {
                    color: "#0F0C1B",
                  },
                }}
              >
                Type of links allowed:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="linkTypeAllowed"
                value={formik.values.linkTypeAllowed}
                onChange={formik.handleChange}
                className="text-[#0F0C1B99] ml-3"
              >
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  value="Only brand links, URL, navigational, graphic links."
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="Only brand links, URL, navigational, graphic links."
                />
                <FormControlLabel
                  value="Only branded and generic links."
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="Only branded and generic links."
                />
                <FormControlLabel
                  value="Also mixed links (partly exact match anchors)."
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="Also mixed links (partly exact match anchors)."
                />
                <FormControlLabel
                  value="All links, including exact match anchors."
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        color: "#613FDD",
                        "&.Mui-checked": {
                          color: "#613FDD",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 16,
                        },
                      }}
                    />
                  }
                  label="All links, including exact match anchors."
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Right Side - Textarea */}
          <Box className="w-full md:w-1/2 flex flex-col pl-2 ">
            <InputLabel
              style={{ fontSize: "14px" }}
              className="text-[#0F0C1B] mb-2"
            >
              Description of Website
            </InputLabel>
            <TextareaAutosize
              className={`border-2 outline-0 focus:placeholder-transparent rounded px-[5px] py-[3px] text-sm w-full
              ${
                formik.touched.description3 && formik.errors.description3
                  ? "border-red-500"
                  : "border-[#EAEAEA] hover:border-[#613fdd59] focus:border-[#EAEAEA]"
              }
              `}
              aria-label="minimum height"
              minRows={6}
              name="description3"
              value={formik.values.description3}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Description"
            />
            {formik.touched.description3 && formik.errors.description3 && (
              <span className="text-red-600 text-sm font-medium">
                {formik.errors.description3}
              </span>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Article;
