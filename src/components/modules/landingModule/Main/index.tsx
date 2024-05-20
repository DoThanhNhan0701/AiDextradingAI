import { useEffect } from 'react';
import Footer from '../../block/Footer';
import LandingExpand from '../../block/LandingExpand';
import LandingFaster from '../../block/LandingFaster';
import LandingMoreThan from '../../block/LandingMoreThan';
import LandingProfessional from '../../block/LandingProfessional';
import LandingSctroll from '../../block/LandingSctroll';
import LandingTheModal from '../../block/LandingTheModal';
import LandingWhyTrust from '../../block/LandingWhyTrust';
import * as S from './Main';

export default function MainLanding() {
  useEffect(() => {
    const animateBlocks = document.querySelectorAll(
      '.open-to-view, .open-to-view-left',
    );

    const handleScroll = () => {
      animateBlocks.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight - 100 &&
          !element.classList.contains('show')
        ) {
          element.classList.add('show');
        }
      });
    };

    const pos = () => {
      handleScroll();
    };

    setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', pos);

    return () => {
      window.removeEventListener('scroll', pos);
    };
  }, []);

  return (
    <S.MainWrap>
      <div className="content-main-landing">
        <LandingTheModal />
        <LandingProfessional />
        <LandingFaster />
        <LandingMoreThan />
        <LandingWhyTrust />
      </div>
      <LandingSctroll />
      <div className="content-main-landing">
        <LandingExpand />
        <Footer />
      </div>
    </S.MainWrap>
  );
}
