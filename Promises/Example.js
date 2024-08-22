function download(url){
    return new Promise(function executor(res , rej) {
        console.log("Start download data", url);
        setTimeout(() => {
            let data = "some data from" + url;
            console.log("download data from", url)
            res(data);
        },3000)
    });
}

function writeFile(data , fileName){
    return new Promise (function executor (res , rej){
        console.log("wrting ", data , " to file");
        setTimeout(() => {
            let status = "success";
            console.log("writing data to", fileName, "is done");
            res(status);
        }, 3000);
    });
}

function upload(fileName,url){
    return new Promise (function executor(res, rej){
        console.log("uploading file", fileName, "to", url);
        setTimeout(() => {
            console.log("upload is done");
            let status = "success";
            res(status);
        }, 3000)
    });
}

const p2 = download("www.example.com")
.then(function f(value){
    console.log("download data");
    return writeFile(value, "ms.txt");
})


const p3 = p2.then(function g(value){
    console.log("file written", value);
    return upload("ms.txt","www.example1.com");
})

p3.then(function h(value){
    console.log("upload file", value);
})