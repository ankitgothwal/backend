const asyncHandler = (requestHandler) => {
    return (req,res,next)=> {
    console.log("Connected to database")
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}




export {asyncHandler}


