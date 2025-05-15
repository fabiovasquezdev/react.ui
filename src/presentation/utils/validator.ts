import { validateCNPJ, validateCPF, validateEmail, validatePassword } from "./validations";

export namespace Validators {
    export function cnpjValidator(_: any, value: string) {
        if (value && !validateCNPJ(value)) {
            return Promise.reject();
        }
        return Promise.resolve();
    }

    export function documentValidator(_: any, value: string) {
        const isValid = validateCPF(value) || validateCNPJ(value);
        if (value && !isValid) {
            return Promise.reject();
        }
        return Promise.resolve();
    }

    export function mailValidator(_: any, value: string) {
        if (value && !validateEmail(value)) {
            return Promise.reject();
        }
        return Promise.resolve();
    }

    export function newPasswordValidator(_: any, value: any) {
        if (value && !validatePassword(value))
            return Promise.reject();
        return Promise.resolve();
    }
}