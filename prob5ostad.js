const car = [

  {

    name: "BMW",

    variation: {

      color: "black",

      wheel: "4",

      size: "4 seater",

    },

  },

  {
    name: "BMW",

    variation: {

      color: "black",

      wheel: "4",

      size: "4 seater",
      height: "2 meter",
      mileage:"15 KM/L",
  },
},

  {

    name: "Honda",

    variation: {

      color: "black",

      wheel: "4",

      size: "4 seater",

    },

  },

  {

    name: "Hondai",

    variation: {

      color: "white",

      wheel: "4",

      size: "7 seater",
      height: "2.7 meter",

    },

  },

];

//prob 1= bmw color, wheel print
//prob 2=

function jsonParse(data){
 
    for(key in data){
        if(data[key].name== "BMW") {
                    
     console.log(data[key].variation);

        }
        else{
          console.log(data[key].variation);
        }
        
    } 

}
jsonParse(car);
