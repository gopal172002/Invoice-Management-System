import React from 'react';
import { useSelector } from 'react-redux';
import BaseTable from './BaseTable';

const ProductsTab = () => {
  const products = useSelector(state => state.extractedData.products.map(product => ({
    ...product,
    priceWithTax: product.unitPrice * (1 + product.tax / 100),
  })));

  const columns = [
    { header: 'Product Name', accessorKey: 'Product Name' },
    { header: 'Category', accessorKey: 'Category' },
    { header: 'Unit Price', accessorKey: 'Unit Price' },
    { header: 'Tax', accessorKey: 'Tax' },
    { header: 'Price with Tax', accessorKey: 'priceWithTax' },
    { header: 'Stock Quantity', accessorKey: 'Stock Quantity' },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-primary">Products</h2>
      <BaseTable columns={columns} data={products} />
    </div>
  );
};

export default ProductsTab;
