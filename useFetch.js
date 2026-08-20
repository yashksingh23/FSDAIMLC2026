const div = document.getElementById('container');
const button = document.getElementById('btn');

const h2 = document.createElement('h2');
h2.innerHTML = 'Data is loading...';


async function display() {
    try {
        div.innerHTML = '';
        div.appendChild(h2);
        const serverdata = await fetch(
            'https://fakestoreapi.com/products'
        );
        const jsonData = await serverdata.json();
        console.log(jsonData);
        const rows = jsonData.
        map((ele) => `
            <tr>
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>$${ele.price}</td>
                <td>${ele.description}</td>
                <td>${ele.category}</td>
                <td>
                    <img src="${ele.image}" width="80">
                </td>
                <td>${ele.rating.rate}</td>
                <td>${ele.rating.count}</td>
            </tr>
        `).join('');
        div.innerHTML = `
            <h2>All Products</h2>

            <table border="1" cellpadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rating</th>
                        <th>Rating Count</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;

    } catch (e) {
        console.log("Error is:", e);

        div.innerHTML = `
            <h2 style="color:red;">
                Error loading data
            </h2>
        `;

    } finally {
        if (div.contains(h2)) {
            div.removeChild(h2);
        }
    }
}

button.addEventListener('click', display);