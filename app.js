let firstName;
let lastName;
let customerType;
let invoiceAmt;
let discountPercentage;
let discountAmt;
let total;

try{
    firstName=prompt('Enter your first name');
    if (firstName==''){
        throw new Error('Enter first name.');
    }

    lastName=prompt('Enter your last name');
    if (firstName==''){
        throw new Error('Enter last name.');
    }

    customerType=prompt('Enter the customer type');
    if(customerType.length!=1){
        throw new Error('Customer type must have one character');
    }

    invoiceAmt=prompt('Enter the invoice amount');
    if ( isNaN(invoiceAmt) || invoiceAmt <=0){
        throw new Error('Invoice amount must be a number greater than zero');
    }

    discountPercentage=0;
    if (customerType=='R' && invoiceAmt>=250){
        discountPercentage=0.2;
    } else  if (customerType=='R' && invoiceAmt>=100){
        discountPercentage=0.1;
    } else  if (customerType=='C'&& invoiceAmt>=250){
        discountPercentage=0.3;
    } else  if (customerType=='C'){
        discountPercentage=0.2;
    }

    discountAmt=invoiceAmt*discountPercentage;
    total=invoiceAmt-discountAmt;
} catch (error){
    alert(error.message);
    window.location.reload();
}

