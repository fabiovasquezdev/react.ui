import moment from "moment";
import momentTZ from "moment-timezone";

export const formatDateToDesc = (date) => {
    return moment(date).format('D MMM, YYYY');
};

export const dateToTime = (date) => {
    return moment(date).format('HH:mm');
}

export const formatDateWeekDesc = (date) => {
    return moment(date).format('ddd, D MMMM YYYY');
};

export const formatDateTime = (date) => {
    return  moment(date).format('D MMM, YYYY HH:mm');
};

export const formatDateOnly = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const toDate = (d: Date): Date => {
    const year = d.getUTCFullYear();
    const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = d.getUTCDate().toString().padStart(2, '0');
    return new Date(`${year}-${month}-${day}T00:00-03:00`)
}

export const capitalize = (str) => {
    if (!str || str?.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const toDateUtc = (date) => {
    const newDate = new Date(date);

    const utcOffset = -3;
    const offsetMilliseconds = utcOffset * 60 * 60 * 1000;

    return new Date(newDate.getTime() + offsetMilliseconds);
}

export const calculateDuration = (startDateTime: Date, endDateTime: Date): { hours: number, minutes: number } => {
    if (!(startDateTime instanceof Date) || !(endDateTime instanceof Date)) {
        throw new Error('Inputs must be Date objects.');
    }

    const diffInMilliseconds = endDateTime.getTime() - startDateTime.getTime();

    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    return {
        hours: hours,
        minutes: minutes
    };
}
export const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return ''
    phoneNumber = phoneNumber.replace(/\D/g, '');
    if (phoneNumber.length !== 13) {
        return 'Invalid phone number';
    }

    phoneNumber = phoneNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4');

    return phoneNumber;
}

export function getTimeString(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

export function convertToTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return formattedMinutes + ":" + formattedSeconds;
}

export function parseSearchParams<T>(searchParams: URLSearchParams): T {
    const obj: Record<string, string | string[]> = {}


    for (const [key, value] of searchParams) {
        obj[key] = obj[key] ? [...obj[key], value] : value;
    }
    return obj as T
}

export const getStartEndDates = (d: Date, type: "start" | "end"): Date => {
    switch (type) {
        case "start":
            return momentTZ(moment(d).startOf('day')).tz("America/Sao_Paulo", true).toDate();

        case "end":
            return momentTZ(moment(d).endOf('day')).tz("America/Sao_Paulo", true).toDate();

        default:
            return momentTZ(moment().startOf('day')).tz("America/Sao_Paulo", true).toDate();
    }
}