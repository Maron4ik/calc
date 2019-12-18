log = console.log;


// 
//############# Local Storage ####################

// const setStoreValue = key => function()
// { localStorage.setItem(key, this.value) };

// ceilingHeight.addEventListener("change",
//  setStoreValue("dataCeilingHeight"))


// const ceilingHeightSelect = document.getElementById("ceilingHeight");
// ceilingHeightSelect.addEventListener('change', function () {
//     localStorage.setItem('dataCeilingHeight', this.value);
// }, false);

// (localStorage.getItem('dataCeilingHeight')) ? ceilingHeight.value = localStorage.getItem("dataCeilingHeight"): '';


// const sprNumberSelect = document.getElementById("sprNumber");
// sprNumberSelect.addEventListener('change', function () {
//     localStorage.setItem('dataSprNumber', this.value);
// }, false);

// (localStorage.getItem('dataSprNumber')) ? sprNumber.value = localStorage.getItem("dataSprNumber"): '';


// const userFlowRateSelect = document.getElementById("userFlowRate");
// userFlowRateSelect.addEventListener('change', function () {
//     localStorage.setItem('dataUserFlowRate', this.value);
// }, false);

// (localStorage.getItem('dataUserFlowRate')) ? userFlowRate.value = localStorage.getItem("dataUserFlowRate"): '';

//############# Local Storage End ####################



//############# Area ####################
const DOC_PERCENT = document.getElementById("persent");
const CELLING_HEIGHT = document.getElementById("ceilingHeight");
const PERCENT = document.getElementById("persent");
const CALC_AREA = document.getElementById("calcArea");
const SPR_NUMBER = document.getElementById("sprNumber");
const SPR_N = document.getElementById("sprN");

let calcDiscountSI = (x = CELLING_HEIGHT.value) => {
    let result = (-4.8 * x) + 54.6;
    if (result < 0 || x > 6.1) {
        DOC_PERCENT.value = 0;
    } else if (result > 40) {
        DOC_PERCENT.value = 40;
    } else
        DOC_PERCENT.value = result.toFixed(2);
}
let calcFinalyArea = (x = (PERCENT.value)) => {
    let youArea = (139 * (100 - x)) / 100;
    CALC_AREA.value = youArea.toFixed(2);
}

let Area = () => {
    calcDiscountSI();
    calcFinalyArea();
}
let calcNumberSpr = (x = Math.sqrt(CALC_AREA.value)) => {
    let L = SPR_NUMBER.value;
    numberOfSpr = (1.2 * x) / L;
    SPR_N.value = Math.ceil(numberOfSpr);
}
//############# Area End ####################



// ############# GPM calc ####################

const USER_GPM_RATE = document.getElementById("UserGPM");
const USER_M3H_RATE = document.getElementById("UserM3H");
const USER_FEET_RATE = document.getElementById("UserFeet");
const USER_METER_RATE = document.getElementById("UserMeter");
const USER_METEROFHEAD_RATE = document.getElementById("UserMeterOfHead");
const USER_BAR_RATE = document.getElementById("UserBar");
const USER_PSI_RATE = document.getElementById("UserPSI");

function calcM3H() {
    USER_M3H_RATE.value = USER_GPM_RATE.value * 0.227125    
}
function calcGPM() {
    USER_GPM_RATE.value = USER_M3H_RATE.value * 4.402868
}
function calcFeet() {
    USER_FEET_RATE.value = USER_METER_RATE.value * 3.28084    
}
function calcMeter() {
    USER_METER_RATE.value = USER_FEET_RATE.value * 0.3048
}
function calcPSI() {
    USER_METEROFHEAD_RATE.value = USER_PSI_RATE.value * 0.7032496149020262
    USER_BAR_RATE.value = USER_PSI_RATE.value * 0.0689476   
}
function calcMeterOfHead() {
    USER_PSI_RATE.value = USER_METEROFHEAD_RATE.value * 1.4219702063247
    USER_BAR_RATE.value = USER_METEROFHEAD_RATE.value * 0.09804139432     
}
function calcBar() {
    USER_PSI_RATE.value = USER_BAR_RATE.value * 14.5038
    USER_METEROFHEAD_RATE.value = USER_BAR_RATE.value * 10.199773339984054
}
// ############# GPM calc end ####################

// ############# trening ####################