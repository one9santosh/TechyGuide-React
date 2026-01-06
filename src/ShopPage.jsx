import { useState, useEffect } from 'react';
import './ShopPage.css';

import techIot1 from './assets/ShopPageImages/TechIoT Advance Kit-1.webp';
import techIot2 from './assets/ShopPageImages/TechIoT Advance Kit-2.webp';
import roboticArmMain from './assets/ShopPageImages/Robotic-Arm-Kit-Box-550.webp';
import roboticArmAlt from './assets/ShopPageImages/Robotic-Arm-Kit-Project-2.webp';
import roboticArmBox from './assets/ShopPageImages/Robotic-Arm-Box-1.webp';
import ottoman1 from './assets/ShopPageImages/Ottoman Kit 1.webp';
import ottoman2 from './assets/ShopPageImages/Ottoman Kit 2.webp';
import ottoman3 from './assets/ShopPageImages/Ottoman Kit 3.webp';
import pen1 from './assets/ShopPageImages/3d pen 1.webp';
import pen2 from './assets/ShopPageImages/3d pen 2.webp';
import pen3 from './assets/ShopPageImages/3d pen 3.webp';

function ShopPage() {
    const products = [
        { id: 1, title: "STEM Bundle", price: 23999, originalPrice: 29999, rating: 4.9, image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "It is a 5 in 1 stem kit of Robotics, 3D Printing, IoT, Artificial Intelligence and Coding . In this course we provide 90 Live Classes along with Lifetime Access to Course ID. In this course you will be regularly tested in the forms of assignment. It's a unique learning opportunity for the kids and will enable them to succeed in the fields of Stem technology.", features: ["☑ 90 Live Classes", "☑ Lifetime Access to Course ID", "☑ Certificate", "☑ Assignment", "☑ 2 in 1 STEM Kit"], images: ["https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://www.youtube.com/watch?v=wlkCQXHEgjA"] },
        { id: 2, title: "TechBot Advanced Kit", price: 7499, originalPrice: 8999, rating: 4.7, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "This Robotic Kit is suitable for kids age 10 and above which will reduce the screen timing and increase the curiosity for innovation.Using this kit, children can make various projects which will solve real life problems.", features: ["1. Easy-to-build breadboard basic electronic circuit model and basics of coding."," ", "2. Blend of fun and learning to build electronic DIY circuits."," ","3. Hands-on experience in building 25 different types of projects."," ", "4. No soldering required, appropriate for age 9 years and above."," ", "5. Engaging educational kit for young explorers."], images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "https://videos.pexels.com/video-files/856247/856247-hd_1920_1080_30fps.mp4"] },
        { id: 3, title: "TechIoT Advance Kit", price: 6999, originalPrice: 8499, rating: 4.6, image: techIot1, description: "The IoT Advanced kit has activities related to advanced learning of IoT using concepts of various IoT sensors like IR sensor, soil moisture sensor etc, IoT frameworks and the microcontrollers used in IoT medium that will help any child to learn about IoT concepts in a detailed way by doing activities practically.", features: ["1. The ultimate IoT kit for kids and beginners to understand the concept of Internet of Things."," ", "2. It contains a variety of IoT sensors, WiFi module, and other components."," ", "3. Free project-making app allowing access to inbuilt Smartphone sensors."," ", "4. Supports both Arduino IDE and graphical programming."," ","5. Getting kids involved with IoT devices can be loads of fun for them!"], images: [techIot1, techIot2, "https://www.youtube.com/watch?v=9pEqyr_uT-k"] },
        { id: 4, title: "Robotic Arm Kit", price: 3499, originalPrice: 4299, rating: 4.8, image: roboticArmMain, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [roboticArmMain, roboticArmAlt, "https://www.youtube.com/watch?v=HXHphpDJ9T0&list=RDHXHphpDJ9T0&start_radio=1"] },
        { id: 5, title: "Ottoman Kit", price: 2499, originalPrice: 3499, rating: 4.5, image: ottoman1, description: "Build-it-yourself analog synthesizer.", features: ["True Analog VCO", "Moog-style ladder filter"], images: [ottoman2, ottoman3, "https://www.youtube.com/watch?v=8-5w56VxRVg"] },
        { id: 6, title: "3D Pen", price: 899, originalPrice: 1299, rating: 4.9, category: "3D-Pen", image: pen1, description: "3D Pen is a 3D model printed using 3D printer used for educational purpose by students to design and create three-dimensional objects.", features: ["3D Pen is a 3D model printed using 3D printer used for educational purpose by students to design and create three-dimensional objects."], images: [pen2, pen3, "https://www.youtube.com/watch?v=S2kymv60ndQ"] },
        { id: 7, title: "TechBoT Electronics Kit", price: 1199, originalPrice: 1499, rating: 4.8, image: roboticArmAlt, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [roboticArmAlt, roboticArmMain, techIot1] },
        { id: 8, title: "TechBoT Arduino Kit", price: 2999, originalPrice: 3999, rating: 4.8, image: roboticArmBox, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [roboticArmBox, roboticArmMain, techIot2] },
        { id: 9, title: "TeBoT Champ Kit", price: 6499, originalPrice: 7999, rating: 4.8, image: ottoman2, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [ottoman2, ottoman3, roboticArmBox] },
        { id: 10, title: "TeBoT Basic Kit", price: 4399, originalPrice: 5499, rating: 4.8, image: pen2, description: "An  microcontroller receives control commands from the TechyGuide mobile application via Bluetooth. Each command controls one of the six servo motors, representing different joints of the robotic arm. Servo angles are adjusted incrementally to provide smooth and precise movements. Angle limits are applied to prevent over-rotation and mechanical damage. The system is suitable for pick-and-place tasks, robotics learning, and automation demonstrations.", features: ["This is a four degree of freedom robotic arm capable of picking and placing small objects."," ", "The robotic arm can fit on your table with middle-sized links."," ", "It helps to reach throughout the table and get hold of things without you to move."," ", "It provides with insights into a palletizing robotic manipulator through hands-on experience."," ", "Robotic arm teaches advanced robotics concepts like Motion Planning, Inverse Kinematics, etc."], images: [pen2, pen3, techIot1] }
    ];

    const [cart, setCart] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const [currentMediaList, setCurrentMediaList] = useState([]);
    const [activeTab, setActiveTab] = useState('features');

    const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

    const getYoutubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    useEffect(() => {
        const saved = localStorage.getItem('techyCart');
        if (saved) setCart(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('techyCart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        filterProducts();
    }, [searchTerm, currentCategory]);

    useEffect(() => {
        if (!isModalOpen || currentMediaList.length === 0) return;
        
        // Check if current slide is a video or YouTube - if so, don't auto-scroll
        const currentMedia = currentMediaList[currentSliderIndex];
        const isVideo = currentMedia && (currentMedia.includes('.mp4') || currentMedia.includes('video'));
        const isYoutube = currentMedia && (currentMedia.includes('youtube.com') || currentMedia.includes('youtu.be'));
        
        if (isVideo || isYoutube) {
            return; // Don't auto-scroll for videos
        }
        
        const interval = setInterval(() => {
            changeSlide(1);
        }, 3000);

        return () => clearInterval(interval);
    }, [isModalOpen, currentSliderIndex, currentMediaList.length]);

    const filterProducts = () => {
        let filtered = products;
        if (currentCategory !== 'All') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }
        if (searchTerm) {
            filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setFilteredProducts(filtered);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const updateItemQty = (id, change) => {
        setCart(prev => {
            const updated = prev.map(item => {
                if (item.id === id) {
                    const newQty = item.quantity + change;
                    return { ...item, quantity: newQty };
                }
                return item;
            }).filter(item => item.quantity > 0);
            return updated;
        });
    };

    const handleAddClick = (id) => {
        const product = products.find(p => p.id === id);
        const existing = cart.find(c => c.id === id);
        if (existing) {
            updateItemQty(id, 1);
        } else {
            setCart(prev => [...prev, { ...product, quantity: 1 }]);
        }
    };

    const handleQtyChange = (id, change) => {
        updateItemQty(id, change);
    };

    const handleBuyNow = (id) => {
        handleAddClick(id);
        setTimeout(() => {
            alert('Redirecting to checkout...');
        }, 300);
    };

    const openProductModal = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;
        setCurrentProduct(product);
        setCurrentMediaList(product.images || []);
        setCurrentSliderIndex(0);
        setIsModalOpen(true);
        setActiveTab('features');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProduct(null);
        setCurrentMediaList([]);
        setCurrentSliderIndex(0);
    };

    const changeSlide = (direction) => {
        if (currentMediaList.length === 0) return;
        let newIndex = currentSliderIndex + direction;
        if (newIndex < 0) newIndex = currentMediaList.length - 1;
        if (newIndex >= currentMediaList.length) newIndex = 0;
        setCurrentSliderIndex(newIndex);
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartItemInModal = currentProduct ? cart.find(c => c.id === currentProduct.id) : null;

    const renderMedia = (url, index) => {
        if (!url) return null;
        const isVideo = url.includes('.mp4') || url.includes('video');
        const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
        
        if (isYoutube) {
            const videoId = getYoutubeId(url);
            return (
                <iframe
                    key={index}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={currentSliderIndex === index ? '' : 'hidden'}
                />
            );
        } else if (isVideo) {
            return (
                <video
                    key={index}
                    controls
                    loop
                    muted
                    playsInline
                    className={currentSliderIndex === index ? '' : 'hidden'}
                >
                    <source src={url} type="video/mp4" />
                </video>
            );
        } else {
            return (
                <img
                    key={index}
                    src={url}
                    alt="Product"
                    className={currentSliderIndex === index ? '' : 'hidden'}
                />
            );
        }
    };

    return (
        <div className="shop-page-wrapper">
            <div className="search-header">
                <div className="header-content">
                    <div className="search-wrapper">
                        <span className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search for AI kits, robotics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="cart-container">
                        <button className="header-cart-btn" onClick={toggleCart}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            <span className="cart-badge">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button onClick={toggleCart} className="close-cart">&times;</button>
                </div>
                
                <div className="cart-items-container">
                    {cart.length === 0 ? (
                        <div className="empty-cart-msg">Your cart is empty.</div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-details">
                                    <div className="cart-item-title">{item.title}</div>
                                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                                    <div className="cart-item-qty">
                                        <button className="mini-qty-btn" onClick={() => updateItemQty(item.id, -1)}>−</button>
                                        <span className="mini-qty-val">{item.quantity}</span>
                                        <button className="mini-qty-btn" onClick={() => updateItemQty(item.id, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <button className="btn-checkout">PROCEED TO BUY</button>
                </div>
            </div>
            <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}></div>

            <div className="shop-layout">
                <div className="mobile-filter-bar">
                    <button className="mobile-cat-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <span>{currentCategory === 'All' ? 'Select Category' : currentCategory}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                </div>

                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="category-list">
                        {['All', '3D-Pen', 'AI & Vision', 'IoT', 'Drones', 'Electronics'].map(cat => (
                            <li
                                key={cat}
                                className={`category-item ${currentCategory === cat ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentCategory(cat);
                                    setIsSidebarOpen(false);
                                }}
                            >
                                {cat === 'All' ? 'All Products' : cat}
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="main-content">
                    <div className="content-header">
                        <h2 className="section-title">{currentCategory === 'All' ? 'All Products' : currentCategory}</h2>
                        <span className="product-count">{filteredProducts.length} items</span>
                    </div>
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card" onClick={() => openProductModal(product.id)}>
                                <div className="card-img-box">
                                    <img src={product.image} alt={product.title} />
                                    <div className="card-overlay">
                                        <button className="view-btn">View Details</button>
                                    </div>
                                </div>
                                <div className="card-details">
                                    <h3 className="card-title">{product.title}</h3>
                                    <div className="card-price">
                                        {formatPrice(product.price)}
                                        <span className="original">{formatPrice(product.originalPrice)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="no-results"><h3>No matches found.</h3></div>
                    )}
                </main>
            </div>

            {isModalOpen && currentProduct && (
                <div className="modal">
                    <button className="close-modal" onClick={closeModal}>&times;</button>
                    
                    <div className="modal-overlay" onClick={closeModal}></div>
                    
                    <div className="modal-content fade-in-up">
                        <div className="modal-body">
                            <div className="modal-left">
                                <div className="slider-container">
                                    <button className="slider-btn prev-btn" onClick={() => changeSlide(-1)}>&#10094;</button>
                                    
                                    <div className="main-image-container">
                                        {currentMediaList.map((url, index) => renderMedia(url, index))}
                                    </div>

                                    <button className="slider-btn next-btn" onClick={() => changeSlide(1)}>&#10095;</button>
                                </div>
                                <div className="slider-dots">
                                    {currentMediaList.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`dot ${currentSliderIndex === index ? 'active' : ''}`}
                                            onClick={() => setCurrentSliderIndex(index)}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-right">
                                <div className="pd-header">
                                    <h1 className="pd-title">{currentProduct.title}</h1>
                                    <div className="pd-meta">
                                        <span className="rating-badge">★ <span>{currentProduct.rating}</span></span>
                                        <span className="review-count">124 Reviews</span>
                                    </div>
                                </div>
                                <div className="pd-price-block">
                                    <span className="pd-price">{formatPrice(currentProduct.price)}</span>
                                    <div className="pd-discount-block">
                                        <span className="pd-original-price">{formatPrice(currentProduct.originalPrice)}</span>
                                        <span className="pd-discount-tag">{Math.round((1 - currentProduct.price/currentProduct.originalPrice) * 100)}% Off</span>
                                    </div>
                                </div>
                                
                                <div className="pd-tabs-nav">
                                    <button className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>Key Features</button>
                                    <button className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                                </div>
                                
                                <div className="pd-tab-container scrollable-content">
                                    <div className={`tab-content ${activeTab === 'features' ? 'active' : ''}`}>
                                        <ul className="pd-features-list">
                                            {currentProduct.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                                        <p className="pd-description-text">{currentProduct.description}</p>
                                    </div>
                                </div>
                                
                                <div className="modal-actions-desktop">
                                    <div style={{flex: 1}}>
                                        {cartItemInModal ? (
                                            <div className="qty-controller">
                                                <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, -1)}>−</button>
                                                <span className="qty-val">{cartItemInModal.quantity}</span>
                                                <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, 1)}>+</button>
                                            </div>
                                        ) : (
                                            <button className="action-btn btn-cart" onClick={() => handleAddClick(currentProduct.id)}>ADD TO CART</button>
                                        )}
                                    </div>
                                    <button className="btn-buy action-btn" onClick={() => handleBuyNow(currentProduct.id)}>Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-bottom-actions">
                            <div style={{flex: 1}}>
                                {cartItemInModal ? (
                                    <div className="qty-controller">
                                        <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, -1)}>−</button>
                                        <span className="qty-val">{cartItemInModal.quantity}</span>
                                        <button className="qty-btn" onClick={() => handleQtyChange(currentProduct.id, 1)}>+</button>
                                    </div>
                                ) : (
                                    <button className="action-btn btn-cart" onClick={() => handleAddClick(currentProduct.id)}>ADD TO CART</button>
                                )}
                            </div>
                            <button className="btn-buy action-btn" onClick={() => handleBuyNow(currentProduct.id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopPage;