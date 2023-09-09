import React,{useState} from 'react'
import ReactDom from 'react-dom';
import './Modal.css'
import Payment from "../../Logo/payment.png"
const Modal = ({setData,data,modelData,index,fakeString}) => {
    const cancel = ()=>{
        let list = [...data]
       
        list[index].isAnkur = !list[index].isAnkur
        setData(list)       
    }
    
    console.log(modelData)
    const [success, setSuccess] = useState(false);
    let isCvvEntered = false;
    return (
        <>
            <div className='modalCss'>
                <div className='MMTmodal'>
                  {success  &&  <h3 style={{textAlign:"center",marginTop:"10px",}}> <img src={Payment} alt="Success" style={{width:"30px",height:"30px",borderRadius:"20px"}} /> Payment Successfull</h3>}
                        <div><h3 style={{textAlign:"center"}}>Fare Summary </h3></div>
                    <div className='Fare'>
                        <div className='baseFare'>
                            <div ><b>Base Fare </b></div>
                            <div id='numbers'>&#8377;{fakeString==="train" && modelData.price}{fakeString==="hotel" && modelData.price_per_night}{fakeString==="flight" && modelData.price}</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"20px"}}><b>Fee & Surcharges</b></div>
                            <div style={{marginRight:"20px"}}>&#8377;540</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{marginLeft:"5px"}}><b>Total Amount</b></div>
                            <div id='numbers'>&#8377;{fakeString==="train" && parseInt(modelData.price)+parseInt(540)}{fakeString==="flight" && parseInt(modelData.price)+parseInt(540)}{fakeString==="hotel" && parseInt(modelData.price_per_night)+parseInt(540)}</div>
                        </div>
                    </div>
                    <div><h3 style={{textAlign:"center"}}>Payment Method </h3></div>
                    <div className='PaymentInput'>
                        <input type="text" placeholder='Name on Card' required />
                    </div>
                    <div className='PaymentInput'>
                        <input type="number" placeholder='Card Number' max="16"min="16" required/>
                    </div>
                    <div className='PaymentInput'>
                        <input type="date" placeholder='Expiry Date' required />
                    </div>
                    <div className='PaymentInput'>
                        <input  type="number" placeholder='CVV' onSubmit={
                            isCvvEntered=true
                        }
                        
                            max="3" min="3" required/>
                        
                    </div>
                    <div className='btnPay'>
                        <button style={{backgroundColor:"rgb(220,53,69)"}} onClick={cancel}>Cancel</button>

                       {isCvvEntered ?<button onClick={()=>{setSuccess(true)}}>Pay</button>:null}
                    </div>

                </div>
            </div>
        </>

    )

}

export default Modal