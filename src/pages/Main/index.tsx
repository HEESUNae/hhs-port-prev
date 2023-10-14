import React, { useEffect, useState } from 'react';

// style
import { StyledMain } from './style';

// image
import { mainImg } from '../../consts/image';

// api
import { appApi, myInfoLinkApi, projectApi } from '../../api/response';

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
  const [modalProperty, setModalProperty] = useState({ id: 0, lang: '', image: '', bgColor: '', contents: '' });

  // skillModal open/close
  const onClick = () => {
    setIsSkillModal((prev) => !prev);
  };

  // skillModal property
  const onMouseEnter = (item: SkillItemProps) => {
    setModalProperty(item);
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
                        <div className="badge-container">
                          {item.lang.map((lang) => (
                            <div className="badge" key={lang}>
                              {lang}
                            </div>
                          ))}
                        </div>
                        <div className="info">{item.info}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="inner">
            <div className="hs-native">
              <div className="title">APP</div>
              <div className="native-container">
                <p className="desc">React Native 패스트캠퍼스 인터넷 강의를 수강하며 클론코딩한 프로젝트 입니다.</p>
                <ul>
                  {appApi.map((item) => (
                    <li key={item.id}>
                      <figure className="thumbnail">
                        <img src={item.thumbnail} alt="" />
                      </figure>
                      <p className="badge">클론코딩</p>
                      <p className="title">{item.title}</p>
                      <div className="info">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <SkillModal isSkillModal={isSkillModal} setIsSkillModal={setIsSkillModal} modalProperty={modalProperty} />
      </main>
    </StyledMain>
  );
};

export default MainPage;
