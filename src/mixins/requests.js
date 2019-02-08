
export default {
  methods: {
    get: function(url, headers){
      return this.sendRequest(url, "GET", null, null, headers)
    },
    post: function(url, data, type, headers){
      if(!type || type == "" || type == "json"){
        // var clean_data = data.replace(/\[""\]/g, '[]').replace(/\\"/g, '$@$').replace(/""/g, 'null').replace(/\$@\$/g, '\\"');
        return this.sendRequest(url, "POST", data, "application/json", headers);
      }else if(type.toLowerCase() == 'form'){
        return this.sendRequest(url, "POST", data, headers);
      }else{
        return this.sendRequest(url, "POST", data, type, headers);
      }
    },
    delete: function(url, headers){
      return this.sendRequest(url, "DELETE", null, null, headers);
    },
    sendRequest: function(url, type, data, content_type, headers){
      if(type == "POST"){
        console.log("POST: "+url);
        console.log(data);
      }else if(type == "DELETE"){
        console.log("DELETE: "+url);
      }else{
        console.log("GET: "+url);
      }
      return new Promise((resolve, reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        if(content_type){
          xhr.setRequestHeader("Content-type", content_type);
        }
        if(headers){
          for(var p in headers){
            if(headers.hasOwnProperty(p)){
              xhr.setRequestHeader(p, headers[p]);
            }
          }
        }
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              error: true,
              status: this.status,
              status_text: xhr.statusText,
              response: xhr.response,
            });
          }
        };
        xhr.onerror = function () {
          reject({
            error: true,
            status: this.status,
            status_text: xhr.statusText,
            response: xhr.response,
          });
        };
        if(data){
          xhr.send(data);
        }else{
          xhr.send();
        }
      });
    },
    downloadFile(url){
      window.onbeforeunload = null; // disable page leave warning
      var link = document.createElement("a");
      if(url.indexOf("http") < 0){
        url = "http://" + url;
      }
      link.target = "_blank"
      link.href = url;
      link.click();
      window.onbeforeunload = ()=>{ return true; }; // re-enable page leave warning
    },
  }
}
