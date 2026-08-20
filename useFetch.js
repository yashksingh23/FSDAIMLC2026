console.log("JS FILE CONNECTED");

const div = document.getElementById("container");
const button = document.getElementById("btn");

async function display() {

    console.log("BUTTON CLICKED");

    try {

        div.innerHTML = "<h2 class='loading'>Loading...</h2>";

        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        const jsonData = await response.json();

        console.log(jsonData);

        const rows = jsonData.map((ele) => `
            <tr>
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>$${ele.price}</td>
                <td>${ele.description}</td>
                <td>${ele.category}</td>

                <td>
                    <img 
                        src="${ele.image}" 
                        width="70"
                        height="70"
                    >
                </td>

                <td>⭐ ${ele.rating.rate}</td>

                <td>${ele.rating.count}</td>

                <td>
                    <button
                        class="cart-btn"
                        onclick="addToCart(${ele.id})">
                        Add to Cart
                    </button>
                </td>
            </tr>
        `).join("");

        div.innerHTML = `
            <h2>All Products</h2>

            <div class="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Rating</th>
                            <th>Count</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${rows}
                    </tbody>

                </table>

            </div>
        `;

    } catch (error) {

        console.error(error);

        div.innerHTML = `
            <div class="error">
                ❌ Error loading products
            </div>
        `;
    }
}


function addToCart(id) {

    alert("Product " + id + " added to cart!");

}


button.addEventListener("click", display);