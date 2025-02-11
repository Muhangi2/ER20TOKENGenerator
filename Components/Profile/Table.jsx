import React from "react";

const Table = ({ tableData, title }) => {
  console.log(tableData, "tableData");

  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="send-money-form transection-log">
          <div className="form-text">
            <h4 className="form-top">
              {tableData.length === 0 ? "No token created" : `${title}`}
            </h4>
            {tableData.length === 0 ? (
              ""
            ) : (
              <div className="form-inner table-inner">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction Hash</th>
                      <th>Token Address</th>
                      <th> Name </th>
                      <th>Supply</th>
                      <th>Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map((token, i) => (
                      <tr key={i + 1}>
                        <td>{token.tokenCreatedDate}</td>
                        <td
                          onClick={() =>
                            navigator.clipboard.writeText(token.tokenTransactionHash)
                          }
                        >
                          {token.tokenTransactionHash?.slice(0, 15)}...
                        </td>
                        <td
                          onClick={() =>
                            navigator.clipboard.writeText(token.tokenAddress)
                          }
                        >
                          {token.tokenAddress?.slice(0, 15)}...
                        </td>
                        <td>{token.tokenSupply }</td>
                        <td>{token.tokenSymbol}</td>
                        <td>{token.tokenName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
