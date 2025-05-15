export function validateCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/\D/g, '');

    if (cnpj.length !== 14) {
        return false;
    }

    const invalidCNPJs = [
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999'
    ];

    if (invalidCNPJs.includes(cnpj)) {
        return false;
    }

    let sum = 0;
    let weight = 5;

    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj.charAt(i)) * weight;
        weight = (weight === 2) ? 9 : weight - 1;
    }

    let digit = 11 - (sum % 11);
    const firstDigit = (digit >= 10) ? 0 : digit;

    if (parseInt(cnpj.charAt(12)) !== firstDigit) {
        return false;
    }

    sum = 0;
    weight = 6;

    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj.charAt(i)) * weight;
        weight = (weight === 2) ? 9 : weight - 1;
    }

    digit = 11 - (sum % 11);
    const secondDigit = (digit >= 10) ? 0 : digit;

    if (parseInt(cnpj.charAt(13)) !== secondDigit) {
        return false;
    }

    return true;
}

export function validateCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    const invalidCPFs = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    if (invalidCPFs.includes(cpf)) {
        return false;
    }

    let sum = 0;
    let weight = 10;

    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * weight;
        weight--;
    }

    let digit = 11 - (sum % 11);
    const firstDigit = (digit >= 10) ? 0 : digit;

    if (parseInt(cpf.charAt(9)) !== firstDigit) {
        return false;
    }

    sum = 0;
    weight = 11;

    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * weight;
        weight--;
    }

    digit = 11 - (sum % 11);
    const secondDigit = (digit >= 10) ? 0 : digit;

    if (parseInt(cpf.charAt(10)) !== secondDigit) {
        return false;
    }

    return true;
}

export function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function validatePassword(passowrd: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(passowrd);
}