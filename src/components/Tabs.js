import React, { useState } from 'react';
import InvoicesTab from './InvoicesTab';
import ProductsTab from './ProductsTab';
import CustomersTab from './CustomersTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn ${activeTab === 'invoices' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
          onClick={() => setActiveTab('invoices')}
        >
          Invoices
        </button>
        <button
          className={`btn ${activeTab === 'products' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`btn ${activeTab === 'customers' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
          onClick={() => setActiveTab('customers')}
        >
          Customers
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'invoices' && <InvoicesTab />}
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'customers' && <CustomersTab />}
      </div>
    </div>
  );
};

export default Tabs;
