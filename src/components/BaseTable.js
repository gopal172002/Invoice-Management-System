import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import '../styles/BaseTable.css';

const BaseTable = ({ columns, data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  
  const isFieldMissing = (value) => value === '' || value === null || value === undefined;

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className={isFieldMissing(cell.getValue()) ? 'missing-field' : ''}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
