# Bitcoin

Quickly start a regTest network.

## Tools

electrs
esplora
electrumx
btc-rpc-explorer

## Knowledge

* [Bitcoin RPC](https://developer.bitcoin.org/reference/rpc/)

* electrs JSON RPC
```
            "blockchain.block.header" => Params::BlockHeader(convert(params)?),
            "blockchain.block.headers" => Params::BlockHeaders(convert(params)?),
            "blockchain.estimatefee" => Params::EstimateFee(convert(params)?),
            "blockchain.headers.subscribe" => Params::HeadersSubscribe,
            "blockchain.relayfee" => Params::RelayFee,
            "blockchain.scripthash.get_balance" => Params::ScriptHashGetBalance(convert(params)?),
            "blockchain.scripthash.get_history" => Params::ScriptHashGetHistory(convert(params)?),
            "blockchain.scripthash.listunspent" => Params::ScriptHashListUnspent(convert(params)?),
            "blockchain.scripthash.subscribe" => Params::ScriptHashSubscribe(convert(params)?),
            "blockchain.wallet.get_balance" => Params::WalletGetBalance(convert(params)?),
            "blockchain.wallet.get_history" => Params::WalletGetHistory(convert(params)?),
            "blockchain.wallet.listunspent" => Params::WalletListUnspent(convert(params)?),
            "blockchain.wallet.subscribe" => Params::WalletSubscribe(convert(params)?),
            "blockchain.transaction.broadcast" => Params::TransactionBroadcast(convert(params)?),
            "blockchain.transaction.get" => Params::TransactionGet(convert(params)?),
            "blockchain.transaction.get_merkle" => Params::TransactionGetMerkle(convert(params)?),
            "mempool.get_fee_histogram" => Params::MempoolFeeHistogram,
            "server.banner" => Params::Banner,
            "server.donation_address" => Params::Donation,
            "server.features" => Params::Features,
            "server.peers.subscribe" => Params::PeersSubscribe,
            "server.ping" => Params::Ping,
            "server.version" => Params::Version(convert(params)?),
```

query balance sample:
```
# query balance
echo '{"jsonrpc": "2.0", "method": "blockchain.wallet.get_balance", "params": ["bcrt1qr4tlquxeg78420z94lwq5aukjjgs095fw30yec"], "id": 0}' | netcat 127.0.0.1 50001
```
