import NavBar from '../componets/modules/nav-bar';
import { useCallback, useRef, useState } from 'react';
import BrowserHead from '../componets/modules/Head';
import Brand from '../componets/common/brand';
import Welcome from '../componets/modules/welcome';
import Resume from '../componets/modules/resume';
import AboutMe from '../componets/modules/about-me';

export default function Home() {
  const [open, setOpen] = useState(0);
  const handleOpen = useCallback(() => setOpen((prev) => !prev), []);

  const welcomeRef = useRef();
  const resumeRef = useRef();
  const aboutRef = useRef();

  // useEffect(() => {
  //   function wheelListener(e) {
  //     e.preventDefault();
  //   }
  //   // document.addEventListener('wheel', wheelListener, {passive: false});
  //   window.addEventListener('wheel', wheelListener, { passive: false });
  //   return () => {
  //     window.removeEventListener('wheel', wheelListener, { passive: true });
  //   };
  // }, []);

  const handleScrollTo = useCallback(
    (e, title) => {
      // function wheelListener(e) {
      //   e.preventDefault();
      // }
      // window.addEventListener('wheel', wheelListener, { passive: false });
      handleOpen();
      console.log(e);
      console.log('---------');
      console.log(e.pageY);
      console.log('---------');
      // console.log(e.preventDefault);
      // e.preventDefault();
      switch (title) {
        case 'welcome':
          welcomeRef?.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'resume':
          resumeRef?.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
          aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
          // window.scrollTo({
          //   left: e.screenX,
          //   top: e.screenY,
          //   behavior: 'smooth',
          // });
          break;
        default:
          break;
      }
      // window.removeEventListener('wheel', wheelListener, { passive: true });
    },
    [handleOpen]
  );

  return (
    <>
      <BrowserHead />
      <main
        className="general"
        style={{
          '--translate-x': open ? '0px' : '-165px',
        }}
      >
        <NavBar
          open={open}
          handleOpen={handleOpen}
          handleScrollTo={handleScrollTo}
        />
        <div className="content">
          <div className="wrapper_brand">
            <Brand open={open} />
          </div>
          <div className="module" ref={welcomeRef}>
            <Welcome />
          </div>
          <div className="module" ref={resumeRef}>
            <Resume />
          </div>
          <div className="module" ref={aboutRef}>
            <AboutMe />
          </div>
        </div>
      </main>
    </>
  );
}
