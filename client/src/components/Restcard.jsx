import { CDN_URL } from "../mockdata/contacts";

const Restcard = (props) => {
  if (!props.restaurantdetails) {
    console.error("Restaurant details are missing:", props);
    return null;
  }

  const { name, dsc, rate, price,img} =props.restaurantdetails;
 
  // const extractImageid = (url) => {
  //   const parts = url.split("/");
  //   return parts[parts.length - 1];
  // };

  // const ImageId = img_url ? extractImageid(img_url) : "";

  return (
    <div className="restcard">
      <img className="restcard-img" src={img} alt={name} />
      <div className="restcard-details">
        <div>
          <h1>{name}</h1>
          <span>{dsc}</span>
        </div>
        <div>
         <h2>{price}</h2>

         <h3>{rate}</h3>
        </div>
      </div>
    </div>
  );
};

export default Restcard;
