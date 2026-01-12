//import './Header.css'
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '/src/assets/logo.png'
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setSchoolsOpen(false);
  };
  
  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setProductsOpen(prev => !prev);
    setSchoolsOpen(false);
  };
  
  const toggleSchoolsDropdown = (e) => {
    e.preventDefault();
    setSchoolsOpen(prev => !prev);
    setProductsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen || productsOpen || schoolsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen, productsOpen, schoolsOpen]);

  const handleLogoClick = () => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnchorClick = (e, selector) => {
    e.preventDefault();
    closeMenu();
    setProductsOpen(false);
    setSchoolsOpen(false);
    
    // Check if target exists on current page
    const target = document.querySelector(selector);
    if (target) {
      // Target exists on current page, scroll to it
      const headerEl = document.querySelector('header');
      const topBarEl = document.querySelector('.top-bar');
      const extra = 12;
      const offset = (headerEl ? headerEl.offsetHeight : 0) + (topBarEl ? topBarEl.offsetHeight : 0) + extra;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      // Target doesn't exist on current page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const targetEl = document.querySelector(selector);
        if (targetEl) {
          const headerEl = document.querySelector('header');
          const topBarEl = document.querySelector('.top-bar');
          const extra = 12;
          const offset = (headerEl ? headerEl.offsetHeight : 0) + (topBarEl ? topBarEl.offsetHeight : 0) + extra;
          const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <div className="top-bar" id="home">
        <div className="container">
          <span>
            <a href="tel:+919114036376"><i className="fas fa-phone-alt"></i> +91 8197984847</a>
          </span>
          <span>
            <a href="mailto:reachus@techyguide.in"><i className="fas fa-envelope"></i> reachus@techyguide.in</a>
          </span>
        </div>
      </div>

      <header ref={headerRef}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={handleLogoClick}>
              <img src={Logo} alt="TechyGuide Logo" />
            </Link>
          </div>

          <nav>
            <ul id="nav-links" className={menuOpen ? 'active' : ''}>

              <li><Link to="/" onClick={closeMenu}>Home</Link></li>

              <li className="dropdown">
                <a href="#shop" onClick={toggleProductsDropdown}>
                  Products <i className="fas fa-chevron-down"></i>
                </a>
                <ul className={`dropdown-menu ${productsOpen ? 'active' : ''}`}>
                  <li><a href="#" onClick={closeMenu}>TeBoT</a></li>
                  <li><Link to="/i-bot" onClick={closeMenu}>I-BoT</Link></li>
                  <li><a href="#" onClick={closeMenu}>E- Blox </a></li>
                  <li><a href="#" onClick={closeMenu}>Add On Kits</a></li>
                </ul>
              </li>

              <li><Link to="/courses" onClick={closeMenu}>Courses</Link></li>
              
              <li className="dropdown">
                <a href="#schools" onClick={toggleSchoolsDropdown}>
                  Schools <i className="fas fa-chevron-down"></i>
                </a>
                <ul className={`dropdown-menu ${schoolsOpen ? 'active' : ''}`}>
                  <li><Link to="/ai-roboticslab-cbse" onClick={closeMenu}>AI & Robotics Lab CBSE</Link></li>
                  <li><Link to="/ai-roboticslab-icse" onClick={closeMenu}>AI & Robotics Lab ICSE</Link></li>
                  <li><Link to="/schools/stem-tinkering-lab" onClick={closeMenu}>STEM Tinkering Lab</Link></li>
                  <li><a href="#" onClick={closeMenu}>STEM Lab </a></li>
                  <li><Link to="/schools/workshop" onClick={closeMenu}>Workshop</Link></li>
                  <li><Link to="/schools/composite-skill-lab" onClick={closeMenu}>Composite Skill Lab</Link></li>

                </ul>
              </li>
              
              <li><Link to="/impact-program" onClick={closeMenu}>Impact Program</Link></li>
              <li><a href="https://www.techyguide.in/robothrone/" target="_blank" rel="noopener noreferrer"> Robothrone </a></li>

              <li><Link to="/franchise" onClick={closeMenu}>Franchise</Link></li>
{/* <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</a></li> */}             
                <li><Link to="/shop" className="btn-nav nav-shop-cta" onClick={closeMenu}>Shop</Link></li>
              <li>
               <a
                  href="https://course.techyguide.in"
                  className="btn-nav nav-shop-cta"
                  target="_blank"
                  rel="noopener noreferrer"
>
  LMS Login
</a>

              </li>
            </ul>

            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
