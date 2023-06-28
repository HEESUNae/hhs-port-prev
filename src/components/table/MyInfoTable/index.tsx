import React from 'react';

// style
import { StyledMyInfoTable } from './style';

// api
import { myInfoApi } from '../../../api/response';

const MyInfoTable = () => {
  return (
    <StyledMyInfoTable>
      <table>
        <tbody>
          {myInfoApi.map((item) => (
            <tr key={item.id}>
              <th>
                <img src={item.icon} alt="" />
              </th>
              <td>{item.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledMyInfoTable>
  );
};

export default MyInfoTable;
