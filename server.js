const http = require('http')

const fs = require('fs')

const url = require('url')

const server = http.createServer((req,res) => {
    // console.log('Hello This Is Server Listening');


    // res.writeHead(200,{'Content-Type':'text/plain'})
    // res.write('Hello world')
    // res.end()

    // fs.readFile('./page.html','utf-8',(err,page) => {
    //       res.writeHead(200,{'Content-Type':'text/html'})
    //       res.write(page)
    //       res.end()

    // })


    const urlpath = url.parse(req.url,true).pathname
    if(urlpath ==='/home') {

          fs.readFile('./home.html','utf-8',(err,page) => {
          res.writeHead(200,{'Content-Type':'text/html'})
          res.write(page)
          res.end()
 
          })

    }

    else if(urlpath === '/login'){

            fs.readFile('./login.html','utf-8',(err,page) => {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(page)
            res.end()
  
            })

    }


    else if(urlpath === '/form'){
     
            fs.readFile('./form.html','utf-8',(err,page) => {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(page)
            res.end()
  
            })

    }

    else if(urlpath === '/contact'){
     
        fs.readFile('./contact.html','utf-8',(err,page) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(page)
        res.end()

        })

}

else if(urlpath === '/about'){
     
        fs.readFile('./about.html','utf-8',(err,page) => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(page)
        res.end()

        })

}

}).listen(3000)