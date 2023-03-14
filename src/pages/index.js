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

  const contentRef = useRef();
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
      console.log(e.scrollTop);
      console.log('scrollTop', aboutRef?.current?.scrollTop);
      console.log('---------');
      // console.log(e.preventDefault);
      // e.preventDefault();
      switch (title) {
        // case 'about':
        //   console.log('start about');
        //   const finalOffset =
        //     aboutRef?.current?.getBoundingClientRect().top +
        //     aboutRef?.current?.scrollTop;
        //   console.log('finalOffset', finalOffset);
        //   console.log('windows offset', window);
        //   // console.log(window.scrollTo);
        //   // document.body.scrollTo;
        //   // setTimeout(() => {
        //   //   aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
        //   // }, 100);
        //   console.log('------------------');
        //   aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
        //   console.log(
        //     'contentRef',
        //     contentRef?.current?.getBoundingClientRect()
        //   );
        //   console.log('contentRef scrollTop', contentRef?.current?.scrollTop);
        //   console.log(
        //     'finalOffset',
        //     aboutRef?.current?.getBoundingClientRect().top +
        //       aboutRef?.current?.scrollTop
        //   );
        //   // window.scroll(30, 500);
        //   // window.scrollTo({
        //   //   left: finalOffset,
        //   //   top: finalOffset,
        //   //   behavior: 'smooth',
        //   // });
        //   break;
        case 'welcome':
          welcomeRef?.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'resume':
          resumeRef?.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
          console.log('start about');
          aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const finalOffset =
              aboutRef?.current?.getBoundingClientRect().top +
              aboutRef?.current?.scrollTop;
            console.log('finalOffset', finalOffset);
            if (finalOffset > 300) {
              console.log('start fix');
              aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
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
        <div className="content" ref={contentRef}>
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
