
console.log(data1);
var listk = [];

for( let o = 0 ; o < data1.length; o++) { 

 //if(data1[o].key == "20:04:2021" ){
    //|| data1[o].key == "24:04:2021"
    listk.push(data1[o].createdTime); 
  //}
}
// console.log(listk[0].sort(function (a, b) { return (a.createdTime -b.createdTime)}));
 

 var list = [

//  ['T','T','T']  
//  ,
//  ['T','T','G']  

//  ['T','G','T','G','T','G','T','G','T','G','T','G' ] ,
 
//  ['T','G','T','G','T','G','T','G'] 
//  ,
 //['G','G','G','T','T','T','G','G','G','T','T','T' ] 
 // ,
 
['G','T','G','G','G','G','T','T','T','T','G','T' ] 
//  ['T','G','G','G','T','T','T','G','G','G','T','T' ]
// ,
//  ['T','T','T','G','G','G','T','T','T','G','G','G' ]

//  ['G','T','T','G','G','T','T','G','G','T','T'  ]  
//  ['G','G','G','G','G','T','G','G','T'] 
 ]

 var listf = []; 
 var ff = [];
 var limitNum= 1440/1;
 for( let f = 0 ; f < 1440; f=f+limitNum) { 
  ff=[] ;
 ff.push(f);
 ff.push(f+limitNum);
listf.push(ff); 

 }
 var tg="";
 var price =[1,2,4,8];
var gttg =0;
 var sumlailo = 0; 
 var sum = 0;
for( let g= 0  ; g < listf.length ; g ++ ) {
for( let j = 0  ; j < listk.length ; j ++ ) {
  var countT = 0;
  var countG = 0;
for( let z = 0  ; z < list.length ; z ++ ) {
  var count = 0;
  
  var data = listk[j].sort(function (a, b) { return  b.createdTime - a.createdTime  ; }).map( z => z.type);
 
  for( let i = listf[g][0] ; i < listf[g][1] ; i++) {
	var temp = data.slice(i,list[z].length+i) ; 
  // var temp = data.slice(i,1+i) ; 
  
//	console.log(temp);
	//console.log(list[z].join(''));
// switch (gttg) {
//     case 0:
//     tg ="G";
//     break;
//     case 1:
//     tg ="T";
//     break;
//     case 2:
//     tg ="T";
//     break;
//     case 3:
//     tg ="G";
    
//     break; 
// }

// switch (gttg) {
//   case 0:
//   tg ="T";
//   break;
//   case 1:
//   tg ="G";
//   break;
//   case 2:
//   tg ="G";
//   break;
//   case 3:
//   tg ="T";
  
//   break; 
// }

// if(temp.join('') == tg){
//   sumlailo += price[gttg]*0.95;
//   }else{
//    sumlailo += price[gttg]*-1;
//   }
//   gttg++;
//   if(gttg==4){
//     gttg =0;
//   }

  // if(temp.join('')=="T"){
  //   countT++;
  // }
  // if(temp.join('')=="G"){
  //   countG++;
  // }

	if(temp.join('')==list[z].join('')){
		count++;
  
	} 
//   console.log( "lan "+ g +" time "+ listk[j][0].key + "danh"+ sumlailo) ;
//   if(sumlailo>=25){ 
//      console.log( "lan "+ g +" time "+ listk[j][0].key + ">5") ;
//      sum+=sumlailo;
//     sumlailo =0;
//     break;
//   }

//   if(sumlailo<=-5){ 
//     console.log( "lan "+ g +" time "+ listk[j][0].key + "<-5") ;
//     sum+=sumlailo;
//    sumlailo =0;
//    break;
//  }

  }
  console.log( "lan "+ g +" time "+ listk[j][0].key +" lenh" +  list[z].join('')+"----"+count) ;
 
 } 
//console.log( " time "+ listk[j][0].key +"===="+countG +"-"+ countT + "===" (countG-countT)) ;
//sumlailo+=(countG-countT);

}


//console.log( "tong lai lo "+sum);

}