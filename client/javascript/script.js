log = console.log;
log(accsList);

//############# Local Storage ####################

// const setStoreValue = key => function()
// { localStorage.setItem(key, this.value) };

// ceilingHeight.addEventListener("change",
//  setStoreValue("dataCeilingHeight"))


const ceilingHeightSelect = document.getElementById("ceilingHeight");
ceilingHeightSelect.addEventListener('change', function () {
    localStorage.setItem('dataCeilingHeight', this.value);
}, false);

(localStorage.getItem('dataCeilingHeight')) ? ceilingHeight.value = localStorage.getItem("dataCeilingHeight"): '';


const sprNumberSelect = document.getElementById("sprNumber");
sprNumberSelect.addEventListener('change', function () {
    localStorage.setItem('dataSprNumber', this.value);
}, false);

(localStorage.getItem('dataSprNumber')) ? sprNumber.value = localStorage.getItem("dataSprNumber"): '';


const userFlowRateSelect = document.getElementById("userFlowRate");
userFlowRateSelect.addEventListener('change', function () {
    localStorage.setItem('dataUserFlowRate', this.value);
}, false);

(localStorage.getItem('dataUserFlowRate')) ? userFlowRate.value = localStorage.getItem("dataUserFlowRate"): '';

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

//############# pressure loss ####################

const USER_FLOW_RATE = document.getElementById("userFlowRate");
const USER_ACCESSORY = document.getElementById("accessory");
const USER_DIAMETER = document.getElementById("diameter");
const PRESSURE_LOSS = document.getElementById("pressureLoss");
const USER_PESSURE_LOSS = document.getElementById("userPressureLossTotal");
const MODEL = document.getElementById("row1Model");
let multiple = 25;
let flowRateMultiple;




function roundToMultiple(x = (USER_FLOW_RATE.value)) {
    flowRateMultiple = Math.round(x / multiple) * multiple;
}

let getAccsValue1 = () => {
    PRESSURE_LOSS.value =
        (_.get(accsList, [`${USER_ACCESSORY.value}`, 'model', 'model_375_A', `size${USER_DIAMETER.value}`, `${flowRateMultiple}`]))
}
let calcPressureLoss = () => {
    roundToMultiple();
    getAccsValue1();
}


// ############# pressure loss end ####################


// ############# trening ####################

var element = document.getElementById('some-block');
var elements = document.getElementsByClassName('all');

function changeSingle() {
    element.innerHTML = 'Here is some content';
}

function changeCollection() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'We all changed';        
    }
}
