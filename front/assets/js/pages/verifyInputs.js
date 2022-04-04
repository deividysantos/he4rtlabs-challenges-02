export function nameOk(name){
    return !(name.trim().length < 3 || name.trim().length > 250);
}

export function emailOk(email){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return email.match(validRegex);
}

export function passwordOk(password){
    return !(password.trim().length < 8 || name.trim().length > 250);
}

function focusOutVerify(input, isRight){

    if(isRight(input.value)){
        input.style.borderBottomColor = '';
        return true;
    }

    input.style.borderBottomColor = '#FF3F01';
    return false;
}

export function inputsIsOkInRealTime(credentials, callback) {

    credentials.forEach(function (credential, index){
        credential.addEventListener('input', function () {
            focusOutVerify(credential, callback[index]);
        });
    });

}

export function inputsIsOkNow(credentials){

    let inputs = [
        focusOutVerify(credentials[0], nameOk),
        focusOutVerify (credentials[1], emailOk),
        focusOutVerify (credentials[2], passwordOk),
    ];

    return !inputs.includes(false);
}