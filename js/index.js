const pedidos = [];
const cargarTabla = ()=>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";

    for(let i=0;i<pedidos.length;++i){
        let p = pedidos[i];
        let tr = document.createElement("tr");

        let td_Nro = document.createElement("td");
        td_Nro.innerText = (i+1);
        let td_nombre = document.createElement("td");
        td_nombre.innerText = p.nombre;
        let td_total = document.createElement("td");
        td_total.innerText = p.total;
        let td_tipo = document.createElement("td");
        let imagen = document.createElement("i");
        if(p.tipo == "combo"){
            imagen.classList.add("fas","fa-utensils","text-danger");
            
        }else{
            imagen.classList.add("fas","fa-hamburger");
        }
        td_tipo.classList.add("text-center");
        td_tipo.appendChild(imagen);
        let td_accion = document.createElement("td");
        let boton = document.createElement("button");
        boton.classList.add("btn","btn-danger");
        boton.innerText = "Eliminar Pedido";
        td_accion.appendChild(boton);
        
        tr.appendChild(td_Nro);
        tr.appendChild(td_nombre);
        tr.appendChild(td_total);
        tr.appendChild(td_tipo);
        tr.appendChild(td_accion);
        tbody.appendChild(tr);
    }
}
document.querySelector("#agregar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let total_compra = document.querySelector("#total-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    
    let pedido = {};
    pedido.nombre = nombre;
    pedido.total = total_compra;
    pedido.tipo = tipo;

    pedidos.push(pedido);
    cargarTabla();
    Swal.fire("¡Exito!","Compra registrada","success");

});