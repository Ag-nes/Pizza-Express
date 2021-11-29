function Pizza(name, size, topping, crust, total){
    this.name=name;
    this.size=size;
    this.topping=topping;
    this.crust=crust;
    this.total=total;
  }
  $(document).ready(function () {
    $("#check-btn").click(function () {
        alert ("Hello, thanks for ordering with us")
    });
});
//   Pizza.prototype.fullOrder= function() {
//          return this.name + " " + this.size + " " + this.topping + " " + this.crust + " " + this.total;
//        }
//        console.log(fullOrder());
      

    