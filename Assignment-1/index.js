var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  var arr = [{ 
    "CarName": "Hyundai i20", 
    "CarModel": "Magna", 
    "ManufacturingYear": 2020, 
    "Price": 6.75,
    "LastServiceDate": "21-01-2021",
  },{ 
    "CarName": "Hyundai i10", 
    "CarModel": "Magna", 
    "ManufacturingYear": 2010, 
    "Price": "4.00",
    "LastServiceDate": "21-11-2019",
  },
  { 
    "CarName": "Hyundai Creta", 
    "CarModel": "E", 
    "ManufacturingYear": 2019, 
    "Price": "9.75",
    "LastServiceDate": "21-01-2021",
  },
  { 
    "CarName": "Hyundai Verna", 
    "CarModel": "S", 
    "ManufacturingYear": 2020, 
    "Price": "9.02",
    "LastServiceDate": "21-01-2020",
  },
  { 
    "CarName": "Hyundai i20", 
    "CarModel": "Magna", 
    "ManufacturingYear": 2012, 
    "Price": "5.00",
    "LastServiceDate": "21-01-2021",
  },
  { 
    "CarName": "TATA NEXON", 
    "CarModel": "Magna", 
    "ManufacturingYear": 2019, 
    "Price": "7.00",
    "LastServiceDate": "21-01-2021",
  },
  { 
    "CarName": "Tata Tiago", 
    "CarModel": "XE", 
    "ManufacturingYear": 2018, 
    "Price": "6.75",
    "LastServiceDate": "21-01-2021",
  },
  { 
    "CarName": "Tata Altroz", 
    "CarModel": "XM", 
    "ManufacturingYear": 2020, 
    "Price": "5.44",
    "LastServiceDate": "21-01-2021",
  },
  { 
    "CarName": "Audi A6", 
    "CarModel": "A6 45 TFSI", 
    "ManufacturingYear": 2019, 
    "Price": "54.44",
    "LastServiceDate": "21-01-2021",
  },
  { 
    "CarName": "Audi Q8", 
    "CarModel": "55 TFSI Quattro", 
    "ManufacturingYear": 2020, 
    "Price": "98.00",
    "LastServiceDate": "21-01-2021",
  }
  ,{ 
    "CarName": "TATA Harrier", 
    "CarModel": "XMA", 
    "ManufacturingYear": 2020, 
    "Price": "13.80",
    "LastServiceDate": "21-01-2021",
  }
  ];
  //get Total Count of the Cars
  length = arr.length;
  console.log("Total Number of Cars: "+length);

  //filter with Car Name
  var CarName = "TATA NEXON"
  var bool = false;
  for(i=0;i < arr.length;i++){
    if(arr[i]["CarName"] === CarName)
    {
        bool = true;
    }
  }
  if(bool)
  {
    console.log("Car: "+ CarName +" found");
  }
  else
  {
    console.log("Car: "+ CarName +" not found");
  }
  //filter with Car Model
  var CarModel = "Magna"
  var bool = false;
  for(i=0;i < arr.length;i++){
    if(arr[i]["CarModel"] === CarModel)
    {
        bool = true;
    }
  }
  if(bool)
  {
    console.log("Car Model Name :"+ CarModel +" found");
  }
  else
  {
    console.log("Car Model Name :"+ CarModel +" not found");
  }

   //filter with ManufacturingYear
   var CarNames = [];
   var Year = 2020;
   var bool = false;
   for(i=0;i < arr.length;i++){
     if(arr[i]["ManufacturingYear"] === Year)
     {
        CarNames.push(arr[i]["CarName"]);
     }
   }
   console.log("Cars Manufacture in " + Year + " are: " + CarNames.toString());

  //Get Current Date
  var datetime = new Date();
  console.log("Current Date and Time: "+datetime);
  //Get Last month date from Current date
  datetime.setMonth(datetime.getMonth() - 1);
  console.log('Last month date from Current date: ', datetime.toString());
  //Get Last date of next month from Current date
  var date = new Date(); 
  var lastDay = new Date(date.getFullYear(), date.getMonth() +  2,0);
  console.log("Last date of next month from Current date: " + lastDay)                
  res.end();
}).listen(8080);