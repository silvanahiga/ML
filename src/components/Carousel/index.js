import React from 'react';
import Products from "../Products"

import Navbar from "../Navbar";
import "./style.css"



class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      loading: true,
    }
  }



  async componentDidMount() {
    // const siteId= this.props.match.params.site
    const data = await fetch(`https://api.mercadolibre.com/sites/${this.props.match.params.site}/search?q=tv&limit=5`)  //aca va site porque en el otro lado le dijimos que era site si es id ponemos id
    const jsonData = await data.json();
    console.log(jsonData)
    console.log(data)

    const datos = jsonData.results
    console.log(datos)


    this.setState({
      products: datos,
      loading: false,

    })
  }



  render() {
    const loading = this.state.loading


    return (
      <div className="carrousel">
        <Navbar />

        {loading === true ? "cargando" : (   //se puede poner loading solo sin true, porque ya da como entendido que es true
          <div className="wrap_box">

            <React.Fragment>

              {this.state.products.map((m, key) => {
                return (

                  <Products
                    key={key}

                    thumbnail={m.thumbnail}
                    name={m.title}
                    price={m.price}
                    currency={m.currency_id}

                  />

                )
              })

              }
            </React.Fragment>
          </div>
        )}

      </div>
    )
  }

}

export default Carousel