var nameInput = document.getElementById('nameProductInput');
var priceInput = document.getElementById('priceProductInput');
var catInput = document .getElementById('catogeryProductInput');
var descInput = document.getElementById('descriptionProductInput');

var proudctContainer;

if(localStorage.getItem('product')!=null)
{
    proudctContainer =JSON.parse(localStorage.getItem('product'));

    displayProudct(proudctContainer);
}
else
{
     proudctContainer=[];
}

function addProudct(){

    if(valditionProudct()==true)
    {

        var proudct = {
            name:nameInput.value,
            price:priceInput.value,
            cat:catInput.value,
            desc:descInput.value
        }
        proudctContainer.push(proudct);
    
    
        localStorage.setItem("product", JSON.stringify(proudctContainer));
    
        
        clearInput();
    
        displayProudct(proudctContainer);

    }
    else if(valditionNumper()==true){

        var proudct = {
            name:nameInput.value,
            price:priceInput.value,
            cat:catInput.value,
            desc:descInput.value
        }
        proudctContainer.push(proudct);
    
    
        localStorage.setItem("product", JSON.stringify(proudctContainer));
    
        
        clearInput();
    
        displayProudct(proudctContainer);

    }
    else if(valditionCat()==true){

        var proudct = {
            name:nameInput.value,
            price:priceInput.value,
            cat:catInput.value,
            desc:descInput.value
        }
        proudctContainer.push(proudct);
    
    
        localStorage.setItem("product", JSON.stringify(proudctContainer));
    
        
        clearInput();
    
        displayProudct(proudctContainer);

    }
    else
    {
        alert('Sorry, there are no products')
    }


    

}


//clear
function clearInput()
{
    nameInput.value ='';
    priceInput.value ='';
    catInput.value ='';
    descInput.value ='';
}

//display

function displayProudct(productList)
{
    var cartona =``
    for(var i =0; i<productList.length;i++)
    {

            cartona +=`
            
            <tr class="text-white">
                <td>${i+1}</td>
                <td>${productList[i].name}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].cat}</td>
                <td>${productList[i].desc}</td>
                <td><button onclick="upDate(${i})" class="btn btn-outline-warning ">Update<i class="fa-solid fa-wrench mx-1"></i> </button></td>
                <td> <button onclick="deleteProudct(${i})" class="btn btn-outline-danger ">Delete <i class="fa-solid fa-trash-can-arrow-up"></i></button> </td>
            </tr>
            
            `
    }

    document.getElementById('tBody').innerHTML=cartona;

}

//search

function searchProduct(searchTerm)
{

    var searchResult = [];

    for(var i = 0 ; i<proudctContainer.length; i++)
    {
        if(proudctContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
        {
            searchResult.push(proudctContainer[i])
        }
    }
    displayProudct(searchResult)
}

//delete

function deleteProudct(indexDelete)
{
    proudctContainer.splice(indexDelete,1);

    localStorage.setItem("product", JSON.stringify(proudctContainer));

    displayProudct(proudctContainer);


}


function upDate(pIndex)
{
    nameInput.value =proudctContainer[pIndex].name;
    priceInput.value =proudctContainer[pIndex].price;
    catInput.value =proudctContainer[pIndex].cat;
    descInput.value =proudctContainer[pIndex].desc;

    document.getElementById('container').innerHTML=`

    <button onclick="addUbdate(${pIndex})" class="btn btn-outline-warning text-white">Update Product <i class="fa-solid fa-angles-right"></i></button>

    
    `
}

function addUbdate(pIndex)
{
    proudctContainer[pIndex].name=nameInput.value;
    proudctContainer[pIndex].price=priceInput.value;
    proudctContainer[pIndex].cat=catInput.value;
    proudctContainer[pIndex].desc=descInput.value;

    displayProudct(proudctContainer);

    localStorage.setItem("product", JSON.stringify(proudctContainer));

    clearInput();

    document.getElementById('container').innerHTML=`
    
    <button onclick="addProudct()" class="btn btn-outline-info text-white">Add Product <i class="fa-solid fa-circle-plus mx-1"></i></button>
    `
}

//valdition

function valditionProudct()
{
   var regex = /^[a-zA-Z]{3,15}$/

    if(regex.test(nameInput.value )==true)
    {
        nameInput.classList.replace('is-invalid' , 'is-valid');

        return true;
    }
    else
    {
        nameInput.classList.add('is-invalid');
        return false;
    }
}

function valditionCat(){

    var regex = /^[a-zA-Z]{3,15}$/
    if(regex.test(catInput.value)==true)
    {
        catInput.classList.replace('is-invalid' , 'is-valid');

        return true;
    }
    else
    {
        catInput.classList.add('is-invalid');

        return false;
    }
}



function valditionNumper()
{
    var regex =/^[0-9]{2,5}$/

    if(regex.test(priceInput.value)==true)
    {
        priceInput.classList.replace('is-invalid' , 'is-valid');
        return true;
    }
    else
    {
        priceInput.classList.add('is-invalid');
        return false;
    }
}

function typetext()
{
    descInput.classList.add('is-valid');
}