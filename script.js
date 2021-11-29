function Pizza(name, size, topping, crust, total){
    this.name=name;
    this.size=size;
    this.topping=topping;
    this.crust=crust;
    this.total=total;
  }
var prefer1, size1, topping1, crust1;
var pricing=0;
var crustPrice = 0;
var total=0;
var toppingPrice;
  
  switch(size1){
    case "large":
      pricing = 900;
    break;
    case "medium":
      pricing = 650;
    break;
    case "small":
      pricing = 400;

    break;
    default:
      console.log("error"); 
  }
  switch(crust1){
    case "glutten-free":
      crustPrice = 150;
    break;
    case "crispy":
      crustPrice = 90;

    break;
    case "stuffed":
      crustPrice = 70;
    break;
    default:
      console.log("Invalid"); 
  }
//   $("form").submit(function(){
//     event.preventDefault();
//     var pizza1 = function add(size1,crust1,topping1){
//     prefer1 = $(".prefer").find(":selected").val();
//     size1 = $(".siz").find(":selected").val();
//     crust1 =$(".crus").find(":selected").val();
//     // console.log(size1);
//     alert(
//         size1
//     )
//     topping1=[];
//     $.each($("input[name='top']:checked"), function(){            
//         topping1.push($(this).val());
//     });
    
//   toppingPrice=topping1.length * 100;
//   total=pricing + crustPrice + toppingPrice;
//   return parseInt(pricing) + parseInt(crustPrice) + toppingPrice;

// }
//   function pizzaAmount(){
//     var pizzaNumber= $(".quantify").val();
//     return pizza1() * parseInt(pizzaNumber);
//   }

//   $("#enter").click(function(){
//     return pizzaAmount();
//   });
//   $(".showPrice").text("The current price is " + pizzaAmount());


//   $("#deliver").slideDown(3000);
//   $("#check").click(function(){
//     var destination = $("input.locate").val();
//     function totalForDelivery(){
//      return pizzaAmount() + 200;
//  }
//   $("#totalDelivery").text("Total price is " + totalForDelivery());
//   $("#message").text("Thank you."+ "Your order will be delivered at " + destination)
//  });
//  var order= new Pizza(prefer1, size1, topping1, crust1, total);

//  console.log(size1);
// $("#myOrder").append('<tr><td class="">'+ order.name +'</td><td class="pSize">' + order.size + '</td><td class="pCrust">'+order.crust + '</td><td class="pTopping">'+order.topping+'</td><td class="totals">'+order.total+'</td></tr>');


//   Pizza.prototype.fullOrder= function() {
//     return this.name + " " + this.size + " " + this.topping + " " + this.crust + " " + this.total;
//   }
//   console.log(fullOrder());
  
  
// });