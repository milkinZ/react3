import React, { Component } from 'react'

class CardEvent extends Component {
  render() {
    return (
          <div className="container">
            <div class=" px-3 py-3">
                    {/* image */}
                    <img src={this.props.gambar} class="py-3 h-100 w-100" />
                  

                    <div class="p-3 border border-2 bg-light">
                      <h2 className="display-6">
                        {this.props.judul}
                      </h2>
                      <p class=" lead mb-3">{this.props.tanggal}</p>
                      <p class="lead text-justify"><strong>{this.props.keterangan}</strong></p>

                      <button class="btn btn-warning py-2 px-4 text-white" onClick={this.props.onEdit} data-target="#modal_event">Edit</button>
                      <button class="btn btn-danger py-2 px-4 m-2 "onClick={this.props.onDrop}>Hapus</button>
                    </div>

                  {/* footer */}
                    <div className="bg-light rounded border border-2 text-muted py-2 px-3 mt-2 mb-3 text-end">
                      * Updated {this.props.tanggalupdate}

                    </div>
            </div>
          </div> 
    )
  }
}

export default CardEvent