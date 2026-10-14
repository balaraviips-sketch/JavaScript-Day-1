
    const productGrid = document.getElementById("productGrid");

    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then(products => {
        products.forEach(product => {
          // Create the product card
          const card = document.createElement("div");
          card.className = "product-card";

          // Image container
          const imageContainer = document.createElement("div");
          imageContainer.className = "image-container";

          const image = document.createElement("img");
          image.className = "product-image";
          image.src = product.image;
          image.alt = product.title;
          image.loading = "lazy";

          imageContainer.appendChild(image);

          // Product title (maximum 60 characters)
          const title = document.createElement("h2");
          title.className = "product-title";
          title.textContent =
            product.title.slice(0, 60) +
            (product.title.length > 60 ? "..." : "");

          // Product category
          const category = document.createElement("p");
          category.className = "product-category";
          category.textContent = product.category;

          // Product description (maximum 120 characters)
          const description = document.createElement("p");
          description.className = "product-description";
          description.textContent =
            product.description.slice(0, 120) +
            (product.description.length > 120 ? "..." : "");

          // Append elements to the card
          card.appendChild(imageContainer);
          card.appendChild(title);
          card.appendChild(category);
          card.appendChild(description);

          // Append the card to the grid
          productGrid.appendChild(card);
        });
      })
      .catch(error => {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.textContent = "Error: " + error.message;
        productGrid.appendChild(errorMessage);
      })
      .finally(() => {
        console.log("API called");
      });
