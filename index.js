import RNFS from "react-native-fs";
import CryptoJS from "react-native-crypto-js"

export const writeFile = async (type = "text", data, encryptionKey, filename) => {
    let path = RNFS.DocumentDirectoryPath + filename;
    if (type === "text") {
        let encryptedData = CryptoJS.AES.encrypt(data.toString(), String(encryptionKey)).toString();
        await RNFS.writeFile(path, encryptedData, 'utf8')
        return true;
    }
    else if (type === "object") {
        let DATA = JSON.stringify(data);
        let encryptedData = CryptoJS.AES.encrypt(DATA.toString(), String(encryptionKey)).toString();
        await RNFS.writeFile(path, encryptedData, 'utf8')
        return true;
    }
}


export const readFile = async (type = "text", encryptionKey, filename) => {
    let path = RNFS.DocumentDirectoryPath + filename;
    if (type === "text") {
        let data = await RNFS.readFile(path, 'utf8');
        if (data === null) {
            return null;
        }
        else {
            let bytes = CryptoJS.AES.decrypt(data, String(encryptionKey));
            let unencryptData = bytes.toString(CryptoJS.enc.Utf8);
            return unencryptData;
        }
    }
    else if (type === "object") {
        let data = await RNFS.readFile(path, 'utf8');
        if (data === null) {
            return null;
        }
        else {
            let bytes = CryptoJS.AES.decrypt(data, String(encryptionKey));
            let unencryptData = bytes.toString(CryptoJS.enc.Utf8);
            let JSONData = JSON.parse(unencryptData);
            return JSONData;
        }
    }
}