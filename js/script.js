document.querySelector('#btn2').addEventListener('click',()=>{
    let senha=document.getElementById('senha');

    if (senha.type=='password') {
        senha.type='text';
        document.getElementById('btn2').value="Esconder senha";}
    else {
        senha.type='password'; 
        document.getElementById('btn2').value="Mostrar senha";}
});