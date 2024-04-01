function dados () {
    const ds = [
        {id:1,login:"Paul",senha:"1234",email:"paul@gmail.com"},
        {id:2,login:"rayl",senha:"1235",email:"rayl@gmail.com"},
        {id:3,login:"john",senha:"1236",email:"john@gmail.com"},
        {id:4,login:"lest",senha:"6231",email:"lest@gmail.com"},
   
   
    ]
     const json = JSON.stringify(ds)

     localStorage.setItem("banco", json)

     localStorage.removeItem("Banco")
    
    
    return json
}

//Apagar - Delete 
function deletar(){
    localStorage.removeItem("Banco")
}


//inserir - insert
function inserir(){
    const ds = dados()

    let user = {id:1,login:"Paul",senha:"1234",email:"paul@gmail.com"}

    ds.push(user)

    console.log(ds)
}

console.log(inserir())


//Atualizar - uptade
function atualizar(){


}


//ler - select
function selecionar(){


} 

function logon(user,pass){


    const ds = dados()

    for(let i=0;i<ds.length;i++){
        if(user == ds[i].login && pass == ds[i].senha){
            console.log("LOGADO!")
              break  
        }
    }
    
}

function login(){
    let Ig = document.getElementById("login").value
    let sn = document.getElementById("senha").value




    logon(lg,sn)




}

