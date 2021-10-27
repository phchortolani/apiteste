export const RetornaMes = (data) => {

    let mounth = "";
    switch (data) {
        case "01":
            mounth = "JAN"
            break;
        case "02":
            mounth = "FEV"
            break;
        case "03":
            mounth = "MAR"
            break;
        case "04":
            mounth = "ABR"
            break;
        case "05":
            mounth = "MAI"
            break;
        case "06":
            mounth = "JUN"
            break;
        case "07":
            mounth = "JUL"
            break;
        case "08":
            mounth = "AGO"
            break;
        case "09":
            mounth = "SET"
            break;
        case "10":
            mounth = "OUT"
            break;
        case "11":
            mounth = "NOV"
            break;
        case "12":
            mounth = "DEZ"
            break;

    }  return mounth;

}