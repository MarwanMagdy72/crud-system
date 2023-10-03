var pName = document.getElementById('nameInpute');
var pCategory = document.getElementById('catInpute');
var pPrice = document.getElementById('priceInpute');
var pDesc = document.getElementById('desc');
var productList=[];

var addBtn = document.getElementById('addProduct');
var updateBtn = document.getElementById('updateProduct');


if(localStorage.getItem('product') == null){
    var productList=[];

}else{
    var productList = JSON.parse(localStorage.getItem('product'))
    display();
}

var mood = 'create';

function createProduct(){

    var product = {

        productName: pName.value,
        productCategory: pCategory.value,
        productPrice: pPrice.value,
        productDescription: pDesc.value
    }
    
    if(mood == 'create'){
        productList.push(product);
    }else{
        productList[UpdateIndex]= product;
    }

    
    localStorage.setItem('product' , JSON.stringify(productList))
    Reset();
    display();
    console.log(productList);
    mood='create';

}


function Reset(){
    pName.value='';
    pCategory.value='';
    pPrice.value='';
    pDesc.value='';
}

function display(){

    var trs = ``;

    for(var i= 0 ; i<productList.length;i++){
        trs+=
            `<tr>
        <td>${i+1}</td>
        <td>${productList[i].productName}</td>
        <td>${productList[i].productCategory}</td>
        <td>${productList[i].productPrice}</td>
        <td>${productList[i].productDescription}</td>
        <td><button class="btn btn-outline-warning" onclick= updateProduct(${i}) ><i class="fa-solid fa-edit" onclick=update()></i></button></td>
        <td><button class="btn btn-outline-danger" onclick= deleteRow(${i})><i class="fa-solid fa-trash"></i></button></td>
        
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = trs;

}
function deleteRow(rowNum){
    productList.splice(rowNum,1);
    console.log(productList);
    localStorage.setItem('product' , JSON.stringify(productList))
    display();
}

var searchProduct = document.getElementById('search');

function search(){ 
    var trs = ``;
    for(var i =0 ; i<productList.length; i++){
        if(productList[i].productName.includes(searchProduct.value)){
            trs+=
            `<tr>
        <td>${i+1}</td>
        <td>${productList[i].productName}</td>
        <td>${productList[i].productCategory}</td>
        <td>${productList[i].productPrice}</td>
        <td>${productList[i].productDescription}</td>
        <td><button class="btn btn-outline-warning" onclick=updateProduct() ><i class="fa-solid fa-edit"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick= deleteRow(${i})><i class="fa-solid fa-trash"></i></button></td>
        
        </tr>`;
        }
        document.getElementById('tableBody').innerHTML = trs;
    }

}

var UpdateIndex;

function updateProduct(i){
    addBtn.classList.replace('d-block' , 'd-none');
    updateBtn.classList.replace('d-none' , 'd-block');
    pName.value = productList[i].productName;
    pCategory.value = productList[i].productCategory;
    pPrice.value = productList[i].productPrice;
    pDesc.value = productList[i].productDescription;

    mood='update';
    UpdateIndex=i;

}


