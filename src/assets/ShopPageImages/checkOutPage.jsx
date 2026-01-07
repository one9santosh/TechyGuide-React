import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkOutPage.css';

const CheckOutPage = () => {
	const navigate = useNavigate();

  useEffect(() => {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
	document.head.appendChild(link);

	return () => {
	  document.head.removeChild(link);
	};
  }, []);

  useEffect(() => {
	let cart = JSON.parse(localStorage.getItem('techyCart')) || [];

	const orderItemsList = document.getElementById('orderItemsList');
	const summarySubtotal = document.getElementById('summarySubtotal');
	const summaryTotal = document.getElementById('summaryTotal');
	const checkoutForm = document.getElementById('checkoutForm');

	if (!orderItemsList || !summarySubtotal || !summaryTotal || !checkoutForm) {
	  return undefined;
	}

	const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);

	function initCheckout() {
		if (cart.length === 0) {
			orderItemsList.innerHTML = '<p style="color:#666;">Your cart is empty. Redirecting...</p>';
			setTimeout(() => { window.location.href = 'index.html'; }, 2000);
			return;
		}

		let total = 0;
		orderItemsList.innerHTML = '';

		cart.forEach(item => {
			total += item.price * item.quantity;

			const itemEl = document.createElement('div');
			itemEl.className = 'summary-item';
			itemEl.innerHTML = `
				<div class="item-img-box">
					<img src="${item.image}" alt="${item.title}">
					<span class="item-qty-badge">${item.quantity}</span>
				</div>
				<div class="item-info">
					<div class="item-name">${item.title}</div>
					<div class="item-meta">Qty: ${item.quantity}</div>
				</div>
				<div class="item-price">${formatPrice(item.price * item.quantity)}</div>
			`;
			orderItemsList.appendChild(itemEl);
		});

		summarySubtotal.innerText = formatPrice(total);
		summaryTotal.innerText = formatPrice(total);
	}

	const paymentCards = Array.from(document.querySelectorAll('.payment-card'));
	const paymentCardListeners = paymentCards.map(card => {
	  const handler = () => {
		paymentCards.forEach(c => c.classList.remove('selected'));
		card.classList.add('selected');
	  };
	  card.addEventListener('click', handler);
	  return { card, handler };
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const btn = document.querySelector('.btn-pay');
		const originalText = btn.innerText;
		btn.innerText = "Processing...";
		btn.style.opacity = "0.7";
		setTimeout(() => {
			alert("Order Placed Successfully! Thank you for shopping with TechyGuide.");
			localStorage.removeItem('techyCart');
			navigate('/shop');
		}, 2000);
	};

	checkoutForm.addEventListener('submit', handleSubmit);

	initCheckout();

	return () => {
	  paymentCardListeners.forEach(({ card, handler }) => {
		card.removeEventListener('click', handler);
	  });
	  checkoutForm.removeEventListener('submit', handleSubmit);
	};
  }, []);

  return (
	<div className="checkout-page-root">
	  <div className="checkout-container">
          
		  <div className="checkout-left">
			  <div className="header-logo">
				  <a href="#/shop" onClick={(e) => { e.preventDefault(); localStorage.setItem('openCartOnLoad', 'true'); navigate('/shop'); }}>&larr; Back to Cart</a>
				  <h2>Checkout</h2>
			  </div>

			  <form id="checkoutForm">
				  <section className="form-section">
					  <h3>Contact Information</h3>
					  <div className="form-group">
						  <label>Email Address</label>
						  <input type="email" placeholder="you@example.com" required />
					  </div>
				  </section>

				  <section className="form-section">
					  <h3>Shipping Address</h3>
					  <div className="form-row">
						  <div className="form-group half">
							  <label>First Name</label>
							  <input type="text" placeholder="" required />
						  </div>
						  <div className="form-group half">
							  <label>Last Name</label>
							  <input type="text" placeholder="" required />
						  </div>
					  </div>
					  <div className="form-group">
						  <label>Address</label>
						  <input type="text" placeholder="123 Tech Street, Robotics Lab" required />
					  </div>
					  <div className="form-row">
						  <div className="form-group third">
							  <label>City</label>
							  <input type="text" placeholder="Bengaluru" required />
						  </div>
						  <div className="form-group third">
							  <label>State</label>
							  <input type="text" placeholder="Karnataka" required />
						  </div>
						  <div className="form-group third">
							  <label>ZIP Code</label>
							  <input type="text" placeholder="560001" required />
						  </div>
					  </div>
				  </section>

				  <section className="form-section">
					  <h3>Payment Method</h3>
					  <div className="payment-options">
						  <div className="payment-card selected">
							  <div className="radio-circle"></div>
							  <span>Credit / Debit Card</span>
						  </div>
						  <div className="payment-card">
							  <div className="radio-circle"></div>
							  <span>UPI / Netbanking</span>
						  </div>
						  <div className="payment-card">
							  <div className="radio-circle"></div>
							  <span>Cash on Delivery</span>
						  </div>
					  </div>
                      
					  <div className="card-details-box">
						  <div className="form-group">
							  <label>Card Number</label>
							  <input type="text" placeholder="0000 0000 0000 0000" />
						  </div>
						  <div className="form-row">
							  <div className="form-group half">
								  <label>Expiry</label>
								  <input type="text" placeholder="MM / YY" />
							  </div>
							  <div className="form-group half">
								  <label>CVC</label>
								  <input type="text" placeholder="123" />
							  </div>
						  </div>
					  </div>
				  </section>

				  <button type="submit" className="btn-pay">Pay &amp; Place Order</button>
			  </form>
		  </div>

		  <div className="checkout-right">
			  <div className="summary-card">
				  <h3>Order Summary</h3>
                  
				  <div className="order-items" id="orderItemsList">
					  </div>

				  <div className="price-breakdown">
					  <div className="price-row">
						  <span>Subtotal</span>
						  <span id="summarySubtotal">₹0</span>
					  </div>
					  <div className="price-row">
						  <span>Shipping</span>
						  <span>Free</span>
					  </div>
					  <div className="price-row total">
						  <span>Total</span>
						  <span id="summaryTotal">₹0</span>
					  </div>
				  </div>
			  </div>
		  </div>

	  </div>
	</div>
  );
};

export default CheckOutPage;
