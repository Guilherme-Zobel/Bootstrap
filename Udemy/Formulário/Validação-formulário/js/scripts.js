
  
// Example starter JavaScript for disabling form submissions if there are invalid fields
valiacaoForms = () => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  var array = []; // Array.prototype

  // Loop over them and prevent submission
    array.slice.call(forms)
    .forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}
valiacaoForms();



let listObj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3
};

let arr = [].slice.call(listObj);
console.log(arr); // [ 'zero', 'one', 'two' ]

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// console.log(new Food('cheese', 5).name); // cheese"v


// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(car1.make);
// // expected output: "Eagle"

