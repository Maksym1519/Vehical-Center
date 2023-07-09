import "../style.scss";
import Wf from "./walletModalFinish.module.scss";
import Close from '../images/close.svg';
import Edge from '../images/progressEdge.svg';
import FoxFace from '../images/progressIconFox.svg'

export const WalletModalFinish = ({closeModal}) => {
    return (
        <div className={Wf.wrapper}>
           <div className={Wf.container}>
             <h3 className={Wf.title}>Connecting wallet</h3>
             <div className={Wf.progressDownload}>
              <img src={Edge} alt="edge" className={Wf.progressDownload__edge} />
              <img src={FoxFace} alt="fox" className={Wf.progressDownload__icon} />
             </div>
             <span className={Wf.progressDownload__status}>Initializing</span>
           </div>
           <img src={Close} alt="close" className={Wf.close} onClick={closeModal}/>
        </div>
    )
}