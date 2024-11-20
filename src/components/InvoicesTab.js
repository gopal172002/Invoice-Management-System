import React from 'react';
import { useSelector } from 'react-redux';
import BaseTable from './BaseTable';

const InvoicesTab = () => {
  const invoices = useSelector(state => state.extractedData.invoices);
  const columns = [
    { header: 'Serial Number', accessorKey: 'Serial Number' },
    { header: 'Customer Name', accessorKey: 'Customer Name' },
    { header: 'Product Name', accessorKey: 'Product Name' },
    { header: 'Qty', accessorKey: 'Qty' },
    { header: 'Tax', accessorKey: 'Tax' },
    { header: 'Total Amount', accessorKey: 'Total Amount' },
    { header: 'Date', accessorKey: 'Date' },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-primary">Invoices</h2>
      <BaseTable columns={columns} data={invoices} />
    </div>
  );
};

export default InvoicesTab;
