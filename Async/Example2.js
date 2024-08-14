/**
write a functions
dwonload --> it will do download some data from server
writing --> it will do writing data into a file
upload --> it will do upload some data from another server

now write a funtion do this all execution one after one
*/





function download (url, callback){
    console.log("Downloading from ", url);
    setTimeout(() => {
        console.log("downloading is done");
        let Downloaddata = "some data";
        callback?.(Downloaddata);
    }, 3000);
}

function writingData (data, fileName, callback){
    console.log("writing", data , "to file");
    setTimeout(() => {
        console.log("writing to file", fileName, "is done");
        let status = "successful";
        callback?.(status);
    }, 2000);
}

function upload(fileName, url, callback){
    console.log("upload file", fileName, "to", url, "server");
    setTimeout(() => {
        console.log("Upload is done");
        let uploadStatus = "success";
        callback?.(uploadStatus);
    }, 3000);
}

function process (){
    download("https://www.mohit.com", function handlDownload(data){
        writingData(data, 'mx.txt', function handleWirting(status){
            upload('mx.txt', "https://www.mohit1.com", function handleUpload(uploadStatus){
                console.log("All is done.")
            });
        });
    });
}

process();


