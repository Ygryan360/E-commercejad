let cartCount = 0;
const cartCountTag = document.querySelector('.cart-count');
cartCountTag.textContent = cartCount;

// Tableau contenant les chemins d'accès des images pour chaque produit
const productImages = [
  "images/produit1.jpg",
  "images/produit2.jpg",
  "images/produit3.jpg",
  "images/produit4.jpg",
  "images/produit5.jpg",
  "images/produit6.jpg",
  "images/produit7.jpg",
  "images/produit8.jpg",
  "images/produit9.jpg",
  "images/produit10.jpg",
];

// Détails des produits
const products = [
  {
    name: "Produit 1",
    price: "€50",
    description: "Description détaillée du produit 1.",
  },
  {
    name: "Produit 2",
    price: "€60",
    description: "Description détaillée du produit 2.",
  },
  {
    name: "Produit 3",
    price: "€70",
    description: "Description détaillée du produit 3.",
  },
  {
    name: "Produit 4",
    price: "€80",
    description: "Description détaillée du produit 4.",
  },
  {
    name: "Produit 5",
    price: "€90",
    description: "Description détaillée du produit 5.",
  },
  {
    name: "Produit 6",
    price: "€100",
    description: "Description détaillée du produit 6.",
  },
  {
    name: "Produit 7",
    price: "€110",
    description: "Description détaillée du produit 7.",
  },
  {
    name: "Produit 8",
    price: "€120",
    description: "Description détaillée du produit 8.",
  },
  {
      name: "Produit 9",
      price: "€130",
    description: "Description détaillée du produit 9.",
},
  {
    name: "Produit 10",
    price: "€140",
    description: "Description détaillée du produit 10.",
  },
];

// Génération des produits dynamiquement
const productGrid = document.querySelector(".product-grid");
for (let i = 0; i < productImages.length; i++) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.innerHTML = `
        <img src="${productImages[i]}" alt="Produit ${i + 1}">
        <div class="product-info">
            <h3>Produit ${i + 1}</h3>
            <p class="price">€${50 + (i + 1) * 10}</p>
            <button class="add-to-cart" data-product="Produit ${
              i + 1
            }" data-id="${i + 1}">Voir Détails</button>
        </div>
    `;
  productGrid.appendChild(productCard);
}

// Gestion des événements d'ajout au panier et redirection vers la page de détails
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // const productId = event.target.dataset.id;
    // window.location.href = `product-detail.html?id=${productId}`;
    cartCount++;
    cartCountTag.textContent = cartCount;
  });
});

// Affichage des articles dans le panier
const modal = document.querySelector(".chart-modal");
/**
 * Cette fonction permet d'afficher ou de masquer le popup contenant les articles ajoutés au panier !
 * @param {string} elementId L'ID de la balise qui doit provoquer l'action
 * @param {string} action "close" pour masquer le Modal ou "show" pour afficher le Modal
 */
function showOrCloseModal(elementId, action) {
  if (action === "show") {
    document.getElementById(elementId).addEventListener("click", () => {
      modal.style.display = "flex";
    });
  } else {
    document.getElementById(elementId).addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}
showOrCloseModal("chart-modal-close-btn", "close");
showOrCloseModal("cart-icon", "show");
