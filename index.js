<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>JS_Calculator 1.0</title>
        <style>
            body {
                background-color: #000000; 
                color: #00FF00;
            }
        </style>
    </head>
    <body>
        <script type="text/javascript">
            var x = prompt("Enter the first number");
            var y = prompt("Enter the second number");
            var a = parseInt(x);
            var b = parseInt(y);
            var addition = a + b; 
            // without change string on integer, the sign + will be concantinate a and b
            var subtraction = a - b;
            var multiplication = a * b;
            var division = a / b;
            var modulus = a % b;
            var power = Math.pow(a,b);
            document.write("<strong>JS_Calculator 1.0</strong><br />")
            document.write("a = " + a + "<br />");
            document.write("b = " + b + "<br />");
            document.write("Addition is: " + addition + "<br />");
            document.write("Subtraction is: " + subtraction + "<br />");
            document.write("Multiplication is: " + multiplication + "<br />");
            document.write("Division is: " + division + "<br />");
            document.write("Modulus is: " + modulus + "<br />");
            document.write("Power is: " + power + "<br />");
        </script>
    </body>
</html>
