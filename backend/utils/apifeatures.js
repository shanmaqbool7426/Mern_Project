class Apifeatures {
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr

    }
    serch(){
        const keyword=this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options:'i'
            }
        }:{}
        this.query.find(keyword);
        console.log("<<< query",this.query.find({name:"asdf"}))

        return this
    }
}
module.exports=Apifeatures