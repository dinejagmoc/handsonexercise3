const str1Txt = document.getElementById("str1");
const str2Txt = document.getElementById("str2");
const str3Txt = document.getElementById("str3");
const concatTxt = document.getElementById("concatTxt");

function GenerateFullname() {
    if (str1Txt.value == "" || str2Txt.value == "" || str3Txt.value == "") {
        alert("You should fill out all the entries");
    } else {
        concatTxt.innerHTML = str1Txt.value + " " + str2Txt.value + " " + str3Txt.value;
    }
}

function clearEntries() {
    str1Txt.value = "";
    str2Txt.value = "";
    str3Txt.value = "";
    concatTxt.innerHTML = "";
}