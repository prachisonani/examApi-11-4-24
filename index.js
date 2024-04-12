let product = []


const uimaker = (data) => {
    document.getElementById("box").innerHTML = "";
    data.map((ele, i) => {

        let title = document.createElement("h5");
        title.innerHTML = ele.title;

        let price = document.createElement("p");
        price.innerHTML = ele.price;

        let description = document.createElement("p");
        description.innerHTML = ele.description;


        let category = document.createElement("h4");
        category.innerHTML = ele.category;

        let image = document.createElement("img");
        image.src = ele.image;



        let rating = document.createElement("p");
        rating.innerHTML = ele.rating.rate;

        let count = document.createElement("p");
        count.innerHTML = ele.rating.count;


        // p.setAttribute("class", "info");

        let div = document.createElement("div");
        div.append(category, image,title, price, description, rating, count );

        div.setAttribute("class", "data");

        document.getElementById("box").append(div);
    });
};




const get = async() => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()

    uimaker(product = data)

}
get()


const hedlesorting = (val) => {
    if (val == "htl") {
        product.sort((a, b) => a.price - b.price)
        uimaker(product);

    }

}
const hedlesortingg = (val) => {
        if (val == "lth") {
            product.sort((a, b) => b.price - a.price)

            uimaker(product);
        }

    }
    //filter
const handalfilter = (value) => {
        let temp = product.filter((ele) => ele.category == value)
        uimaker(temp);
    }
    //search
const search = (value) => {
    let temp = product.filter((ele) => ele.title == value)
    uimaker(temp)
}

const handalserch = (e) => {
    e.preventDefault()
    let val = document.getElementById("val").value
    console.log(val)
    search(val)
}



document.querySelector(".htl").addEventListener("click", () => hedlesorting("htl"))
document.querySelector(".lth").addEventListener("click", () => hedlesortingg("lth"))

document.getElementById("search").addEventListener("submit", handalserch)

document.querySelector(".electronics").addEventListener("click", () => handalfilter("electronics"))
document.querySelector(".jewelery").addEventListener("click", () => handalfilter("jewelery"))
document.querySelector(".men").addEventListener("click", () => handalfilter("men's clothing"))
document.querySelector(".women").addEventListener("click", () => handalfilter("women's clothing"))