'10' + 1    //(문자열 타입) '101'
2 * '10'    //(숫자 타입)   20
!0          //(불리언 타입) true

//암묵적으로 문자열 타입으로 변환
0 + ''      //  "0"
-0 + ''     //  "0"
1 + ''      //  "1"
-1 + ''     //  "-1"
NaN + ''    //  "NaN"
Infinity + ''   //  "Infinity"
-Infinity + ''   //  "-Infinity"

//산술연산자에 의한 타입변환
1 - '1'     //(숫자) 0
1 * '10'    //(숫자) 10
1 / 'one'   // NaN

//암묵적으로 숫자 타입으로 변환
+''          // 0
+'0'         // 0
+'1'         // 1
+'string'    // NaN
+true        // 1
+false       // 0
+null        // 0
+undefined   // NaN
+Symbol()    // TypeError
+{}          // NaN
+[]          // 0
+[10, 20]    // Nan
+(function(){})     //NaN

//불리언 타입으로 변환

// false
if('')          
if(0)           
if(null)        
if(undefined)   
if(NaN)        

//아래는 모두 true
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
