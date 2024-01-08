import React from 'react';
import data from '../utils/data';

const TransactionTable = () => {
  return (
    <div>
        <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray">
                    <tr>
                        <th className="py-2">Order ID</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Transaction ID</th>
                        <th className="py-2">Refund Date</th>
                        <th className="py-2">Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray' : 'bg-white'}>
                            <td className="py-2 px-4 text-primaryBlue">{order.orderId}</td>
                            <td className="py-2 px-4">{order.status=='Successful'?'🟢':'🔴'}{order.status}</td>
                            <td className="py-2 px-4">{order.TransactionId}</td>
                            <td className="py-2 px-4">{order.RefundDate}</td>
                            <td className="py-2 px-4">{order.OrderAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default TransactionTable