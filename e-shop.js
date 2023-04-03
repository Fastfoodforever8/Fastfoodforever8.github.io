// Nákupní košík cena

x = undefined
cart_price = document.getElementById("cart_price")
finish_price = document.getElementById("finish_price")
new_price_t = 0;
product_number = 1
var cart_product = ""

/*              TISK stránky na ležato místo na stojato                 */

var css = '@page { size: landscape; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
style.media = 'print';

if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

/////////////////////////////////////////////////////////////////////////////////////////
/*                     aktivace tlačítka klávesou enter po napsání hodnoty do input                                             */ 
function clickPress(event, button_id) {
    if (event.key == "Enter") {
        document.getElementById(button_id).click();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

function reply_click(clicked_id, name){

  /*  person_count = document.getElementsByName(name)[0].value;*/
    person_count = Number(document.getElementsByName(name)[0].value);
    console.log(person_count)
        if(/*person_count != 1/*1 == 1*//*person_count = person_count*/person_count > 0){
            person_count = document.getElementsByName(name)[0].value;
            price = clicked_id * person_count
            new_price_t = price + new_price_t
            cart_price.textContent = new_price_t + " Kč"
            finish_price.textContent = "Celkem: " + new_price_t + " Kč"

            document.getElementById(name).className = 'classname';
            document.getElementById(name).textContent = "Přidáno do košíku";
            setTimeout(() => {document.getElementById(name).textContent = "Objednat";}, 3000);
            setTimeout(() => {document.getElementById(name).className = 'button';}, 3000);

    var element = document.createElement("div");
    element.id = "Product" /*+ product_number;*/
    product_number = product_number + 1
    element.appendChild(document.createTextNode(name /*+"............."+ String(person_count) + " kusů" +"......................." + price/*new_person_price ------------- možnost psát cenu za 1 kus nebo za všechn kusy*/ /*+ " Kč"*/));
    document.getElementById('append_product').appendChild(element);


    var count = document.createElement("div");
    count.id = "Count" /*+ product_number;*/
    count.appendChild(document.createTextNode(person_count));
    document.getElementById('append_product').appendChild(count);

    var cena = document.createElement("div");
    cena.id = "Price" /*+ product_number;*/
    cena.appendChild(document.createTextNode(price + " Kč"));
    document.getElementById('append_product').appendChild(cena);


    person_count = document.getElementsByName(name)[0].value = "";
/*          price = Number(clicked_id) + Number(price)
            console.log("price is: " + price + " Kč")
            cart_price.textContent = price + " Kč"
            finish_price.textContent = "Celkem.................................... " + price + " Kč"
            y = clicked_id*/
        }

        else if(person_count == 0){
            alert("Prosím zadejte množství produktu")
        }

        else{
            console.log("špatně")
            alert("Špatně zadané množství")
            /*
            price = Number(clicked_id) + new_price_t;
            cart_price.textContent = price + " Kč"
            finish_price.textContent = "Celkem.................................... " + price + " Kč"
            new_price_t = price
            */ 



           /* ----------------------person_count = document.getElementById("person_count").value; 
            console.log("Price is: "+ clicked_id * person_count + " Kč")
            x = 1
            price = Number(clicked_id * person_count)
            cart_price.textContent = price + " Kč"
            y = price;*/
        }
    
/*                   násobení množství ceny podle zadaného množství*////
    /*     
        if(person_count != 0){
        new_person_price = clicked_id * person_count;
        console.log("Vaše množství bylo stanoveno na " + new_person_price + " kusů")
        }

        else{
            person_count = 1;
            new_person_price = clicked_id * person_count;
        }
      */
}
// generace jména do konzole při kliknutí 
/*
product_number = 1
var cart_product = ""

/*function test(sign_name){

   // cart_product = cart_product + sign_name +"\n"
    //console.log(cart_product)

/*     animace tlačítka po nákupu            !!!!!!!!!!!!!§§§       dodělat

    document.getElementById(name).className = 'classname';
//////////////////////////////////////////////////////////////////////////////////////////////////////*/


//přidání produktu do košíku                      
/*--------------------------------------------------------------------------------------------------------
    var element = document.createElement("div");
    element.id = "Product_" + product_number;
    product_number = product_number + 1
    element.appendChild(document.createTextNode(sign_name +"............."+ person_count + " kusů" +"......................." + new_person_price + " Kč"));
    document.getElementById('append_product').appendChild(element);
}*/
////////////////////////////////////////////////////////////

// přepínání filtru podle kliknutí na filtr 
before = 1
function filter_set(id){
    console.log(id)
    var product = document.getElementById(id).id;
    console.log(product)

    if(before == product){
        console.log("stay")
        before = product
        document.getElementById(id).style.display = "flex";
    }

    else if(window.matchMedia("(max-width: 700px)").matches){
        console.log("change")
        document.getElementById(before).style.display = "none";
        before = product
        document.getElementById(product).style.display = "flex";
        document.getElementById("filter_options").style.display = "none";
        filter_default = 0;
    }

    else{
        console.log("change")
        document.getElementById(before).style.display = "none";
        before = product
        document.getElementById(product).style.display = "flex";
    }
}
choice = "filter_1"
function color_list(filter_id){
1
    if(filter_id == "filter_1"){
        document.getElementById(choice).style.background = "transparent";
        choice = filter_id
        document.getElementById(choice).style.background = "#00009bb3";
    }

    else{
        document.getElementById(choice).style.background = "transparent";
        choice = filter_id
        document.getElementById(choice).style.background = "#00009bb3";
    }
}


/////////////////////////////////////////////////////////////

function open_cart(main){
    var x = document.getElementById("close_main");
    x.style.display = "none";
    document.getElementById("cart").style.display = "flex";
    /*
    if (x.style.display === "none") {
      x.style.display = "flex";
      document.getElementById("cart").style.display = "none";
    } else {
      x.style.display = "none";
      document.getElementById("cart").style.display = "flex";
    }*/
}

function close_cart(main){
    var x = document.getElementById("close_main");
    x.style.display = "flex";
    document.getElementById("cart").style.display = "none";
    /*
    if (x.style.display === "none") {
      x.style.display = "none";
      document.getElementById("cart").style.display = "flex";
    } else {
      x.style.display = "flex";
      document.getElementById("cart").style.display = "none";
    }*/
}


/*let mql = window.matchMedia('(max-width: 600px)'); */     // Zjistí velikost okna a vyhodnotí TRUE / FALSE



filter_default = 0;
function filter_show(){
    if(filter_default == 0 && window.matchMedia("(max-width: 700px)").matches){
        document.getElementById("filter_options").style.display = "block";
        filter_default = 1;
    }

    else if(window.matchMedia("(max-width: 700px)").matches){
        document.getElementById("filter_options").style.display = "none";
        filter_default = 0;
    
    }
}



