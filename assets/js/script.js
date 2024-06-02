
app.route({
    view: "products",
    load: function () {
        $("#app").load("products.html", function () {
            displayProducts();
        });
    }
});

const products = [];

    function displayProducts() {
        const productContainer = $('#products');
        productContainer.empty();
        products.forEach((product, index) => {
            const productCard = `
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.description}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: ${product.category}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: $${product.price}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="#" class="inline-flex ml-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onclick="deleteProduct(${index})">
                            Delete
                            <svg class="h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                             </svg>
                        </a>
                    </div>
                </div>
            `;
            productContainer.append(productCard);
        });
    }

    $('#product-form').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const price = $('#price').val();
        const category = $('#category').val();
        const description = $('#description').val();

        const newProduct = { name, price, category, description };
        products.push(newProduct);
        displayProducts();
        $('#crud-modal').toggleClass('hidden');
    });

    function deleteProduct(index) {
        products.splice(index, 1);
        displayProducts();
    }



