import { useState } from 'react';
import { Burger, Links, Logo } from './components';
import { useScrollPosition } from '../../utils';
import classes from '../../styles/classes.module.scss';

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) {
        setHideOnScroll(isShow);
      }
    }, [hideOnScroll], false, false, 300
  );

  const toggleNav = () => {
    if ((/Mobi|Android/i.test(navigator.userAgent)) || window.innerWidth < 1024) {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    }
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = 'auto';
    }
  };

  const navIsOpen = () => (isOpen) ? 'is-open' : '';
  const headerIsVisible = hideOnScroll ? '' : 'is-visible';
  
  return (
    <header id="masthead" className={ `site-header ${headerIsVisible}` }>
      <div className="toolbar">
        <nav className={ `inner ${classes.max_width_1680}` }>
          <div className="bg">
            <div className={`logo ${classes.align_y}` }>
              <Logo />
            </div>

            <div className={ `wrap-burger ${classes.align_y}` }>
              <Burger navIsOpen={ navIsOpen } toggleNav={ toggleNav } />
            </div>
            <div className={ `nav ${navIsOpen()}` }>
              <Links { ...props } element="header" className={ classes.header_links } onClick={ toggleNav } />
            </div>
          </div>  
        </nav>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          width: 100%;
          height: 128px;
          z-index: 3;
          transition: all 0.3s ease-in-out;
        }
        .logo {
          width: 160px;
          left: 20px;
          z-index: 4;
          transition: all 0.3s ease-in-out;
        }
        .site-header.is-visible {
          background: #223655;
          height: 80px;
        }
        .site-header.is-visible .logo {
          width: 100px;
        }
        .bg {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 9999;
        }
        .toolbar {
          width: 100%;
          position: relative;
          height: 100%;
        }
        @media (max-width: 1023px) {
          .wrap-burger {
            cursor: pointer;
            z-index: 99;
            right: 20px;
          }
          .nav {
            height: 100vh;
            background: #223655;
            position: absolute;
            width: 100%;
            top: 0;
            padding: 32px;
            padding-top: 128px;
            transition: all 0.3s ease;
            -webkit-transform: translateX(100%);
                -ms-transform: translateX(100%);
                    transform: translateX(100%);
          }
          .nav.is-open {
            -webkit-transform: translateX(0%);
                -ms-transform: translateX(0%);
                    transform: translateX(0%);
          }
        }
        @media (min-width: 1024px) {

          .wrap-burger {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};


{/* <Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head> */}