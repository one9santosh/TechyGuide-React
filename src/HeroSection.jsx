import "./HeroSection.css";
import herobgImage from "/src/assets/hero-bg.jpg";

function HeroSection() {
  const handleAnchorClick = (e, selector) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (!target) return;
    const headerEl = document.querySelector('header');
    const topBarEl = document.querySelector('.top-bar');
    const extra = 12; // small buffer so previous section doesn't peek
    const offset = (headerEl ? headerEl.offsetHeight : 0) + (topBarEl ? topBarEl.offsetHeight : 0) + extra;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
       <section
  className="hero"
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 51, 102, 0.95) 0%,
        rgba(0, 51, 102, 0.75) 80%,
        rgba(255, 255, 255, 0.95) 100%
      ),
      url(${herobgImage})
    `,
    backgroundPosition: "center 10%",
    backgroundSize: "cover",
  }}
>
  <img
    src={herobgImage}
    alt="Students learning robotics in TechyGuide STEM lab in India"
    className="hero-bg-alt"
  />


        <div className="container hero-content">
          <h1>
            Empowering the Next Generation with <br />{" "}
            <span className="highlight">AI, Robotics & STEM Learning</span>
          </h1>

          <p>Building future innovators through hands-on labs and courses</p>

          <div className="hero-buttons">
            <a href="#schools" className="btn btn-hero-primary" onClick={(e) => handleAnchorClick(e, '#schools')}>
              Explore Labs for Schools &rarr;
            </a>
            <a href="#shop" className="btn btn-hero-secondary" onClick={(e) => handleAnchorClick(e, '#shop')}>
              Shop STEM Kits
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
