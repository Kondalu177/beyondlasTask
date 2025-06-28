import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Pagenation from "./Pagenation.tsx";
import useGetData from "./Hooks/useGetData.tsx";
import Vector from "../assets/Vector.svg";
import Vector1 from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";
import Vector3 from "../assets/Vector3.svg";
import Vector4 from "../assets/Vector4.svg";
import Vector5 from "../assets/Vector5.svg";
import useContries from "./Hooks/useContries.tsx";
import { useNavigate } from "react-router-dom";

interface Column {
  id: "Website" | "code" | "Language" | "size" | "density" | "Grey";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "Website", label: "Website", minWidth: 170 },
  { id: "code", label: "Country", minWidth: 100 },
  {
    id: "Language",
    label: "Language",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Categories",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Other categories",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "Grey",
    label: "Grey Niches",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  Website: string;
  code: string;
  Language: number;
  size: number;
  density: number;
  Grey: any;
}

function createData(
  Website: string,
  code: string,
  Language: number,
  size: number,
  Grey: any
): Data {
  const density = Language / size;
  return { Website, code, Language, size, density, Grey };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, 1),
  createData("China", "CN", 1403500365, 9596961, 1),
  createData("Italy", "IT", 60483973, 301340, 1),
  createData("United States", "US", 327167434, 9833520, 1),
  createData("Canada", "CA", 37602103, 9984670, 1),
  createData("Australia", "AU", 25475400, 7692024, 1),
];

function WebsiteTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { getData_view } = useGetData();
  console.log(getData_view);
  const { countries } = useContries();
  const navigate = useNavigate();

  console.log(countries);

  return (
    <>
      <Paper
        className="shadow-none "
        sx={{
          width: "calc(100% - 40px)",
          overflow: "hidden",
          margin: 3,
        }}
      >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className="text-[#0F0C1B99] font-semibold font-[12px] text-left bg-[#613FDD12]"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getData_view.map((View, index) => {
                if (!View) return null;
                const getCountryInfoByCode = (code: any) => {
                  const found = countries.find(
                    (c) => c.code === code?.toLowerCase()
                  );
                  if (!found) {
                    return {
                      name: code,
                      language: code,
                      flag: "", // or a placeholder image
                    };
                  }
                  return {
                    name: found.name,
                    language: found.language,
                    flag: found.flag,
                  };
                };
                const countryInfo = getCountryInfoByCode(View.country) || "";
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    key={index}
                    tabIndex={-1}
                    className="even:bg-[#613FDD12]"
                    onClick={() => navigate("/add_websites", { state: View })}
                  >
                    <TableCell
                      key={index}
                      className="text-[#0F0C1B]  font-[12px] text-left"
                    >
                      {View.websiteUrl || ""}
                    </TableCell>
                    <TableCell
                      key={index}
                      className="text-[#0F0C1B]  font-[12px] text-left"
                    >
                      <Box className="flex flex-grow items-center gap-2">
                        <img
                          src={countryInfo.flag}
                          className="w-[20px] h-[10px] object-cover"
                          alt="Country Flag"
                        />
                        {countryInfo.name}
                      </Box>
                    </TableCell>
                    <TableCell
                      key={index}
                      className="text-[#0F0C1B]  font-[12px] text-left"
                    >
                      {countryInfo.language || ""}
                    </TableCell>
                    <TableCell
                      key={index}
                      className="text-[#0F0C1B]  font-[12px] text-left"
                    >
                      {View.mainCategories[0] || ""}
                    </TableCell>
                    <TableCell
                      key={index}
                      className="text-[#0F0C1B]  font-[12px] text-left"
                    >
                      {View.mainCategories?.slice(1).join(", ") || ""}
                    </TableCell>
                    <TableCell className="text-[#0F0C1B]  font-[12px] text-left">
                      <Box className="flex flex-row gap-2">
                        <img src={Vector} alt="Vector" />
                        <img src={Vector1} alt="Vector1" />
                        <img src={Vector2} alt="Vector2" />
                        <img src={Vector3} alt="Vector3" />
                        <img src={Vector4} alt="Vector4" />
                        <img src={Vector5} alt="Vector5" />
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="flex justify-center m-4">
          <Pagenation
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page + 1}
            onChange={(getData_view) => setPage(getData_view - 1)}
          />
        </Box>
      </Paper>
    </>
  );
}

export default WebsiteTable;
