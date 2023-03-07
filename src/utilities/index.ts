import { ethers } from 'ethers'
interface Window {
  ethereum: any
}

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

export type ConnectReturnType = {
  signer: ethers.JsonRpcSigner
  provider: ethers.BrowserProvider
  address: string
  account: any
}
class metamask {
  signer: null | ethers.JsonRpcSigner
  provider: null | ethers.BrowserProvider
  metamask: any
  address: any
  account: any

  constructor() {
    this.signer = null
    this.provider = null
    this.metamask = (window as unknown as Window).ethereum
    this.address = null
    this.account = null
  }

  async connect(): Promise<ConnectReturnType> {
    if (this.metamask != null) {
      this.provider = new ethers.BrowserProvider(this.metamask)
      let accounts = await this.provider.send('eth_requestAccounts', [])
      this.account = accounts[0]
      this.signer = await this.provider.getSigner()
      this.address = await this.signer!.getAddress()

      return {
        signer: this.signer,
        provider: this.provider,
        address: this.address,
        account: this.account
      }
    }
    return {
      signer: {} as ethers.JsonRpcSigner,
      provider: {} as ethers.BrowserProvider,
      address: '',
      account: ''
    }
  }

  get() {
    return {
      signer: this.signer,
      provider: this.provider,
      address: this.address,
      account: this.account
    }
  }

  #checkAuth() {
    if (this.signer && this.provider && this.address) {
      return true
    }
    if (!this.signer || !this.provider || !this.address) {
      return false
    }
  }

  async getAddress() {
    try {
      if (this.#checkAuth()) {
        return this.address
      } else {
        console.warn('You do not have MetaMask installed!')
      }
    } catch {}
  }
}

const ethMetaMask = new metamask()

export { ObjectsToNull, ethMetaMask }
