export const maskZipCode = (value: string) => {
    if (!value) return ""

    return value?.replace(/\D/g, "")
        .replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1.$2-$3");;
};

type CountryInfo = {
    code: string;   
    format: (value: string) => string; 
};

const countryFormats: CountryInfo[] = [
    {
        code: '55',
        format: (value) => {
            value = value.substring(2);
            let formattedValue = `+55 `;
            if (value.length > 2) {
                formattedValue += `(${value.substring(0, 2)}) `;
                value = value.substring(2);
            }
            if (value.length > 5) {
                formattedValue += `${value.substring(0, 5)}-${value.substring(5, 9)}`;
            } else if (value.length > 0) {
                formattedValue += `${value.substring(0, 5)}`;
            }
            return formattedValue;
        }
    },
    {
        code: '1',
        format: (value) => {
            value = value.substring(1);
            let formattedValue = `+1 `;
            if (value.length > 3) {
                formattedValue += `(${value.substring(0, 3)}) `;
                value = value.substring(3);
            }
            if (value.length > 3) {
                formattedValue += `${value.substring(0, 3)}-${value.substring(3, 7)}`;
            } else if (value.length > 0) {
                formattedValue += `${value.substring(0, 3)}${value.substring(3)}`;
            }
            return formattedValue;
        }
    },
    {
        code: '56',
        format: (value) => {
            value = value.substring(2);
            let formattedValue = `+56 `;
            if (value.length > 1) {
                formattedValue += `(${value.substring(0, 2)}) `;
                value = value.substring(2);
            }
            if (value.length > 4) {
                formattedValue += `${value.substring(0, 4)}-${value.substring(4, 8)}`;
            } else if (value.length > 0) {
                formattedValue += `${value.substring(0, 4)}`;
            }
            return formattedValue;
        }
    }
];

export const maskPhone = (value: string) => {
    if (!value) return "";

    value = value.replace(/\D/g, ""); 

    for (const country of countryFormats) {
        if (value.startsWith(country.code)) {
            return country.format(value);
        }
    }

    return value;
};



export const maskCnpj = (value: string) => {
    value = value?.replace(/\D/g, "");
    return value?.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        "$1.$2.$3/$4-$5"
    );
};

export const maskCPF = (value: string) => {
    value = value?.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    return value?.replace(
        /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
        "$1.$2.$3-$4"
    );
};


export const maskDocument = (value: string) => {
    value = value?.replace(/\D/g, "");
    if (!value)
        return "-"

    if (value?.length === 11) {
        return maskCPF(value);
    } else if (value?.length === 14) {
        return maskCnpj(value);
    }

    return value;
};