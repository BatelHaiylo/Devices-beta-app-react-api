
export default function DeviceCard({device}){
const {brand,createdAt,color,picture,ram,price}= device
    return(
        <div className="card" >
          <img src={picture} className="card-img-top"/>
          <div className="card-body">
            <p className="card-text">
                realese date: {createdAt}
                color: {color}
                ram: {ram}
                brand: {brand}
                price: {price}
            </p>
          </div>
        </div>
    )
}