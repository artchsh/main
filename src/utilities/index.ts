import { ethers } from 'ethers'

function ObjectsToNull(data: object[]) {
  let newData: any[] = []
  data.forEach((element: any) => {
    let newRepo = {}
    for (const [key, value] of Object.entries(element)) {
      if (
        typeof '' !== typeof value &&
        typeof 123 !== typeof value &&
        typeof true !== typeof value
      ) {
        Object.defineProperty(newRepo, key, {
          value: '',
          writable: true
        })
      } else {
        Object.defineProperty(newRepo, key, {
          value: value,
          writable: true
        })
      }
    }
    newData.push(newRepo)
  })
  return newData
}

class ethProvider {

  provider: ethers.providers.Web3Provider
  signer: ethers.providers.JsonRpcSigner
  address: string

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum, "any")
    this.signer = this.provider.getSigner()
    this.address = ''
  }

  async connect() {
    await this.provider.send("eth_requestAccounts", [])
    const address = await this.signer.getAddress()

    // Always prints the address that I first connected with
    this.address = address
  }

  async getAddress() {
    if (this.address === '') {
      this.connect()
      return this.address
    }
    return this.address
  }

  
}

const eth = new ethProvider()

export { ObjectsToNull, eth }
