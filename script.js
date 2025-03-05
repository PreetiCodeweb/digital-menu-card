document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations for sections
    const sections = document.querySelectorAll("section");
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load

    // Sample menu items
    const menuItems = [
        { name: "Burger", price: "$8", img: "burger.jpg", desc: "Juicy grilled burger" },
        { name: "Pizza", price: "$12", img: "pizza.jpg", desc: "Cheesy pepperoni pizza" },
        { name: "Pasta", price: "$10", img: "pasta.jpg", desc: "Creamy Alfredo pasta" }
    ];

    const menuContainer = document.querySelector(".menu-container");
    
    // Load menu dynamically
    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <span class="price">${item.price}</span>
        `;
        menuContainer.appendChild(div);
    });

    // Order Form Submission
    document.getElementById("orderForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your order has been placed!");
    });
});