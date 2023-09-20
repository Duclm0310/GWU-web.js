const http=require('http')
const fs=require('fs')
const port=3001;


const server=http.createServer((req, res) => {
    if(req.url==='/'){
        fs.readFile('homepage.html',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.end(data)
            }
        })
    }else if(req.url==='/Ho Chi Minh'){
        fs.readFile('hcm.html',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.end(data)
            }
        })
    }else if(req.url==='/Da Nang'){
        fs.readFile('danang.html',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.end(data)
            }
        })
    }
    else if(req.url==='/Can tho'){
        fs.readFile('cantho.html',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.end(data)
            }
        })
    }
    else if(req.url==='/Ha Noi'){
        fs.readFile('hanoi.html',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.end(data)
            }
        })
    }
    else{
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(port,()=>{
    console.log("http://localhost:"+port)
})