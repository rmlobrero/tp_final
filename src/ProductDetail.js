import './ProductDetail.css'
// import { Card, Button } from 'react-bootstrap'


function ProductDetail() {
    return (
        <>
            <form data-testid="form" class="search"></form>
            <ul class="cards">
                <li class="card">
                    <img class="card-photo" src='https://images.nashbar.com/cdn-cgi/image/f=auto,width=475/images/large/bikes/batchbicycles/b377139.jpg' alt='bici1'></img>
                    <div class="card-data">BATCH BICYCLES 27.5" LIFESTYLE BIKE (MATTE FIRE RED).</div>
                </li>
                <li class="card">
                    <img class="card-photo" src='https://images.nashbar.com/cdn-cgi/image/f=auto,width=475/images/large/bikes/niner-bikes/00-932-20-53-20.jpg' alt='bici2'></img>
                    <div class="card-data">NINER 2020 MCR RDO 3-STAR (BLACK/MAGNETIC GREY).</div>
                </li>
                <li class="card">
                    <img class="card-photo" src='https://images.nashbar.com/images/large/bikes/verde/cb6230.jpg' alt='bici3'></img>
                    <div class="card-data">VERDE VARIO 650B BIKE (BLACK).</div>
                </li>
                <li class="card">
                    <img class="card-photo" src='https://images.nashbar.com/images/large/bikes/dk%20bicycles/cb2411.jpg' alt='bici3'></img>
                    <div class="card-data">DK HELIO BMX BIKE (21" TOPTUBE) (CHROME).</div>
                </li>

            </ul>
        </>

    )
}

export default ProductDetail
