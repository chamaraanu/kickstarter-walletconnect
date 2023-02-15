import {useAccount} from "wagmi"; 

export function AddressBox () {
    const { address, isConnected} = useAccount()
  return (
    <div>
      <div className="spinner-wrapper">
        {isConnected && (address)}
      </div>
    </div>
  )
}
