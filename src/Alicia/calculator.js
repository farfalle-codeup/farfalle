(function () {
    "use strict";
    var operand = "left-operand";

// Functions
    var appendValue = function(event) {
        document.getElementById(operand).value += this.value;
    };
    var clearValue = function(event) {
        var val = document.getElementById(operand).value;

        if (val === "") {
            document.getElementById("operator").value = "";
            operand = "left-operand";
        }

        document.getElementById(operand).value = "";
        document.getElementById("evaluation").value = "";
    };
    var evaluate = function(left, right, operator) {
        var evaluation;
        switch (operator) {
            case "+":
                evaluation = (left + right);
                break;
            case "-":
                evaluation = (left - right);
                break;
            case "×":
                evaluation = (left * right);
                break;
            case "÷":
                evaluation = (left / right);
                break;
            default:
                evaluation = 0;
        }
        document.getElementById("left-operand").value = evaluation;
        document.getElementById("right-operand").value = "";
    };

// Setup Clear
    var clear = document.getElementById("clear");
    clear.addEventListener("click", clearValue);

// Setup Numbers
    var numbers = document.getElementsByClassName("numbers");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", appendValue);
    }

// Setup operators
    document.getElementById("add").addEventListener("click", function(event) {
        document.getElementById("operator").value = this.value;
        operand = "right-operand";
    });
    document.getElementById("subtract").addEventListener("click", function(event) {
        document.getElementById("operator").value = this.value;
        operand = "right-operand";
    });
    document.getElementById("multiply").addEventListener("click", function(event) {
        document.getElementById("operator").value = this.value;
        operand = "right-operand";
    });
    document.getElementById("divide").addEventListener("click", function(event) {
        document.getElementById("operator").value = this.value;
        operand = "right-operand";
    });


// Setup equals
    document.getElementById("equals").addEventListener("click", function(event) {
        var left = Number(document.getElementById("left-operand").value);
        var right = Number(document.getElementById("right-operand").value);
        var operator = document.getElementById("operator").value;
        evaluate(left, right, operator);
    });
})();
