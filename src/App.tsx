import QRCode from 'qrcode'
import { useState } from 'react'
import qrCode from './assets/qrcode-ronjeanfrancois.png'
import './App.css'

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')
  
  const feats = {width: 400, margin:2, color:{dark:'#024292FF', light:'#FFEEEFFF'}}

	const generateQR = () => {
		QRCode.toDataURL(url, feats,
      (err, url) => {
        
        if (err) return console.error(err)
        setQr(url)
		})
	}
  
  return (
    <>
      <div className='text-center'>
        <a href="https://www.ronjeanfrancois.com/" target="_blank">
          <img src={qrCode} className="mx-auto lg:my-4" alt="Ron Jean-Francois Site" height={100} width={100}/>
        </a>
      <h1 className='text-2xl lg:text-4xl font-bold text-sky-500'>QR Code Generator</h1>
      </div>
      <div className="p-6 lg:p-4 text-center">
        <input type="text" placeholder='e.g. https://www.youtube.com/' value={url} onChange={e => setUrl(e.target.value)} className="lg:m-4 bg-slate-200 p-2 text-black rounded-md"/>
        <button className="rounded-md border border-transparent shadow-sm m-4 lg:m-6 bg-sky-700 text-white px-4 py-2 hover:bg-transparent hover:text-white hover:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2 " onClick={generateQR}>Generate QR</button>
        {qr && <>
        <img src={qr} alt={url} className='my-2 lg:my-4'/>
        <a href={qr} download="qrcode.png" className='text-white focus:text-sky-300 hover:text-sky-300 lg:text-2xl text-xl'>Download QR</a>
        </>}
      </div>
    </>
  )
}

export default App
