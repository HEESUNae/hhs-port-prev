import React, { Dispatch, SetStateAction } from 'react';

// style
import { StyledSkillModal } from './style';

interface SkillItemProps {
  id: number;
  lang: string;
  image: string;
  bgColor: string;
  contents: string;
}

interface SkillModalProps {
  isSkillModal: boolean;
  modalProperty: SkillItemProps;
  setIsSkillModal: Dispatch<SetStateAction<boolean>>;
}

const SkillModal: React.FC<SkillModalProps> = ({ isSkillModal, setIsSkillModal, modalProperty }) => {
  return (
    <StyledSkillModal>
      <div className={`modal ${isSkillModal && 'active'}`} style={{ backgroundColor: modalProperty.bgColor }}>
        <div className="modal-container">
          <figure>
            <img src={modalProperty.image} alt="" />
            <figcaption>{modalProperty.lang}</figcaption>
          </figure>
          <div className="modal-contents">
            <p>{modalProperty.contents}</p>
            <button type="button" onClick={() => setIsSkillModal(false)}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </StyledSkillModal>
  );
};

export default SkillModal;
