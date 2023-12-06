document.addEventListener('DOMContentLoaded', function () {
    let cartItems = [];
    let prices = {
        'Alleryl 4mg/5ml Syrup 60ml': 12.20,
        'Hovid Horamine 4mg Tablet 10s (strip)': 3.10,
        'Avorius 5mg Tablet 10s (strip)': 14.20,
        'Difflam 0.3% Forte Throat Spray 15ml': 36.20,
        'Regro 5% Lotion 80ml': 165.00,
		'HOE T3 Ada 0.1% Gel 25g': 35.00,
		'Ceradan Skin Barrier Repair Cream 30g': 59.70,
		'Candid 1% Topical Dusting Powder 30g': 25.80,
		'Gaviscon Double Action Sachets 10 ml (sachet)': 5.00,
		'Norit 200mg (Activated Charcoal) Capsule 15s (strip)': 11.10,
		'Abbott Duphalac Syrup 200ml': 26.90,
		'Smecta Anti-Diarrheal (Strawberry) 1 Sachet': 4.90,
		'Proviton Capsule 30s': 45.70,
		'Pharmaton Capsule 30s': 45.20,
		'Kordel CoQ10 75mg + Omega 3-6 Capsule 90s + 30s': 195.50,
		'Tebonin Forte 120mg Tablet 30s': 84.70,
		'Allergan Optive Fusion UD Eye Drops 0.4ml x30': 60.10,
		'Opti-free Replenish Multi-Purpose Disinfecting Solution 300ml x3': 65.40,
		'Alcon Duratears Naturale Sterile Lubricant Ointment 3.5g': 13.60,
		'Rohto Dry Aid Eye Drop 13ml': 22.50,
		'Panadol 500mg Optizorb Formulation Caplet 12s (strip)': 6.00,
		'Axcel Paracetamol 250 Suspension 90ml': 14.20,
		'HOE Locoa 40mg Transdermal Patch 7s': 46.90,
		'Perskindol Cool Spray 250ml': 34.70,
		'Fluimucil A 600mg Effervescent Tablet 10s (Box)': 52.10,
		'Xepa Mucolix Elixir 90ml': 6.90,
		'Betadine Cold Defence Nasal Spray 20ml Kids': 39.50,
		'Flixonase 50mcg Aqeuous Nasal Spray':  66.00,
    };
    let totalPrice = 0.00;

    function addToCart(item) {
        cartItems.push(item);
        totalPrice += prices[item] || 0;
        updateCartModal();
    }

    function openCartModal() {
        document.getElementById('cart-modal').style.display = 'flex';
    }

    function closeCartModal() {
        document.getElementById('cart-modal').style.display = 'none';
    }

    function updateCartModal() {
        const cartItemsList = document.getElementById('cart-items-list');
        const cartTotalPrice = document.getElementById('cart-total-price');

        cartItemsList.innerHTML = '';

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            cartItemsList.appendChild(listItem);
        });

        cartTotalPrice.textContent = `RM ${totalPrice.toFixed(2)}`;
    }

    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var productName = button.getAttribute('data-product-name');
            addToCart(productName);
            console.log('Product added to cart:');
            console.log('Product Name: ' + productName);
            openCartModal();
        });
    });

    // Close the modal when clicking the close button
    document.querySelector('.close-btn').addEventListener('click', closeCartModal);
});
