// ####################### ANCIEN JAVASCRIPT #######################
//function Product(){}

//function getProduct(){
//    return products;
//}

//function saveProduct(){}
//function updateProduct(){}
//function deleteProduct(){}
// Product.prototype.getProduct = getProduct;
// Product.prototype.setProduct = setProduct;
// Product.prototype.deleteProduct = deleteProduct;


// ####################### NOUVEAU JAVASCRIPT #######################

class Product {
    constructor(){
        this.products = [
           {id: 1, name: "Pomme", quantity: 8, categorie: "fruit&legume", price: 20, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.science-et-vie.com%2Fquestions-reponses%2Fest-il-vrai-que-les-pommes-sont-moins-nutritives-qu-autrefois-9816&psig=AOvVaw0FCwvsjxo8B5bS2bR-i6BW&ust=1605109990294000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCGn-qq-OwCFQAAAAAdAAAAABAD"},
           {id: 2, name: "Banane", quantity: 10, categorie: "fruit&legume", price: 10, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclub.doctissimo.fr%2Fparibrest%2Fbanque_images-717390%2Fphoto%2Fbanane-28302444.html&psig=AOvVaw2X-YSGob7Q6YS-XBZghsYP&ust=1605110095507000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCVu5qr-OwCFQAAAAAdAAAAABAM"}
        ];
    }

    get getProduct(){
        return this.products;
    }
    saveProduct(){}
    updateProduct(){}
    deleteProduct(){}
}

module.exports = new Product();