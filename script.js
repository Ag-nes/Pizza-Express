function Pizza(name, size, topping, crust, total){
    this.name=name;
    this.size=size;
    this.topping=topping;
    this.crust=crust;
    this.total=total;
  }

//   $(document).ready(function () {
//     $("#check-btn").click(function () {
//         alert ("Hello, thanks for ordering with us")
//     });
// });
//   Pizza.prototype.fullOrder= function() {
//          return this.name + " " + this.size + " " + this.topping + " " + this.crust + " " + this.total;
//        }
//        console.log(fullOrder());

$(document).ready(function(){
    $("form").submit(function(event){
        var name = $("input#name").val();
        var location = $("input#location").val();
        if($("input#name").val() &&$("input#location").val()){
            alert(name +",  We have received your order and our rider will deliver at your location.Expect a call from our rider,Welcome again!!!");
        }
        else{
            alert("Helloo, Kindly tell us your location");
        }

    })
})
      

    