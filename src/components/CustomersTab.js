import React from 'react';
import { useSelector } from 'react-redux';
import BaseTable from './BaseTable';

const CustomersTab = () => {
  const customers = useSelector(state => state.extractedData.customers);
  const columns = [
    { header: 'Customer Name', accessorKey: 'Customer Name' },
    { header: 'Phone Number', accessorKey: 'Phone Number' },
    { header: 'Total Purchase Amount', accessorKey: 'Total Purchase Amount' },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-primary">Customers</h2>
      <BaseTable columns={columns} data={customers} />
    </div>
  );
};

export default CustomersTab;
