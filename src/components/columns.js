// export const COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//   },
//   {
//     Header: "First Name",
//     Footer: "First Name",
//     accessor: "first_name",
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//   },
//   {
//     Header: "Email",
//     Footer: "Email",
//     accessor: "email",
//   },
//   {
//     Header: "Date Of Birth",
//     Footer: "Date Of Birth",
//     accessor: "date_of_birth",
//   },
//   {
//     Header: "Age",
//     Footer: "Age",
//     accessor: "age",
//   },
//   {
//     Header: " Country",
//     Footer: "Country",
//     accessor: "country",
//   },
//   {
//     Header: "Phone",
//     Footer: "Phone",
//     accessor: "phone",
//   },
// ];

import ColumnFilter from "./ColumnFilter";

//Header_Group Column
export const GROUPED_COLOUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "date_of_birth",
        Filter: ColumnFilter,
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
        Filter: ColumnFilter,
      },
      {
        Header: " Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        Filter: ColumnFilter,
      },
    ],
  },
];
