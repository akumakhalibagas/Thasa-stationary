const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="column is-one-quarter">
          <div class="card product-card">
            <figure>
              <img src="data:image/png;base64, ${product.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${product.title}</h3>
              <h5>$${product.price}</h5>
            </div>
            <footer class="card-footer">

            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img src="/images/banner.jpg" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Alat Tulis</h2>
                <div class="columns products">
                  ${renderedProducts}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `,
  });
};
