import React, { useEffect, useState } from 'react';

// style
import { StyledMain } from './style';

// image
import { mainImg } from '../../consts/image';

// api
import { myInfoLinkApi, projectApi } from '../../api/response';

// components
import ListTable from '../../components/table/CarrerTable';
import SkillBtn from '../../components/button/SkillBtn';
import MyInfoTable from '../../components/table/MyInfoTable';
import SkillModal from '../../components/modal/SkillModal';

interface SkillItemProps {
  id: number;
  lang: string;
  image: string;
  bgColor: string;
  contents: string;
}

const MainPage = () => {
  const [isSkillModal, setIsSkillModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    item: { id: 0, lang: '', image: '', bgColor: '', contents: '' },
  });

  // skill 팝업 열고 닫기
  const onClick = () => {
    setIsSkillModal((prev) => !prev);
  };

  // skill 팝업 postion
  const onMouseEnter = (item: SkillItemProps, e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setModalPosition({ top: target.offsetTop, left: target.offsetLeft, item: item });
  };

  useEffect(() => {
    if (isSkillModal) {
      document.querySelector('html')?.classList.add('active');
    } else {
      document.querySelector('html')?.classList.remove('active');
    }
  }, [isSkillModal]);

  return (
    <StyledMain>
      <main>
        <section className="sec01">
          <div className="inner">
            <div className="hs-info">
              <figure>
                <img src={mainImg.hsHello} alt="" />
              </figure>
              <div className="info">
                <div className="info-my">
                  <p className="name">
                    황희선 <span>HeeSun Hwang</span>
                  </p>
                  <p className="job">FrontEnd Engineer, Web Developer</p>
                  <MyInfoTable />
                  <div className="info-link">
                    {myInfoLinkApi.map((item) => (
                      <a href={item.link} target="blank" key={item.id}>
                        <figure>
                          <img src={item.image} alt="" />
                          <figcaption>{item.title}</figcaption>
                        </figure>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="hs-carrer">
              <ListTable title="Carrer" />
            </div>
          </div>
        </section>
        <section className="sec02">
          <div className="inner">
            <div className="hs-skill">
              <p className="title">Skill</p>
              <div className="img-container">
                <SkillBtn onClick={onClick} onMouseEnter={onMouseEnter} />
              </div>
            </div>
          </div>
        </section>
        <section className="sec03">
          <div className="inner">
            <div className="hs-project">
              <p className="title">Project</p>
              <div className="project-container">
                <ul>
                  {projectApi.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} target="blank">
                        <figure className="thumbnail">
                          <img src={item.thumbnail} alt="" />
                        </figure>
                        <div className="info">{item.info}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <SkillModal isSkillModal={isSkillModal} setIsSkillModal={setIsSkillModal} modalposition={modalPosition} />
      </main>
    </StyledMain>
  );
};

export default MainPage;
