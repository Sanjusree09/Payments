import React, { useState } from "react";
// import './SideBar.css'; // Ensure your CSS file is correctly imported

const rowsPerPage = 10; // Number of rows per page

function Merchant() {
  const [activeTab, setActiveTab] = useState('info');
  const [searchQuery, setSearchQuery] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedDateRange, setSelectedDateRange] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedOrderType, setSelectedOrderType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  //   setCurrentPage(1); // Reset to the first page on category change
  // };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setCurrentPage(1); // Reset to the first page on payment method change
  };

  const handleOrderTypeChange = (event) => {
    setSelectedOrderType(event.target.value);
    setCurrentPage(1); // Reset to the first page on order type change
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterTransactions = () => {
    return transactionsData.filter(transaction => {
      const matchesSearch = searchQuery
        ? transaction.dateTime.includes(searchQuery) || 
          transaction.transactionId.includes(searchQuery)
        : true;

      const matchesPaymentMethod = selectedPaymentMethod
        ? transaction.paymentMethod === selectedPaymentMethod
        : true;

      const matchesOrderType = selectedOrderType
        ? transaction.orderType === selectedOrderType
        : true;

      // Add additional filtering logic based on selectedCategory and selectedDateRange if needed

      return matchesSearch && matchesPaymentMethod && matchesOrderType;
    });
  };

  const paginatedData = () => {
    const filteredData = filterTransactions();
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  };

  const totalPages = () => {
    return Math.ceil(filterTransactions().length / rowsPerPage);
  };

  const renderContent = () => {
    const content = {
      info: (
        <div>
          <p>Information content goes here.</p>
        </div>
      ),
      company: (
        <div>
          <p>Company details go here.</p>
        </div>
      ),
      transactions: (
        <div className="table-container">
          {filterTransactions().length === 0 ? (
            <p>No data found</p>
          ) : (
            <>
              <table className="transactions-table">
                <thead>
                  <tr className="font">
                    <th>Amount</th>
                    <th>Date|Time</th>
                    <th>Checkout/Terminal ID</th>
                    <th>Transaction ID</th>
                    <th>Payment Method</th>
                    <th>Order Type</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData().map((transaction, index) => (
                    <tr key={index} className="transactions-font">
                      <td>{transaction.amount}</td>
                      <td>{transaction.dateTime}</td>
                      <td>{transaction.terminalId}</td>
                      <td>{transaction.transactionId}</td>
                      <td>{transaction.paymentMethod}</td>
                      <td>{transaction.orderType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination-controls" >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages()}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages()}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      ),
      stores: (
        <div>
          <p>Stores details go here.</p>
        </div>
      ),
      billingPlan: (
        <div>
          <p>Billing Plan details go here.</p>
        </div>
      ),
      settlements: (
        <div>
          <p>Settlements details go here.</p>
        </div>
      )
    };

    return content[activeTab];
  };

  const transactionsData = [
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "12333 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cask", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "return" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2023-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2023-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2023-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2023-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "return" },
    { amount: "233 SEK", dateTime: "2023-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "return" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "return" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "2024-05-09 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    // Add more sample data as needed
  ];

  return (
    <div className="page">
      <div>
        <h2 style={{marginRight: '900px'}}>Customer Name</h2>
        <p style={{marginRight: '900px'}}>Partner: Partner Name</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'info' ? 'active' : ''} `}
          onClick={() => setActiveTab('info')}
        >
          <label className="fontt">Info</label>
        </button>
        <button 
          className={`tab-button ${activeTab === 'company' ? 'active' : ''} `}
          onClick={() => setActiveTab('company')}
        >
          <label className="fontt">Company</label>
        </button>
        <button 
          className={`tab-button ${activeTab === 'transactions' ? 'active' : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          <label className="fontt">Transactions</label>
        </button>
        <button
          className={`tab-button ${activeTab === 'stores' ? 'active' : ''}`}
          onClick={() => setActiveTab('stores')}
        >
          <label className="fontt">Stores</label>
        </button>
        <button
          className={`tab-button ${activeTab === 'billingPlan' ? 'active' : ''}`}
          onClick={() => setActiveTab('billingPlan')}
        >
          <label className="fontt">Billing Plan</label>
        </button>
        <button
          className={`tab-button ${activeTab === 'settlements' ? 'active' : ''}`}
          onClick={() => setActiveTab('settlements')}
        >
          <label className="fontt">Settlements</label>
        </button>
      </div>

      <hr className="divider" />

      <div className="search-and-filters">
        <input
          type="text"
          className="search-bar container-search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        
        <select
          className="filter-dropdown"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="">Payment Method</option>
          <option value="Swish">Swish</option>
          <option value="Cash">Cash</option>
          {/* Add other payment methods if needed */}
        </select>
        <select
          className="filter-dropdown"
          value={selectedOrderType}
          onChange={handleOrderTypeChange}
        >
          <option value="">Order Type</option>
          <option value="Purchase">Purchase</option>
          <option value="Return">Return</option>
        </select>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Merchant;
