import { useState } from 'react';
import './AppleProducts.css';

const AppleProducts = () => {

    const [colors , setColors] = useState([{
        img1 : "",
        img2 : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692895646951",
        img3 : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692895646952",
        img4 : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blacktitanium-select_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692895646488",
        img5 : '',
        img6 : ''
    },{
        img1 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-blue-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097067',
        img2 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pink-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097674',
        img3 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-yellow-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991101083',
        img4 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img5 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img6 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-black-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991095712'
    },{
        img1 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-blue-select-202209_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1660863821133',
        img2 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-purple-select-202209_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1660863821532',
        img3 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-yellow-select-202303_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1676425233001',
        img4 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-midnight-select-202209_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1660863821246',
        img5 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-starlight-select-202209_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1660863821533',
        img6 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-red-select-202209_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1660863821533'
    },{
        img1 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-blue-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097067',
        img2 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pink-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097674',
        img3 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-yellow-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991101083',
        img4 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img5 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img6 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-black-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991095712'
    },{
        img1 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-blue-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097067',
        img2 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pink-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097674',
        img3 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-yellow-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991101083',
        img4 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img5 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img6 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-black-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991095712'
    },{
        img1 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-blue-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097067',
        img2 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pink-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097674',
        img3 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-yellow-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991101083',
        img4 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img5 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-green-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991097331',
        img6 : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-black-select-202309_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692991095712'
    }])
    const [Products, setProducts] = useState([{
        name: "iPhone 15 Pro & iPhone 15 Pro Max",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312",
        price: "From ₹21483.00/mo. with instant savings§§ and No Cost EMI§ or ₹134900.00‡",
    }, {
        name: "iPhone 15 & iPhone 15 Plus",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559",
        price: "From ₹12483.00/mo. with instant savings§§ and No Cost EMI§ or ₹79900.00‡"
    }, {
        name:"Phone 14 & iPhone 14 Plus",
        image :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654",
        price : "From ₹10983.00/mo. with instant savings§§ and No Cost EMI§ or ₹69900.00‡"
    }, {
        name : "iPhone 13",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692912410963",
        price : "From ₹9483.00/mo. with instant savings§§ and No Cost EMI§ or ₹59900.00‡"
    }, {
        name : "iPhone SE",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        price : "From ₹7983.00/mo. with instant savings§§ and No Cost EMI§ or ₹49900.00‡"
    }, {
        name : "iPhone SE",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        price : "From ₹7983.00/mo. with instant savings§§ and No Cost EMI§ or ₹49900.00‡"
    }])
    return (
        <div id='Products-Screen'>
            <h1 className='Products-h1'>Shop iPhone</h1>
            <div className='Products-body'>
                <h2 className='Products-body-h2'>All models. Take your pick.</h2>
                <div className='Products-div'>
                   {Products.map((pro , i) => (
                    <div className='Products-SinglePro'>
                        <div className='Products-SP-innerdiv'>
                            {i < 2 ?  
                            <p className='Products-NEW'>NEW</p> :

                            <p className='Products-NEW'></p>
                            }
                            <h1 className='Product-name'>{pro.name}</h1>
                            <img className='product-image' src={pro.image}/>
                            <div className='Products-colors-img'>
                                {colors.map((col) => (
                                    <img src={col.img3}/>
                                ))}
                            </div>
                            <div className='Products-lastdiv'>
                                <p className='products-price'>{pro.price}</p>
                                <button className='Products-buy'>Buy</button>
                            </div>
                        </div>  
                    </div>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default AppleProducts;