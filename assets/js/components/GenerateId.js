class GenerateId {
    createUniqueId() {
        let timestamp = new Date().getUTCMilliseconds();
        let now = new Date();

        timestamp += now.getFullYear().toString();
        timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
        timestamp += (now.getDate < 10 ? '0' : '') + now.getDate().toString(); // pad with a 0

        console.log('Timestamp:', timestamp);
        return timestamp;
    }
}