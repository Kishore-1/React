import { useState } from "react";
import "./css/QrCode.css";
import PropTypes from "prop-types";

export const QrCode = (props) => {
const [img,setImg] = useState("");
const [loading, setLoading] = useState(false);
const [qrData, setQrData] = useState("");
const [qrSize, setQrSize] = useState("150");

// Since we are using API it may take a while
async function generateQR()
{
    setLoading(true);
    try
     {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url)
     }
    catch (error)
    {console.error("Error generating QR code, error")}
     
    finally{setLoading(false);}
}
function downloadQR()
{
    fetch(img).then((Response)=>Response.blob()).then((blob)=>{const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }).catch((error)=>{console.error("Error donloading qr code image.",error)});
}

    return (
    <div className="app-container" >
        <hr></hr>
        <h1>QR Code Generator</h1>
        {loading && <p>Please Wait...</p>}
        <div className="img-container">
        {img && <img src={img} className="qrimg" />}
        </div>
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR Code:        
            </label>
        <input type="text" id="dataInput" value={qrData} placeholder="Enter data" onChange={(e)=>setQrData(e.target.value)} />
            <label htmlFor="sizeInput" className="input-label">
                Image size (e.g., 150):
            </label>
        <input type="text" value={qrSize} onChange={(e)=>setQrSize(e.target.value)} className="input-label" placeholder="Enter image size" />
        <button className="generate-button" onClick={generateQR} disabled ={loading} >Generate Qr code</button>
        <button className="download-button" onClick={downloadQR}>Download Qr code</button>
        </div>
        <p className="footer">Designed by  <a href="#">Kishore</a></p>
        <br></br>
        <hr></hr>
    </div>
  )
}
