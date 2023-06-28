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
  modalposition: { top: number; left: number; item: SkillItemProps };
  setIsSkillModal: Dispatch<SetStateAction<boolean>>;
}

const SkillModal: React.FC<SkillModalProps> = ({ isSkillModal, setIsSkillModal, modalposition }) => {
  return (
    <StyledSkillModal>
      <div className={`modal ${isSkillModal && 'active'}`} style={{ backgroundColor: modalposition.item.bgColor }}>
        <div className="modal-container">
          <figure>
            <img src={modalposition.item.image} alt="" />
            <figcaption>{modalposition.item.lang}</figcaption>
          </figure>
          <div className="modal-contents">
            <p>{modalposition.item.contents}</p>
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
