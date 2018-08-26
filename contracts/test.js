// Generate order
const order = {
    maker: makerAddress,
    taker: ZeroEx.NULL_ADDRESS,
    feeRecipient: ZeroEx.NULL_ADDRESS,
    makerTokenAddress: ZRX_ADDRESS,
    takerTokenAddress: WETH_ADDRESS,
    exchangeContractAddress: EXCHANGE_ADDRESS,
    salt: ZeroEx.generatePseudoRandomSalt(),
    makerFee: new BigNumber(0),
    takerFee: new BigNumber(0),
    makerTokenAmount: ZeroEx.toBaseUnitAmount(new BigNumber(0.2), DECIMALS), // Base 18 decimals
    takerTokenAmount: ZeroEx.toBaseUnitAmount(new BigNumber(0.3), DECIMALS), // Base 18 decimals
    expirationUnixTimestampSec: new BigNumber(Date.now() + 3600000), // Valid for up to an hour
};