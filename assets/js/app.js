// Below code about calculating Area of Circle & displaying in console.
function circle(radius)
{
    this.radius = radius; 
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    }; 
}
var c = new circle(3);
console.log("%c Area of Circle is " + c.area().toFixed(2) + " ", 'background: #126de5; color: #ffffff;');