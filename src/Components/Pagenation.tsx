import React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: "8px",
});

function Pagenation({ count, page, onChange }) {
  const { items } = usePagination({
    count,
    page,
    onChange: (event, value) => {
      onChange(value);
    },
  });
  return (
    <>
      <Box className="flex justify-center mt-4 ">
        <nav>
          <List className="gap-0 ">
            {items.map(({ page, type, selected, ...item }, index) => {
              let children: React.ReactNode = null;

              if (type === "start-ellipsis" || type === "end-ellipsis") {
                children = (
                  <span className="px-2 text-black  border-[1px]">…</span>
                );
              } else if (type === "page") {
                children = (
                  <button
                    type="button"
                    className={`px-3 py-1  ${
                      selected
                        ? "bg-[#EAEAEA] text-black  font-semibold border-[1px]"
                        : " border-[1px] text-black"
                    }`}
                    {...item}
                  >
                    {page}
                  </button>
                );
              } else if (type === "previous") {
                children = (
                  <button
                    type="button"
                    className="px-3 py-1  text-black rounded-s-md border-[1px]"
                    {...item}
                  >
                    <ArrowBackIcon className="text-[15px] mr-1 text-[#B3B3B399]" />
                    Previous
                  </button>
                );
              } else if (type === "next") {
                children = (
                  <button
                    type="button"
                    className="px-3 py-1  text-black rounded-e-md border-[1px]"
                    {...item}
                  >
                    Next
                    <ArrowForwardIcon className="text-[15px] ml-1 text-[#B3B3B399]" />
                  </button>
                );
              }

              return <li key={index}>{children}</li>;
            })}
          </List>
        </nav>
      </Box>
    </>
  );
}

export default Pagenation;
