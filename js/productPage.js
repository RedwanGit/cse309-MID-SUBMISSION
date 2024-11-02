// Array of product objects
const products = [
    // Household Cleaning Items
    {
        image: "/images/products/all-purpose.webp",
        title: "All-Purpose Cleaner",
        description: "A versatile cleaner for all surfaces, made with natural ingredients.",
        price: 9.99,
        category: "household"
    },
    {
        image: "/images/products/glass-cleaner.jpg",
        title: "Glass Cleaner",
        description: "Streak-free shine for all your glass surfaces, without harsh chemicals.",
        price: 8.99,
        category: "household"
    },
    // Personal Care Items
    {
        image: "/images/products/deodorant.webp",
        title: "Natural Deodorant",
        description: "Aluminum-free deodorant with a fresh scent.",
        price: 12.99,
        category: "personal"
    },
    {
        image: "/images/products/eco-friendly-bamboo-tooth-brush.png",
        title: "Bamboo Toothbrush",
        description: "Eco-friendly toothbrush made from sustainable bamboo.",
        price: 3.99,
        category: "personal"
    },
    {
        image: "/images/products/face-mask.jpg",
        title: "Face Mask",
        description: "Rejuvenating face mask made with organic ingredients.",
        price: 7.99,
        category: "personal"
    },
    {
        image: "/images/products/hair-comb-wooden-comb.webp",
        title: "Wooden Hair Comb",
        description: "Handcrafted wooden comb suitable for all hair types.",
        price: 5.99,
        category: "personal"
    },
    {
        image: "/images/products/handmade-natural-soap-icon.jpg",
        title: "Handmade Natural Soap",
        description: "Chemical-free soap bar made from essential oils.",
        price: 4.99,
        category: "personal"
    },
    {
        image: "/images/products/lip-balm.jpg",
        title: "Lip Balm",
        description: "Nourishing lip balm made with organic ingredients.",
        price: 3.49,
        category: "personal"
    },
    {
        image: "/images/products/organic-biodegradable-charcoal-bamboo.jpg",
        title: "Charcoal Bamboo Scrub",
        description: "Organic, biodegradable scrub for a deep cleanse.",
        price: 6.99,
        category: "personal"
    },
    {
        image: "/images/products/reusable-makeup-remover-pads.jpg",
        title: "Reusable Makeup Remover Pads",
        description: "Soft, washable makeup remover pads.",
        price: 10.99,
        category: "personal"
    },
    {
        image: "/images/products/Shampoo&Conditioner.jpeg",
        title: "Shampoo & Conditioner",
        description: "Sulfate-free shampoo and conditioner set.",
        price: 15.99,
        category: "personal"
    },
    {
        image: "/images/products/razor.jpg",
        title: "Reusable Metal Razor",
        description: "Eco-friendly razor with replaceable blades.",
        price: 19.99,
        category: "personal"
    }
];

// Function to create a product card
function createProductCard({ image, title, description, price }) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${image}" alt="${title}" class="product-image" >
        </div>
        <div class="product-content">
            <h2 class="product-title">${title}</h2>
            <p class="product-description">${description}</p>
            <div class="product-footer">
                <span class="product-price">$${price.toFixed(2)}</span>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    `;

    return card;
}

// Function to display products based on selected category
function displayProducts(category = "all") {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = ""; // Clear existing products

    // Filter products based on category
    const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
    filteredProducts.forEach(product => productsGrid.appendChild(createProductCard(product)));
}

// Initial load of products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(); // Show all products initially

    // Set up event listener for category selection
    document.getElementById('category').addEventListener('change', (e) => {
        displayProducts(e.target.value); // Show products based on selected category
    });
});
