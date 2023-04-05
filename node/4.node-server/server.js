const express = require("express");

const bodyparser = require("body-parser");
const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port, () => {
  console.log(` app listening on ${port} port`)
})









/*

            function sum(num1, num2) {
                let sum="";
                let carry = 0;

                for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
                    if (i >= 0) {
                        carry =carry+ Number(num1[i]);
                    }
                    if (j >= 0) {
                        carry = carry +Number(num2[j]);
                    }
                    let digit = String(carry % 10);
                    sum+=digit;
                    carry = parseInt(carry / 10);
                    
                }
                if (carry > 0) {
                    sum+=String(carry);
                } 
                let revnum="";
                for(let i=sum.length-1;i>=0;i--){
                    revnum+=sum[i];
                }
                sum=revnum;

                return sum;
            }

            function multiply(p1, p2) {
                let back0 = 0;
                let ans = "";
                for (let i = p2.length - 1; i >= 0; i--) {
                    let digit = Number(p2[i]);

                    let num = "";

                    let copyback0 = back0;
                    while (copyback0--) {
                        num+="0";
                    }
                    back0++;

                    let carry = 0;
                    for (let j = p1.length - 1; j >= 0; j--) {
                        let mul = (digit * Number(p1[j])) + carry;
                        num+=String(mul % 10 );
                        carry = parseInt(mul / 10);
                    }

                    if (carry) {
                        num+=(String(carry));
                    }

                    let revnum="";
                    for(let i=num.length-1;i>=0;i--){
                        revnum+=num[i];
                    }
                    num=revnum;

                    ans = sum(ans, num);

                }
                return ans;
            }

            function fact(n) {
                let fact = "1";
                for (let i = 1; i <= n; i++) {
                    let numstr = String(i);
                    fact = multiply(numstr, fact);
                }
                return fact;
            }
*/
