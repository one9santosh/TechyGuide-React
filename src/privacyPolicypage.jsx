import React, { useEffect } from 'react';
import './privacyPolicypage.css';

export default function PrivacyPolicyPage() {
    useEffect(() => {
        // 1. Date Logic
        const dateSpan = document.getElementById('current-date');
        if (dateSpan) {
            const today = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            dateSpan.textContent = today.toLocaleDateString('en-US', options);
        }

        // 2. ScrollSpy (Active Link Highlighting)
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.toc a');

        // Offset calculation for sticky headers/padding
        const offset = 100;

        const onScroll = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - offset)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', onScroll);

        // 3. Smooth Scrolling for Anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calculate scroll position with offset
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 80;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="privacy-policy-page-root">
            <style>{`
                .privacy-policy-page-root .toc ul {
                    display: block !important;
                    flex-direction: column !important;
                    list-style: none !important;
                    border-left: 2px solid #e5e7eb !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .privacy-policy-page-root .toc li {
                    display: block !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    list-style: none !important;
                    width: 100% !important;
                }
                .privacy-policy-page-root .toc a {
                    display: block !important;
                    padding: 10px 20px !important;
                    text-decoration: none !important;
                    color: #6b7280 !important;
                    font-weight: 500 !important;
                    font-size: 0.95rem !important;
                    transition: all 0.2s ease !important;
                    border-left: 2px solid transparent !important;
                    margin-left: -2px !important;
                }
                .privacy-policy-page-root .toc a:hover {
                    color: #008273 !important;
                }
                .privacy-policy-page-root .toc a.active {
                    color: #008273 !important;
                    border-left-color: #008273 !important;
                    background: linear-gradient(90deg, #eff6ff 0%, transparent 100%) !important;
                }
            `}</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            <div className="bg-orb orb-1"></div>
            <div className="bg-orb orb-2"></div>

            <div className="container">
                
                <aside className="sidebar">
                    <div className="sticky-wrapper">
                        <div className="header-group">
                            <h1>Privacy Policy</h1>
                            <p className="last-updated">Last Updated: <span id="current-date"></span></p>
                        </div>
                        
                        <nav className="toc">
                            <ul>
                                <li><a href="#intro" className="active">Introduction</a></li>
                                <li><a href="#collection">1. Information Collection</a></li>
                                <li><a href="#consent">2. Consent</a></li>
                                <li><a href="#disclosure">3. Disclosure</a></li>
                                <li><a href="#payment">4. Payment Security</a></li>
                                <li><a href="#third-party">5. Third-Party Services</a></li>
                                <li><a href="#security">6. Security & Cookies</a></li>
                                <li><a href="#age">7. Age of Consent</a></li>
                                <li><a href="#changes">8. Changes</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>

                        <div className="support-box">
                            <i className='bx bx-support'></i>
                            <p>Need help?</p>
                            <a href="mailto:reachus@techyguide.in">reachus@techyguide.in</a>
                        </div>
                    </div>
                </aside>

                <main className="content-area">
                    
                    <section id="intro" className="card intro-card">
                        <div className="card-content">
                            <p className="lead">At <strong>TechyGuide</strong>, we are committed to safeguarding your privacy with the utmost care. This policy outlines how we handle your personal data.</p>
                        </div>
                    </section>

                    <section id="collection" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-data'></i></div>
                            <h2>1. What Do We Do With Your Information?</h2>
                        </div>
                        <div className="card-content">
                            <p>When you purchase from our store, we collect necessary information to complete the transaction:</p>
                            <ul className="check-list">
                                <li>Name</li>
                                <li>Billing & Shipping Address</li>
                                <li>Email Address</li>
                            </ul>
                            <div className="info-block">
                                <strong>Browsing:</strong> We automatically receive your IP address to learn about your browser and OS.
                            </div>
                            <div className="info-block">
                                <strong>Marketing:</strong> With your permission, we may send emails about new products and updates.
                            </div>
                        </div>
                    </section>

                    <section id="consent" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-check-shield'></i></div>
                            <h2>2. Consent</h2>
                        </div>
                        <div className="card-content">
                            <h3>How do you get my consent?</h3>
                            <p>We imply consent when you provide personal information to complete a transaction, verify a card, or arrange a delivery. For secondary reasons (like marketing), we will ask for expressed consent directly.</p>
                            
                            <h3>How do I withdraw?</h3>
                            <p>You may withdraw your consent at any time by contacting us.</p>
                        </div>
                    </section>

                    <section id="disclosure" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-show'></i></div>
                            <h2>3. Disclosure</h2>
                        </div>
                        <div className="card-content">
                            <p>We may disclose your personal information only if required by law or if you violate our Terms of Service.</p>
                        </div>
                    </section>

                    <section id="payment" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-credit-card'></i></div>
                            <h2>4. Payment Security</h2>
                        </div>
                        <div className="card-content">
                            <p>We use third-party payment gateways. <strong>We do not store your card data.</strong></p>
                            <div className="badge-container">
                                <span className="badge secure">PCI-DSS Compliant</span>
                                <span className="badge encrypted">Encrypted</span>
                            </div>
                            <p>Data is encrypted via the Payment Card Industry Data Security Standard (PCI-DSS). Your transaction data is only used as long as necessary to complete the purchase, then it is deleted.</p>
                        </div>
                    </section>

                    <section id="third-party" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-link-external'></i></div>
                            <h2>5. Third-Party Services</h2>
                        </div>
                        <div className="card-content">
                            <p>Third-party providers will only collect and use your information to the extent necessary to perform their services.</p>
                            <div className="alert warning">
                                <i className='bx bx-error-circle'></i>
                                <span><strong>Jurisdiction:</strong> Providers may be located in different jurisdictions. Your information may become subject to the laws of those regions.</span>
                            </div>
                            <p>Once you leave our store's website or are redirected to a third-party application, you are no longer governed by this Privacy Policy.</p>
                        </div>
                    </section>

                    <section id="security" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-lock-alt'></i></div>
                            <h2>6. Security & Cookies</h2>
                        </div>
                        <div className="card-content">
                            <p>We take reasonable precautions and follow industry best practices to ensure your data is not lost, misused, accessed, or altered.</p>
                            <hr />
                            <h3>Cookies</h3>
                            <p>We use cookies to maintain your user session (e.g., keeping items in your cart). These are not used to personally identify you on other websites.</p>
                        </div>
                    </section>

                    <section id="age" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-user'></i></div>
                            <h2>7. Age of Consent</h2>
                        </div>
                        <div className="card-content">
                            <p>By using this site, you represent that you are at least the age of majority in your state or province of residence.</p>
                        </div>
                    </section>

                    <section id="changes" className="card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-revision'></i></div>
                            <h2>8. Changes to Policy</h2>
                        </div>
                        <div className="card-content">
                            <p>We reserve the right to modify this privacy policy at any time. Changes take effect immediately upon posting. Please review it frequently.</p>
                        </div>
                    </section>

                    <section id="contact" className="card contact-card">
                        <div className="card-header">
                            <div className="icon-box"><i className='bx bx-envelope'></i></div>
                            <h2>Contact Information</h2>
                        </div>
                        <div className="card-content">
                            <p>To access, correct, amend or delete any personal information, register a complaint, or want more information, contact our Privacy Compliance Officer:</p>
                            
                            <div className="contact-grid">
                                <div className="contact-item">
                                    <span className="label">Email</span>
                                    <a href="mailto:reachus@techyguide.in" className="value">reachus@techyguide.in</a>
                                </div>
                                <div className="contact-item">
                                    <span className="label">Mailing Address</span>
                                    <span className="value">59, C/o – Late Shri Golak Jena,<br/>Raisuan, Haladipada,<br/>Baleshwar – 756027, Odisha</span>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}

