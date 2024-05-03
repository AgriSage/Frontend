<script>
export default {
  name: "HomePage"
}
</script>
<template>
	    <div class="GigBox">
        <div>
            <div class="filas">
                <div class="boxCompra">
                    <img class="imgCompra" src="/public/estante.png">
                    <div class="PrecioPunj">
                        <p class="precio">S/80.00</p>
                        <p class=" puntaje">4.6/5</p>
                    </div>
                    <button class="buttonGren">Comprar ahora</button>
                </div>
                <div class="boxCompra">
                    <img class="imgCompra" src="/public/tubos.png">
                    <div class="PrecioPunj">
                        <p class="precio">S/80.00</p>
                        <p class=" puntaje">4.6/5</p>
                    </div>
                    <button class="buttonGren">Comprar ahora</button>
                </div>
            </div>
            <div class="filas">
                <div class="boxCompra">
                    <img class="imgCompra" src="/public/motor.png">
                    <div class="PrecioPunj">
                        <p class="precio">S/80.00</p>
                        <p class=" puntaje">4.6/5</p>
                    </div>
                    <button class="buttonGren">Comprar ahora</button>
                </div>
                <div class="boxCompra">
                    <img class="imgCompra" src="/public/ventilador.png">
                    <div class="PrecioPunj">
                        <p class="precio">S/80.00</p>
                        <p class=" puntaje">4.6/5</p>
                    </div>
                    <button class="buttonGren">Comprar ahora</button>
                </div>
            </div>
        </div>
        <button class="buttonWello">Ver más</button>
    </div>
    <div>
        <img class="imgReferenvial" src="/public/abula.png">
        <div class="boxTex">
            <h1>Oferta Ralampago</h1>
            <h3>"¡Desbloquea tu mejora definitiva! Obtén un 40% de descuento en la Membresía premium de AgriSage. Oferta exclusiva, por tiempo limitado."</h3>
        </div>
        <div class="filas">
            <h2>6</h2>
            <p>Dias</p>
        </div>
        <div class="filas">
            <h2>18</h2>
            <p>Horas</p>
        </div>
        <div class="filas">
            <h2>48</h2>
            <p>Min</p>
        </div>
        <button class="buttonCompa">comprar</button>
    </div>
</template>

<style>
.GigBox{
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px 50px;
    padding: 60px 0px;
}

.filas{
    float: left;
    justify-content: center;
    align-items: center;
    margin: 10px 80px;
}

.boxCompra{
    width: 210px;
    height: 230px;
    background: rgb(215, 243, 215);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    margin: 20px 0px;
    padding: 10px 30px;
}

.imgCompra{
    width: 140px;
    height: 140px;
    border-radius: 10px;
}

.PrecioPunj{
    height: 40px;
    width: 200px;
}

.precio{
    float: inline-start;
}

.puntaje{
    float:inline-end;
}

.buttonGren {
    width: 170px;
    padding: 10px 30px;
    background: green;
    color: white;
    border-width: 0px;
    border-radius: 15px;
}

.buttonWello{
    width: 170px;
    padding: 10px 30px;
    background: rgb(168, 223, 67);
    color: white;
    border-width: 0px;
    border-radius: 15px;
}

.imgReferenvial {
    width: 370px;
    height: 460px;
    float: left;
    margin: 20px 80px;
}

.boxTex{
    padding: 40px 70px;
}

.buttonCompa{
    width: 170px;
    padding: 30px 50px;
    background: green;
    color: white;
    border-width: 0px;
    }
h1 {
  color: #000; /* Color negro */
}
</style>