import React, { useMemo, useState, useEffect } from "react"
import { useTable, usePagination } from "react-table"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { useStaticQuery, graphql } from "gatsby"

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState: { pageIndex: 0 } }, usePagination)

  // Render the UI for your table
  return (
    <div className="container">
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

const CollectionTable = ({ defaultData }) => {
  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },

    {
      Header: "Title",
      accessor: "title",
      Cell: ({ row }) => (
        <AniLink fade to={row.original.titleSlug}>
          {row.original.title}
        </AniLink>
      ),
    },
    {
      Header: "Purpose",
      accessor: "purpose",
    },

    {
      Header: "Depositor",
      accessor: "depositor",
      Cell: ({ row }) => (
        <AniLink fade to={row.original.depositorSlug}>
          {row.original.depositor}
        </AniLink>
      ),
    },
    {
      Header: "Publication",
      accessor: "publication",
      Cell: ({ row }) => (
        <a href={row.original.publicationUrl}>{row.original.publication}</a>
      ),
    },
  ])
  return (
    <div>
      <Table columns={columns} data={defaultData} />
      {!defaultData.length ? (
        <h4 className="text-center">No data found. Please search again</h4>
      ) : null}
    </div>
  )
}

export default CollectionTable
