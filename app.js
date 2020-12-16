var aggressiveness_slider = document.getElementById("aggressiveness");
aggressiveness_slider.value = 0;

function updateLabelValue(){
    var aggressiveness_value = aggressiveness_slider.value * 10 + 10;
    console.log("aggres: " + aggressiveness_value);

    var current_value_label = document.getElementById("currentValueLabel");

    current_value_label.innerHTML = aggressiveness_value;
};