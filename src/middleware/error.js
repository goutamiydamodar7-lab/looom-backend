
export function errorHandler(err, req, res, next){
    console.log("Error:",err);
    if(err.code=="23505"){
        return res.status(400).json({error:"Duplicate Value"})
    }
    res.status(500).json({error:"Something Went Wrong!"});
}