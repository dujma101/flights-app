var b = { "time": 1481263170, "states": [["318d28", "", "Italy", null, 1481263143, null, null, null, false, 8.81, 83.29, -0.33, null], ["aa56db", "UAL1910 ", "United States", 1481263170, 1481263169, -105.6362, 39.7542, 9197.34, false, 205.37, 263.96, 7.48, null], ["a5867f", "", "United States", 1481263157, null, -87.1052, 38.2467, 5303.52, false, null, null, null, null], ["7c6b2f", "", "Australia", null, 1481263169, null, null, null, false, 229.18, 177.3, 0.33, null], ["aa9321", "UAL5 ", "United States", 1481263168, 1481263169, -65.4033, 43.9689, 10660.38, false, 300.54, 64.66, 0, null], ["a47557", "AAL198 ", "United States", 1481263167, 1481263169, 1.5714, 46.3908, 11887.2, false, 241.81, 105.93, 0, null], ["a46e5f", "FDX1829 ", "United States", 1481263166, 1481263169, -121.8572, 37.548, 1569.72, false, 100.91, 259.72, -1.95, null], ["4841c5", "", "Kingdom of the Netherlands", 1481263169, 1481263169, 4.8791, 52.5456, 746.76, false, 115.28, 268.47, -5.2, null], ["a64901", "N504CC ", "United States", 1481263168, 1481263170, -94.7343, 39.639, 6705.6, false, 171.43, 332.28, 0, null], ["ad6bdc", "", "United States", null, 1481263146, null, null, null, false, 209.31, 35.8, 9.1, null], ["7c6b31", "JST106 ", "Australia", 1481263169, 1481263170, 115.6696, -31.4643, 5913.12, false, 207.17, 3.42, 7.8, null], ["a11136", "", "United States", null, 1481263144, null, null, null, false, 277.36, 95.11, 1.3, null], ["c00bf1", "3154 ", "Canada", 1481263154, 1481263163, -122.1465, 49.803, 5791.2, false, 177.15, 45.12, 0.33, null], ["adddd5", "AAL2234 ", "United States", 1481263170, 1481263170, -102.2555, 40.319, 11277.6, false, 261.97, 88.31, -0.33, null], ["318d09", "", "Italy", null, 1481263156, null, null, null, false, 11.32, 264, null, null], ["4841a9", "TRA55Q ", "Kingdom of the Netherlands", 1481263169, 1481263170, 3.5656, 50.3735, 11285.22, false, 219.1, 218.13, 1.95, null], ["4b8467", "SVA941 ", "Turkey", 1481263167, 1481263167, 22.742, 42.2769, 10363.2, false, 242.56, 328.27, 0, null]] };
var c = 0;
b.states.forEach(function (params, index) {
   
    if (params[8] == false) {
      c =c+ 1;
           
    console.log(params[8],index);

    }
  
})
   console.log(c);

console.log(b.states[3][8]);
