import React, { Component } from 'react'

class CardShop extends Component {
  render() {
    return (
        <div>
        
        <div class="container">
          <div class="shadow-lg ">
            <img src={this.props.gambar} class=" h-50 w-50 "/>
          <div class="p-3"> 
            <h2 class="text-2xl font-bold font-sans">{this.props.nama}</h2>
            <p class="lead ">Rp {this.props.harga}</p>
        <div className='btn-group'>
            <button class="btn btn-danger text-white" onClick={this.props.onEdit}>
                Edit
            </button>
            <button class="btn btn-warning text-white"  onClick={this.props.onDrop}>
                Hapus
            </button>
            <button class="btn btn-success text-white" onClick={this.props.onCart}>
              Tambah ke keranjang</button>
        </div>
          </div>
          </div>
          <hr/>
        </div>
      </div>

    )
  }
}

export default CardShop;