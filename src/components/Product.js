function Product() {
  var product = {
    id: 1,
    name: "1. Điện thoại iPhone 12 Pro Max 128GB",
    price_new: 2000000,
    price_old: 1890000,
    sold: 2938,
    discount: 10,
    status: true ? "Active" : "Pending",
  };

  var products = {
    id: 1,
    name: "1. Điện thoại iPhone 12 Pro Max 128GB",
    price_new: 2000000,
    price_old: 1890000,
    sold: 2938,
    discount: 10,
    status: true ? "Active" : "Pending",
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="home_product">
            <div className="row sm-gutter">
              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 home-product-item-wrapper">
                <a className="home-product-item text-decoration-none">
                  <div
                    className="home-product-item-img"
                    style={{ backgroundImage: "url(iphone-12.jpg)" }}
                  ></div>
                  <h4 className="home-product-item__name">{product.name}</h4>
                  <div className="home-product-item__price justify-cont">
                    <span className="home-product-item__price-old fs-14">
                      {product.price_old}
                    </span>
                    <span
                      className="home-product-item__price-current text-dark fs-16 float-end fw-bold"
                      style={{ paddingRight: "1rem" }}
                    >
                      {product.price_new}
                    </span>
                  </div>
                  <div className="home-product-item__action">
                    <span className="home-product-item__like home-product-item__liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-full fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item-star-gold fas fa-star" />
                      <i className="home-product-item-star-gold fas fa-star" />
                      <i className="home-product-item-star-gold fas fa-star" />
                      <i className="home-product-item-star-gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item-sold">
                      {product.sold} đã bán
                    </span>
                    <br />
                    <p className="home-product-item-sold">
                      Status <b>{product.status}</b>
                    </p>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__percent">
                      -{product.discount}%
                    </span>
                    {/* <span className="home-product-item__label">GIẢM</span> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
