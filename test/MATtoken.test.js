const MATtoken = artifacts.require('MATtoken');

contract('Testing of MATtoken',(accounts)=>{

    let Mattoken;
    it('deployment of MATtoken',async ()=>{
        Mattoken = await MATtoken.deployed();
        console.log("deployed address of MATtoken is %s",Mattoken.address);
    })

    it("total supply before starting the sale is",async()=>{
        await Mattoken.totalSupply().then(function(results){
            console.log("total supply of tokens are : %s",results);
        })
    })

    it("Buying tokens from contract",async ()=>{
        await Mattoken.createTokens({
            from:accounts[1],
            value : 3000000000000000000,
            gas : 800000
        }).then(function(results){
            console.log(results);
        })
        await Mattoken.createTokens({
            from:accounts[2],
            value : 2000000000000000000,
            gas : 800000
        }).then(function(results){
            console.log(results);
        })

        await Mattoken.createTokens({
            from:accounts[3],
            value : 1000000000000000000,
            gas : 800000
        }).then(function(results){
            console.log(results);
        })

        await Mattoken.totalSupply().then(function(results){
            console.log("total tokens in supply are : %s ",results)
        })

        
    })

    it('Transferring tokens',async()=>{
        await Mattoken.transfer(accounts[4],'1000000000000000000',{
            from:accounts[1],
            gas : 80000
        })

    })

    it('trying to access non- public function',async ()=>{
        await Mattoken.
    })
   
   
})