import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.TESTNET, '0xInsertDAI') // DAI
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.TESTNET, '0xInsertTokenCache') // DGD
    expect(token.decimals).toEqual(9)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.TESTNET, '0xInsertDAI', 18) // DAI
    const pair = await Fetcher.fetchPairData(WETH[ChainId.TESTNET], token)
    expect(pair.liquidityToken.address).toEqual('0xInsertAddress')
  })
})
