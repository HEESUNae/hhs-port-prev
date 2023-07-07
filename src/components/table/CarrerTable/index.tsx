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
            <th>{item.period}</th>
            <td>{item.companyName}</td>
            <td>{item.companyCategory}</td>
            <td>{item.work}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
