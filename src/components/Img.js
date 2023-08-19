import fb from "../assets/FB-icon-black.png";
import ind from "../assets/linkedin-icon-black.png";
import tw from "../assets/Twitter-icon-black.png";
import img1 from "../assets/Group@2x.png"
import img2 from "../assets/Group2@2x.png"
export default function(prop){
    const arr=[img1,img2];
    console.log(arr);
    return <div className="photo-gallery">
            <img src={arr[prop.ind]} className="bg-img"></img>
            <div className="description" >
                <h1>Type Text</h1>
                <p>Lorem ipsum is simply dummy text of then printing and typetesting industry</p>
                <p className="dots"> 
                    <span className={prop.ind==0?"active":""}></span>
                    <span className={prop.ind==1?"active":""}></span>
                </p>
            </div>
            <div className="li-items">
                <ul className="flex-r">
                    <li>
                        <img src={fb}/>
                    </li>
                    <li>
                        <img src={ind}/>
                    </li>
                    <li>
                        <img src={tw}/>
                    </li>
                </ul>
            </div>
        </div>
}