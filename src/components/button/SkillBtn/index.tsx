import React from 'react';

// style
import { StyledSkillBtn } from './style';

// api
import { skillApi } from '../../../api/response';

interface SkillItemProps {
  id: number;
  lang: string;
  image: any;
  bgColor: string;
  contents: string;
}

interface SkillBtnProp {
  onClick: () => void;
  onMouseEnter: (item: SkillItemProps, e: React.MouseEvent) => void;
}

const SkillBtn: React.FC<SkillBtnProp> = ({ onClick, onMouseEnter }) => {
  return (
    <StyledSkillBtn>
      {skillApi.map((item) => (
        <button
          type="button"
          style={{ backgroundColor: item.bgColor }}
          onClick={onClick}
          onMouseEnter={(e) => onMouseEnter(item, e)}
          key={item.id}
        >
          {item.lang}
          <img src={item.image} alt="" />
        </button>
      ))}
    </StyledSkillBtn>
  );
};

export default SkillBtn;
