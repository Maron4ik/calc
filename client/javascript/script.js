//############# area ####################
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
//############# area end ####################

const USER_F_R = document.getElementById("user_flow_rate");
const USER_P_L = document.getElementById("userPressureLoss");



// function MyRound10(x = USER_F_R.value) {
//     let result = (Math.round(x / 10) * 10);

//     console.log(result);
// }





let rppa = { //Reduced Pressure Principle Assembly  מז''ח
    model_375_A: {
        type: "Reduced Pressure Principle Assembly",
        model: "375A",
        manufacturer: "WILKINS",
        cost: 400,
        provider: {
            name: 'בע"מ‏‏ טכני ציוד ש.א.ל.‏',
            adress: "חולון‏ 36‏ המרכבה‏",
            tel: 03 - 5566363,
        },
        approvals: {
            UL: true,
            FM: true,
        },
        size2: {
            0: 11,
            25: 13,
            50: 13,
            75: 12.5,
            100: 12,
            125: 12,
            150: 11.9,
            175: 11.4,
            200: 11.2,
            225: 11.5,
            250: 12.1,
            275: 12.7,
            300: 13.3,
            325: 14,
            350: none,
        },
        size3: {
            0: 10.8,
            25: 13.2,
            50: 13.1,
            75: 12.5,
            100: 12,
            125: 11.8,
            150: 11.1,
            175: 10.5,
            200: 10.1,
            225: 10,
            250: 10,
            275: 9.9,
            300: 9.9,
            325: 9.9,
            350: 9.8,
            375: 9.7,
            400: 9.7,
            425: 9.9,
            450: 10.2,
            475: 10.4,
            500: none,
        },
        size4: {
            0: 11,
            25: 13.5,
            50: 13,
            75: 12.5,
            100: 12,
            125: 11.5,
            150: 11.9,
            175: 11.5,
            200: 11.2,
            225: 11.5,
            250: 12.1,
            275: 12.7,
            300: 13.3,
            325: 14,
            350: 15,
            375: 15,
            400: 13,
            425: 12,
            450: 0,
            475: 0,
            500: 13,
            525: 12,
            550: 0,
            575: 0,
            600: 11,
            625: 13,
            650: 12,
            675: 0,
            700: 0,
        },
        size6: {

        },
        size8: {

        },
        size10: {

        },
    },
    model_XL_40_20: {
        type: "Reduced Pressure Principle Assembly",
        model: "XL 40-20 pn 12",

        size2: {
            0: 11,
            25: 13,
            50: 13,
            75: 12.5,
            100: 12,
            125: 12,
            150: 11.9,
            175: 11.4,
            200: 11.2,
            225: 11.5,
            250: 12.1,
            275: 12.7,
            300: 13.3,
            325: 14,
            350: none
        },
        size3: {
            0: 10.8,
            25: 13.2,
            50: 13.1,
            75: 12.5,
            100: 12,
            125: 11.8,
            150: 11.1,
            175: 10.5,
            200: 10.1,
            225: 10,
            250: 10,
            275: 9.9,
            300: 9.9,
            325: 9.9,
            350: 9.8,
            375: 9.7,
            400: 9.7,
            425: 9.9,
            450: 10.2,
            475: 10.4,
            500: none,
        },
        size4: {
            0: 11,
            25: 13.5,
            50: 13,
            75: 12.5,
            100: 12,
            125: 11.5,
            150: 11.9,
            175: 11.5,
            200: 11.2,
            225: 11.5,
            250: 12.1,
            275: 12.7,
            300: 13.3,
            325: 14,
            350: 15,
            375: 15,
            400: 13,
            425: 12,
            450: 0,
            475: 0,
            500: 13,
            525: 12,
            550: 0,
            575: 0,
            600: 11,
            625: 13,
            650: 12,
            675: 0,
            700: 0,
        },
        size6: {

        },
        size8: {

        },
        size10: {

        },
    }
}



let calcPressureLost = (x = USER_F_R.value) => {
    USER_P_L.value = rppa.model_375_A.size2[x];

    console.log(USER_F_R.value)
    console.log(USER_P_L.value)
}




//############# pressure lost ####################