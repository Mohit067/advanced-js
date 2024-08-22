function download(url){
    return new Promise(function executor(res , rej) {
        console.log("Start download data", url);
        setTimeout(() => {
            let data = "some data from" + url;
            console.log("download data from", url)
            rej(data);
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

download("www.example.com").then(function f(value){
    console.log("download data");
    return writeFile(value, "ms.txt")
})
.then(function g(value){
    console.log("file wrtten", value);
    return upload("ms.txt","www.example1.com");
})
.then(function h(value){
    console.log("upload file", value);
})
.catch(function i(value){
    console.log("Error", value);
})



/**

    output -->
 
    start download data www.example.com
    download data from www.example.com 
    Error some data from www.example.com


*/