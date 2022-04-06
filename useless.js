const address = document.getElementById("address")
const buttonaddress = document.getElementById("buttonaddress")
buttonaddress.onclick = function () {

    address.select();

    document.execCommand(copyToClipboard)
}
