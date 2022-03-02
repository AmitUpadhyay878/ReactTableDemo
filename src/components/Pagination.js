import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLOUMNS } from "./columns";
import "./table.css";

const Pagination = () => {
  const columns = useMemo(() => {
    return GROUPED_COLOUMNS;
    // return COLUMNS;
  }, []);
  const data = useMemo(() => {
    return MOCK_DATA;
  }, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    //rows,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,

    pageOptions,
    gotoPage,
    pageCount,

    prepareRow,
    state,
    setPageSize,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;

  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getFooterGroupProps()}>
              {headerGroups.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* {rows.map((row) => { */}
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => {
                  return (
                    <td {...column.getFooterProps()}>
                      {column.render("Footer")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot> */}
      </table>

      <div>
        <span>
          Page{""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go To Page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const PageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0 ;gotoPage(PageNumber);
            }}
            style={{width:'50px'}}
          />
        </span>
        <button
          onClick={() => {
            gotoPage(0);
            console.log(pageCount - 1);
          }}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        {"    "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button
          onClick={() => {
            gotoPage(pageCount - 1);
            console.log(pageCount);
          }}
          disabled={!canNextPage}
        >
          {}
          {">>"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
