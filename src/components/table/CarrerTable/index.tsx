import React from 'react';

import { carrerApi } from '../../../api/response';

interface ListTableProp {
  title: string | null;
}

const ListTable: React.FC<ListTableProp> = ({ title }) => {
  return (
    <table>
      <caption className="title">{title}</caption>
      <tbody>
        {carrerApi.map((item) => (
          <tr key={item.id}>
            <th style={{ width: '25%' }}>{item.period}</th>
            <td style={{ width: '21%' }}>{item.companyName}</td>
            <td style={{ width: '25%' }}>{item.companyCategory}</td>
            <td style={{ width: '*' }}>{item.work}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
