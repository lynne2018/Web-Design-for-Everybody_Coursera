/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
var shipName = document.getElementById('shippingName');
var shipZip = document.getElementById('shippingZip');
var billName = document.getElementById('billingName');
var billZip = document.getElementById('billingZip');
function billingFunction()
{
	if(document.getElementById('same').checked)
	{
		billName.value = shipName.value;
		billZip.value = shipZip.value;
		billName.setAttribute('required','true');
		billZip.setAttribute('required','true');
	}else{
		billName.removeAttribute('required');
		billZip.removeAttribute('required');
		billName.value = "";
		billZip.value = "";
	}
}
function submitForm()
{
	if (shipName.value != "" && shipZip.value != "" && billName.value != "" && billZip.value !=""){
		alert('Submit successfully.');
	}else if(shipName.value == ""){
		alert('Please fill the Shipping Name.');
	}
	else if(shipZip.value == ""){
		alert('Please fill the Shipping ZipCode.');
	}
	else if(billName.value == ""){
		alert('Please fill the Billing Name.');
	}else if(billZip.value == ""){
		alert('Please fill the Billing ZipCode.');
	}
}








