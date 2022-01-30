const namep = document.querySelector('#namep');
const nppp = document.querySelector('#nppp');
const imgg = document.querySelector('#imgg');
const immmm = document.querySelector('#immmm');

namep.addEventListener('keyup', () => {

    const agename = namep.value;

    const agepattern = /^[a-zA-Z][^0-9\.!@#$%&]*$/;

    if (namep.value == '') {
        nppp.innerHTML = `<p class="alert-danger mt-1">*What's product name?*</p>`;


    } else if (agepattern.test(agename) == false) {
        nppp.innerHTML = `<p class="alert-danger mt-1">
        *Invalid product name are not allowed*</p>`

    } else if (agepattern.test(agename) == true) {
        nppp.innerHTML = ` `;

    } else {

    };

});

imgg.addEventListener('keyup', () => {

    if (imgg.value == '') {
        immmm.innerHTML = `<p class="alert-danger mt-1">*plz type your LinkedIN URL*</p>`;
    } else {

    };

});


const add_product = document.getElementById('add_product');
const sess = document.getElementById('sess');
const plist = document.getElementById('plist');
const add_box = document.querySelector('.product-add-box');

const product = document.getElementById('product');


add_product.addEventListener('click', function () {
    add_box.style.display = 'block';
});

sess.addEventListener('click', function () {
    add_box.style.display = 'none';
});


product.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let price = this.querySelector('input[name="price"]').value;
    let sale = this.querySelector('input[name="sale_price"]').value;
    let photo = this.querySelector('input[name="photo"]').value;

    let product_arr;

    if (dataGet('products')) {
        product_arr = dataGet('products');
    } else {
        product_arr = [];
    }


    product_arr.push({
        name: name,
        price: price,
        sale: sale,
        photo: photo
    });


    dataSend('products', product_arr);

    allProducts();



});



allProducts();

function allProducts() {

    let all_products = dataGet('products');

    let data = '';

    all_products.map(pdata => {
        data += `

        <div class="col-md-3 my-3">
            <div class="card">
                <img class="pimg" src="${pdata.photo}" alt="">
                <div class="card-body mt-2">
                    <p><b>${pdata.name}</b></p>
                    <p> <span class="price">$${pdata.price}</span>  <span class="sale-price">$${pdata.sale}</span> </p>
                    <button style="height:25px;   width:25px;" class="Remove"> <i class="far fa-trash-alt"></i></button>
                    <div class="add__toCart">
                    <i class="fas fa-shopping-cart"></i> Add
                </div>
                </div>
            </div>
        </div>
        
        
        `;

    });

    plist.innerHTML = data;


}