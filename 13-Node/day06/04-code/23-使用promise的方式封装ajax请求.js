function ajax(option) { 
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(option.type, option.url);
        xhr.send(null);

        xhr.onreadystatechange = function () { 
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {    
                    resolve(xhr.responseText);
                } else {
                    reject()
                }
            }
        }
    })
}

