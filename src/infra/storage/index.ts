export const LocalStorage = {
    save(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    saveEncrypt(key: string, data: any) {
        localStorage.setItem(key, btoa(JSON.stringify(data)));
    },
    get(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    getDecrypt(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(atob(value)) : null;
    },
    remove(key: string) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
};
