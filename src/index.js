import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import "./scss/style.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      recommendedproducts: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    let url =
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    axios.get(url).then(response => {
      this.setState({
        //products: response.data
        products:[
          {
            "id": 1,
            "name": "Brocolli - 1 Kg",
            "price": 120,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
            "category": "vegetables"
          },
          {
            "id": 2,
            "name": "Cauliflower - 1 Kg",
            "price": 60,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
            "category": "vegetables"
          },
          {
            "id": 3,
            "name": "Cucumber - 1 Kg",
            "price": 48,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
            "category": "vegetables"
          },
          {
            "id": 4,
            "name": "Beetroot - 1 Kg",
            "price": 32,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
            "category": "vegetables"
          },
          {
            "id": 5,
            "name": "Carrot - 1 Kg",
            "price": 56,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
            "category": "vegetables"
          },
          {
            "id": 6,
            "name": "Tomato - 1 Kg",
            "price": 16,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
            "category": "vegetables"
          },
          {
            "id": 7,
            "name": "Beans - 1 Kg",
            "price": 82,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
            "category": "vegetables"
          },
          {
            "id": 8,
            "name": "Brinjal - 1 Kg",
            "price": 35,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
            "category": "vegetables"
          },
          {
            "id": 9,
            "name": "Capsicum",
            "price": 60,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
            "category": "vegetables"
          },
          {
            "id": 10,
            "name": "Mushroom - 1 Kg",
            "price": 75,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
            "category": "vegetables"
          },
          {
            "id": 11,
            "name": "Potato - 1 Kg",
            "price": 22,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
            "category": "vegetables"
          },
          {
            "id": 12,
            "name": "Pumpkin - 1 Kg",
            "price": 48,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
            "category": "vegetables"
          },
          {
            "id": 13,
            "name": "Corn - 1 Kg",
            "price": 75,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
            "category": "vegetables"
          },
          {
            "id": 14,
            "name": "Onion - 1 Kg",
            "price": 16,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
            "category": "vegetables"
          },
          {
            "id": 15,
            "name": "Apple - 1 Kg",
            "price": 72,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
            "category": "fruits"
          },
          {
            "id": 16,
            "name": "Banana - 1 Kg",
            "price": 45,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
            "category": "fruits"
          },
          {
            "id": 17,
            "name": "Grapes - 1 Kg",
            "price": 60,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
            "category": "fruits"
          },
          {
            "id": 18,
            "name": "Mango - 1 Kg",
            "price": 75,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
            "category": "fruits"
          },
          {
            "id": 19,
            "name": "Musk Melon - 1 Kg",
            "price": 36,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
            "category": "fruits"
          },
          {
            "id": 20,
            "name": "Orange - 1 Kg",
            "price": 75,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
            "category": "fruits"
          },
          {
            "id": 21,
            "name": "Pears - 1 Kg",
            "price": 69,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
            "category": "fruits"
          },
          {
            "id": 22,
            "name": "Pomegranate - 1 Kg",
            "price": 95,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
            "category": "fruits"
          },
          {
            "id": 23,
            "name": "Raspberry - 1/4 Kg",
            "price": 160,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
            "category": "fruits"
          },
          {
            "id": 24,
            "name": "Strawberry - 1/4 Kg",
            "price": 180,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
            "category": "fruits"
          },
          {
            "id": 25,
            "name": "Water Melon - 1 Kg",
            "price": 28,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
            "category": "fruits"
          },
          {
            "id": 26,
            "name": "Almonds - 1/4 Kg",
            "price": 200,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
            "category": "nuts"
          },
          {
            "id": 27,
            "name": "Pista - 1/4 Kg",
            "price": 190,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
            "category": "nuts"
          },
          {
            "id": 28,
            "name": "Nuts Mixture - 1 Kg",
            "price": 950,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg",
            "category": "nuts"
          },
          {
            "id": 29,
            "name": "Cashews - 1 Kg",
            "price": 650,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
            "category": "nuts"
          },
          {
            "id": 30,
            "name": "Walnuts - 1/4 Kg",
            "price": 170,
            "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg",
            "category": "nuts"
          },
          {
            "id" : 31,
            "name": "soap",
            "price": 200,
            "image":"https://images-static.nykaa.com/media/catalog/product/tr:h-300,cm-pad_resize/6/8/68151598901396397465_new2.jpg",
          
            "category":"skincare"
          },
          {"id" : 32,
          "name": "shampoo",
          "price": 350,
          "image":"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=519825-847&recipeName=680",
        
          "category":"skincare"
        },
        {
          "id" : 33,
          "name": "moisturizer",
          "price": 400,
          "image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBATExIVEhIVEA8VEBAQFxIZERIQFxciGBYRExYYISghGholGxUVITMiJSkrLi4uFx8zODMsQygtLysBCgoKDg0OGxAQGy4lICYtLS0tLS0uKy0tLS0uLTUtLS0tLS0rLS0tLS01LS0tLS0tLS0tKy0tLS0rLS8rLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgUBAwQGBwj/xABMEAABAwEFAwcIBgYGCwAAAAABAAIDEQQFEiExQVGxBhMiMmFxcgcUM1OBkaHRFSNzkrLBNUJSgpPwVKK0wuHxFiUmNkNiY3Sjs9L/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADwRAQABAwEEBwUHBAEEAwAAAAABAgMRBBIhMVEFMkFxkaHRExRSYbEVIjNCgeHwBpLB8VNicoKyFiND/9oADAMBAAIRAxEAPwD6YqvYEBAQEBAQEBAQEBAQEBAQEBAQRk0PceChNPGFQodzKAgICAgICAgICAgICAgICAgICC4VnAICAgICAgICAgICAgICAgICAgjJoe48FCaeMKhQ7mUBAQEBAQEBAQEBAQEBAQEBAQEFwrOAQEBAQEBAQEBAQEBAQEBAQEBBGTQ9x4KE08YVCh3MoCAgICAgICAgICAgICAgICAgILhWcAgICAgICAgICAgICAgICAgICCMmh7jwUJp4wqFDuZQEBAQEBAQEBAQEBAQEBAQEBAQXCs4BAQEBBFzgBUkAbzohllhr1QXdrQ4j3gJhnN2iO1tFmedGOPsp+KiYV94t82fM5fVO98f/ANJhHvNDgvy1+aWeS0TRvEUYBeW82SASBoHVOZCYR7zQ8aPK1d2+Yd8R+aYPeaHrLmvVtqjZLCx7mPALSebbUb6F1VOD3mhZGF41jePZX8NVGFveLfNB1RqHN7XNc0e8hFou0T2jXAioNRvGiNGUBAQEEZND3HgoTTxhUKHcygICCEz8LXHc0n3BVrq2aZq5Qyv3PZ2qq+UTPhClF6P3/ALxKtdf5x4PkvtnVTPW8oTbeL9/wCp9oX+ceELR0vqvi8o9B14v2H3gJHSF/n5Qiel9V8XlHo1m85N/wCt79f5x4QrPTGrj83lHoib2k3/AK0a2/Pb5QpPTeqj83lCDr5eNvwCtGqv848D7b1fxeUejU6/3j/ILSNRf+KPBb7Y1nxeUejS7lHJ/ICv7e9z8j7X1vxR4Q1Scp5B/k1Wi9e5+S0dK62fzx4QtOSF8OtVqbC/R7XhpFOi8NLgctR0SKdq3tXa9uKau11aXpXUe0iLkxMd2F+up9QICAgILhWcAgICDVaXlrHkahjiO8CqIng+V+Se8ZbRz0s8jpZDMenISSBhBwt3Nz0GStDyKqpmd77XdugQWaAg8f5XB/qW8PsW/+xqD8oqEv0v5Jv0fZPsWqyr6MFCUZdCg+JcrLwlh5TXe2ORzGS+ZsmYCcEjXzvY4PboctpzFBTRE01TTwl9OnbRzgNA5wHcCqvVonNMSgiwgIIyaHuPBQmnjCoUO5lAQEGu0RlzHNAqS1wA3kigCpdpmqiYjk59XRNdiumO2J+imNzWhppzMh8LXEe+i8WrRXuXnD4f3S7E8Ehdc/qJfuO+SznQX/h84WjTXeTDrsn9RL9x/ySNBf+Hzg92ucmt12z+ol/hv+SvGhv8Aw+cInTXZ7Gp92T+ol/hv+SvTo70dnnDKdHen8v0aZLsn/o838N/yWkaS7y+iY0l7l5w5ZLqtHqJf4b/ktY09zk0jTXeX0c7rotHqJfuO+St7vc5Le7XOTnlue0f0eX7jvkrxYr5LRp7nJf8Ak8uiZltikfG5jWl5djFDTA4ZA5nXYtKLVcV0zjh6N7Niv2kTh6d5zPeV0vs44MIkQEBBcKzgEBAQabb6KT7N/Aoirg+ReRX0cv239xqvDx5fdbt0ChKzQEHkPK1+hbw+xH42oPygoS/THkl/R9k+xapVfRgiUZNCg+Ecu/8Aei6vHd39qchD6xauu/xu4qr1bfUjuhrRcQEEZND3HgoTTxhUKHcygICDdYfSx+NvFGGp/Cq7npbbeDIQ3HXpVwgCtaUrxC5tXrrWliPaZ38MRyfPzMQ4xygYdGu9tPmvLn+otPHCmry9SJyi/lAzbUdmXBTT/UFmrhRV5epM0xxlpfyii3P9w+a0npyzjMU1eXqzm7S0u5RDYz3k/Jc9XTdz8lmfH0g9rTLS+/nnRrf6x/NYVdN6r/jiO+KvWCa3O6/pNzPcfmq09N6qeynwn1Z1XZhrPKSQfqsPsd810UdL6jtinwn1ZVaqYZdywIHSiB7Wup8CF22+k6p61HhP7Maukop4wvrK6skR3kH3hevE5jL0onMZUtoHTf43cVR9Nb6sd0NaLCAgILhWcAgICDTbPRyeB/BETwfIvIr6OX7b+41Xh48vut26BQlZoCDyPlZ/Qt4fYD8bUH5PUJfpjyTfo+yfYtVlX0YKEoyaFB8I5fj/AGmun7S7f7WUH1i1dd/jdxVXq2+pHc1ouICCMmh7jwUJp4wqFDuZQEBB0Xf6WPxBIYan8Grud3KiJzjAGNrlMSdA0dHNxOQC8bpjS3NRXbptxmd/+HzV2ZjGHmXS4nc3HitElD0YR0B2l52dtKLo0v8ASc00+01NUUx/P1+jzJ19FVWxbzXPKnh4qK/jaWUD2uhDgcJadaa0eN1RpvX0Ok6B6OiPuxtY5/u49RrtRbnE0RTn9fPh5KmC0ztrzb5MmkktLi4NGri7WnavUp0OltcKIhz063UVcKp/T9nLNbpjrNKe97/mt/Y24/LHhCI1N34p8Zc4vCdvVnlb2tkeD8Com1bn8seENadRc+KfFK1Wi1tZFK+WUsl5zm3ukLi7AaOyJJFCRrRc9Wm01yZpmiJx8nR7W9FMVTO6XZdVttjmueGc9G0TOc6TIBsTQ+SjqjMNINMznoV51/ofQVTjZ2Z+Xz4L0zXXGcZjwbRe0U2QLonfsSlpYT2SACn7wA7V52o6CrtRM2p2vq4L2n9pvoq/SfX18X167utD+7+FXjg+po6sKe09d/jfxVH1FvqR3Q1osICAguFZwCAgINVqpzb6mgwOqdaCmtERPB4HkDya81a4RyOe1zg4OewBx6IHVDjTTSp7yuedROfuwwp0VMRmufD/AE+j2YyAdansb+YKmK65Vm1ah0i0u2zU7+a+StE181Ji3y+vqG2t22gfejU/e5q/c5fVw3qYZonxSyskjeKPje9uFwroc1E7XNan2eeEPLHkhdXqLL7x81nmttizyX10wwQtayJ8cbGijWseKAbhUq0TXzVqptclw20V0tA9hjPEK33uf0Z//X8P19UJpZgMpcQ7Wx0+AVZqrjtXpotVdn1eAvq4BNedjtcz3h0M1lDRE1uF2CYPbiBNdSQSD7DTNRfnOKoTc0lMU7VE+P8Ap7u1+kf4ncVu2t9SO5qRcQEEZND3HgoTTxhUKHcygICDou/0sfiCQw1P4NXch5QpnBlnaHENcZS9o0cW4cNe6pXt9D0UzVVVMb4xjzfnv9Q3Kopooid05z88Yw8/Z2E2GfBXFz8RmprzGE0r/wAuP8l6NzHvNO1wxOO/Po8izn3OvY47UbX/AG4+mWm47CwstErwwmNrDGJhIYuk6jnuawEuoKbKdIVVdVXMVU0RnfxxjPyjfz/020FumaK7lWN2MZzjjvndvnH+d6wsM0I50xtgfK6x2vnWxMlERwULMLZA2mIF+IDI4BouO7RXuirMRtRjMxnfx4cuzvejYu2980bM1bNWcRON3DjEce3ucV1WSGtnZM2AOtDg8RiGVz3RyPIFJA76s5EDCMqCu1WvVV/eqoz93dnMcYjljf8Ar+hp6aPu014zVvxieEzzzu/RyW9kdlbZWtskU5e60te6VrzJKGWh7GsaWkAOwgZgVzCU7V2apmqYxjh2bolaqabMUxFETnPH5VTDdyrMdjis8bIYp2smvBrTaA5+FglFYwAQK7C7Xo5UzWdiKr1VVUzMbqeHc6L9VNmKaYiJ3zx7219zQ2cW9sTKGl8RsJqX835mx7Yq6kAvdTas/a1V7M1f9P8A7TDam3TRtY+f0iXzSlchmToBt7l6kzji8uI34foS7BnB3M/CvmKuMvpI4Ki09d/jdxWT6e31I7oa0WEBAQXCs4BAQEEJm1a4b2uHwUDh5PU5uPwt4LjoTd4Ou/7WWMgY1rDJNaY4YjK3ExhLXPfIW7SI45CBUVNBUVXRS4a+TVap3w2iwRAscyeedkhMbQ4NbZnyNpTKuKPWmhp2q0KTGJiHHfd72pstuis5jD42XR5vzjatD7TaHRP5yhqW0bs0UwrM727/AEidLZ2vYDFMPOI54H0LobRHE5xY7fRwaQdHNcDtUTC0TlVcnr6ntnNgyc0GWGwSzPjazHJaLRHzhDcYc1rGgaYakuGYpnnViG1EzW2Wa/LQ21Nsz3BxbeEUTpcIHPWWWzSTMqNA8OiwkigOGtBVWpiMZZ1VTnZlZ39eT2TMYHtYwy2QPc5jXFrJGzYsNduKKPWu3erQzqnEriEjm20djGdHUArnrQABUqbUKa25yRDfaLOP/IFhHXjvdlW63PdK1tnpH+IrtZ2upDUjQQEEZND3HgoTTxhUKHcygICDou/0sfiCQw1P4NXc6eWdgEzYRXC4c5hdSozw1BG0Zdi4Nb03f6LuW6rcRMVZ2ontxjt7OL5bV6G1q6Nm52cJjjDybbstEJD4pOkNrCWu7t1PavY0v9W9G6qnZvfcnlVGY8Y/Z4FXQuqsVbVmrPdun082mW32wyBzueL2ghrm4jQHUADKhoO+i9yze0F2jFuqmYnlMOW5R0hFcV1bWY/nZucNst8xkbI+R4lb1HOxNc3sbpTU6b11UW7Ozs0xGJc9dzUxXFdecx2ofTNpaCGzyAFznZOI6TjicQdlTmQNVWrTWp3zTC9GtvRGIqnm6he1rMULbObQC1kolLA4h73yufjFK50frkVzTYsxVM147MeGHdTqdRNFMW9rtzu5zM/5VNoum1va1r2SBrS8tExw0LjVx6ZGpzKVanTWsztRCfY6mqI2onEc931SkjtXONcbSS8SGQOY8lwkLQ0vqNpa0DKuQXlX+l9HbpmKYz2fJvFcxP3rm/jinfPo7LPdZDnSEVkcXOfLJTEXOzJA2anYvndZ0/Vcp2KJxHya5uTmbdOzn808f0jsfTbv68Ps/CvVp6sPap4QpZ+u/wATuKq+no6sdyCLCAgILhWcAgICAgrOTfoo/A3guGnim5wd992QSRxnnGxPjmjlhkfQtEja9FwJFQ5he00INHGi6KXDXDktkRllssptFnY6zzSSNYDja4PhdEQTiaa/WE1psA7VeGdW/fkNgaZ5pjaocUgu4FophHms7pcun+sH4eylc9FKP1RvS6bO+0+ctnZG8wSRStDmlkuJuFkjhUdJgLgDtBpsCrPBaIiasqy7rqbZuZMNphxtslms84kAwTiBpbHIKPrG7pO/aFDSmQKzmc8W9MbO+JLHYBJ9Y+SOK1NtsdoxufG+BzmRmEMjDXB3Nc05wGKjg4lxB23hlVv3zxWtpseORsvncDZRNA8ZAx83E2RojpzgJJM7ziruFMleGc8c5XDHksBLmvOfSjyYc9mZ0012exZ1N6FPaBWaD/uYPhICsaevHe66/wAKe5Z2nrv8buK7FLfUjuhrRcQEEZND3HgoTTxhUKHcygICDou70sfiSGGp/Bq7norfYhKG1JGGtKU2019y4OkOjaNbFO1MxjPD5/6eDCsfcxzo8e0UXiVf01VHVuR+sfvJNTndckuxzPe75LP/AOPammd1VPjPopMS0zXBK7rFjvEXHiF009Fa+nhdx/5Veik01NLeSQrX6pp3tZn78l10dHaztvT5z/lWbdc9rpHJokUdaJqbmOcB7iSF10aGuOvdmf588sKtFFXGqrxn1QHJKDWr3He814UCrc6M2+rcmPCf8ZVp6O08TmYz3z/IbRyeaOq4NHYwfkVw19AVVTmbsz3x+7qps0URimIhrfyd/wCp/V/xSnoDH/6eX7oqs57VrYxSSMbjT4L6KIxEQ1hRz9d/idxVH01HVjuQRYQEBBcKzgEBAQAgrOT/AFGjdUfFcUdZNfVeiiW0OSVdFJOMOMuoQMZawFzOi09FoBqcbnt0OQ7CTpuYfeapZrSWkUc1zon9QZiQtcagkEa4aCo/erlO5E5bZ7RMSxoBAxT844tp0QaxUJyzbTTf7FWrGF6M5cUNomMLy6ofVlMjXOmMAYdB0qHC796mec4y3ja2Wyz2mcgCjmkuiq7BowhmIiuVc5O6mY2K0YUq2pboLbM57Q04m/V84QBRshcQ5gIBq3CDmaaDpZ0N9zHflZ2grOpvQpDnaIPt2fA1/JZUdeHTd/CnuWE/Xd4ncV2Io6sdyCLCAgjJoe48FCaeMKhQ7mUBAQdF3elj8SmGGp/Bq7nrdis8BQX5d4kc8mUsxwc25rWudWOricQbsxOZnua4frFYXKIq7ezDh1NiK6pnaxmMdvDf/nHnHai6wSSc4W2hwJJw5SBzCXV2mratIbQUFG1AzKbEznEnsa684r+u7+eDay65Rlz7sHOFxAMgdQy4y0OxZAtOFTFuqN2V409yN21uznt5558tzTHc8gDQZjQCJowmQENaGhwb0ujiwO6tOt2JFqealOmriMTVy5xy+e7OJ4c2bNY5qyCR5c0swhxLiHEnUsrQADKgpXt1UxRVmcrUWrmaoqndj+bv5l0SWVxpR/N6ZR1Dduzf0h34VaaJ5tJt1TwnHcg2xvzrK45kihcKVplkdMj3Yk2J7ZPZVdtU+bu/V3mmqu3aLN6VniPAqRRT9d/idxWb6Wjqx3IIsICAguFZwCAgICCjukOxdGtA941Abk41r8BlvrnQLj3bUlcTjcuonTjLCHdHI9HM4cic/wBuoPYB2reMOGdpukknBbRgeOa6RBaKy00ALtK9uimMImakmunAcKA0a7CXYRV2WE5HfiyyyDdM1O5EbTltclp6TQ0UpJhcMOdHANJqej0TWmZr2CiicYTTNWXNitBJ6LR0m0GRq3PEdRtpluKz3N/vttn84y0FX51wnCygFRQ5nrHvAy3zGFKtp0wyTuacsDg81q3onouyFT0m4sGfer7mW+WiWW0GpwAAsaWtOHJxI6NSa1AJrUDq5KKsL0zUr7uMhtMAf60U0qSGkkmh7OKyoxtxh03c+xnK4l6zu88V1L08IRRIgIIyaHuPBQmnjCoUO5lAQEHRd3pY/EkMNT+DV3PWjRXeAqrfGS54OIB7IgHNa93Ve4uBw9jhrrVZ1Oe7G+fnEdkz2zyVV63dLPJiYAG81Ew846aN2JrnOOGja0o4Z5LKuiqqcx/lyX7F27XtUcMRG+ZjhM8N3zc9l5O2hsjHGRrQA8OwyTurVtBk4ag1PtG5cer0d67a2bdWJ3ds8zT6S7Rdiqqd0Z7ZnsxHFY/Rkuf1uzLXLPt/NeV9ja3/AJI/uq9Hpb+aH0ZN64/z7FM9D6344/ur9EYnnPkybul9btO/3afzVPsfWfHH91foYnn5Qm2xSU69e2pWc9Ca6Z3XY/uq9GkTEQ7mVDQDsbQntX0+mt1W7NNFc5mIiJn54VlCzelj8R4FbqqKfrv8TuKzfTUdWO5BFhAQEFwrOAQEBAQeaum94RLMwysDm2idpaXNxCkh1C5JpxVJNcTGIXzsbyTHM0A0w51octmmwj217FrEw46qasux0UtY8LxRrnFwcTVzakhhNDsoK65K0TCkxUWezStLavrl0s3GpNcVAdlS3uw5alTMwiIlyzWKXUy6AUNTUuwUz2Uxlzu2tDoAq1TGFqaas8XKYJThJfSjmk554RUUoBSpbSprka03rPMN9mpsis09PSAEtAJxPyNTmARTR1M+zcFeJhnVTU7uYycHOB+tLm4nGoaG0aA7VpqBmO3erZhnsy5m0jJc6VtKO6Ac3C0kN6uQy6Jy2AhVqnLSimYneo7qvqGS8bLEyVrnmSXotIJyhe7Z3LO1TO3EttRXHs5j+cXo3anvXU0jgwiRAQRk0PceChNPGFQodzKAgIN9gdSWPxD45JDHUxm1V3PXNKu+fhX3gBiHVrhFMT3MI1GzUVyQczQM6llKiv1z8gOBzPwRDeIYiSA6pNchI6uQpoD3qBJ9lbnrm6uTna56Z5an+QEGs2Ru3Fqf1nbdmR0UjMcIaSRXOmRJIFN1dNVI5H9Z2Z61D9Zm0VrUDZ/IQdoyHsyQRso+tZ3ngUFBMek7xO4rN9LR1YQRYQEBBcKzgEBAQEHxm/eT00V6yTub9U6186CATVhdiNBt1Ioq1THBwVW6ory+s3TeNnc0UI7nNwn3OoU3M5iXY6/LE0kOkiaRkQ4AEH2hTuRvZHKC7/X2f7zE3JzUG/bvP/Hs33o03GauZ9M2D19n+9Gm5GamfpywjSaH2Fv5JuMyy2/LK40a9ridMIPGmSbje87ymvuENcG9J1CAGhxz7SAVEzC0UyoPJ1dcxt8c5aWwQiVzpCKNLnRlgY0kCp6dct3cppnJVRPDm9+pekICAgjJoe48FCaeMKhQ7mUBAQAUJjL1NhtYewEa7RuO5WfPXrU2q9mf0bngHUA94qjJDm2/sj3BMjGW4V3ohFz1I1lyBVSIuiaa1aDXWoGfegOKgQfLzTDIesQWxA7SdXdwSZb6azN2vHZ2vPKj6BlAQEBBcKzgEBAQEGCFAi6Fp1Yw97GfJMQrsQiLPH6uP7jPkmIR7OlnzeP1bPutTEI9lSi6yxnWJh/dCYg9lSCyR+rZ7kxCPZUseZxeqZ7kxCfZUnmcXqo/uM+SjZjkn2cfyW6NrW9VjG+FjAeCnEcj2cfyZTfITqSdwOilMU0xwhFFhAQEEZND3HgoTTxhUKHcygICAg2QTuYatNN+496M7lqi5GKoWMN7ftCnaNFbLzbnR1UdSfFu+k2b/g5Mwy9wvfLxY+kWftfB3yTMHuF75eLH0hH+18HfJMnuF75eLH0hHvPuKZhPuF75eJ9Ix7z7kzB7hd+Xiwbxj3u+7/imYT9n3fl/P0YN5sGjXPO51Gt9tCSU2l6Ojqs/emP0V1qtLpHYnGp2DYBuAVXpW7VNunZpakaCAgICC4VnAICAgICAgICAgICAgICAgICAgjJoe48FCaeMKhQ7mUBAQEBAQEBAQEBAQEBAQEBAQEFwrOAQEBAQEBAQEBAQEBAQEBAQEBBGTQ9x4KE08YVCh3MoCAgICAgICAgICAgICAgICAgILhWcAgICAgICAgICAgICAgICAgICCMmh7jwUJp4wqFDuZQEBAQEBAQEBAQEBAQEBAQEBAQXCs4BAQEBAQEBAQEBAQEBAQEBAQEEZND3HgoTTxhUKHcygICAgICAgICAgICAgICAgICAg/9k=",
        
          "category":"skincare"
        },
        { "id" : 34,
        "name": "Bodylotion",
        "price": 500,
        "image":"https://images-static.nykaa.com/media/catalog/product/tr:h-300,cm-pad_resize/1/2/12168_h-8901030733529.jpg",
      
        "category":"skincare"

        },
        { "id" : 35,
        "name": "Body oil",
        "price": 200,
        "image":"data:image/jpeg;base64,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",
      
        "category":"skincare"

        },
        { "id" : 36,
        "name": "pants",
        "price": 750,
        "image":"https://cdni.llbean.net/is/image/wim/500506_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
      
        "category":"Clothing"

        },
        { "id" : 37,
        "name": "shirt",
        "price": 500,
        "image":"data:image/jpeg;base64,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",
      
        "category":"clothing"

        },
        { "id" : 38,
        "name": "jacket",
        "price": 800,
        "image":"data:image/jpeg;base64,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",
      
        "category":"clothing"

        },
        { "id" : 39,
        "name": "tshirt",
        "price": 350,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-jUZo4Afl6puCj-NVhKAlK-9WqbhFlapjBUcM9MmeSgtHMragTcHEg6fhY0EA0vJDY7D_PA9&usqp=CAc",
      
        "category":"clothing"

        },
        { "id" : 40,
        "name": "trouser",
        "price": 850,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBwuSgDQ--im_7f2uiZGaWT58l0AHIjnKQn4lHAHLPiuCI3mXj&usqp=CAU",
      
        "category":"clothing"

        },


        ],
      recommendedproducts:[
        { "id" : 39,
        "name": "tshirt",
        "price": 350,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-jUZo4Afl6puCj-NVhKAlK-9WqbhFlapjBUcM9MmeSgtHMragTcHEg6fhY0EA0vJDY7D_PA9&usqp=CAc",
      
        "category":"clothing"

        },
        { "id" : 36,
        "name": "pants",
        "price": 750,
        "image":"https://cdni.llbean.net/is/image/wim/500506_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
      
        "category":"Clothing"

        },
        { "id" : 37,
        "name": "shirt",
        "price": 500,
        "image":"data:image/jpeg;base64,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",
      
        "category":"clothing"

        }
      ]
      });
    });
  }
  componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function () {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
         
        
        <div className="heading">
         <h3>Products</h3>
         <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
         </div>

         <div className="heading">
          <h3>Here are some recommendations</h3>
            <Products
              productsList={this.state.recommendedproducts}
              searchTerm=""
              // searchTerm={this.state.term}
              addToCart={this.handleAddToCart}
              productQuantity={this.state.quantity}
              updateQuantity={this.updateQuantity}
              openModal={this.openModal}
            />
         </div>
        

       

        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
