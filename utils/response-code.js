

let statusCodeMeassage = {
    200: "Success",
    201: "Created",
    202: "Accepted",
    204: "Processed, no content to display",
    301: "Endpoint moved",
    302: "Request can't be fullfiled",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
    413: "Payload too large",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
}


function MongooseErrorHandler(err,res){
    if(err.hasOwnProperty('errors')){
        let keys = Object.keys(err.errors)
        keys.forEach((key)=>{
            return err.errors[key]={
                field:key,
                message:err.errors[key].message || 'Message Not Available',
                reason:err.errors[key].reason || 'Reason Not Available'
            }
        })
        response(400,err.errors,res)
    }

}

function handleError(status, err, res) {
    response(status, err, res)
}


function response(status,result,res){
    let resp = {
        status:{
            code:status,
            message:statusCodeMeassage[status] || null,
        },
        response:{
            data:result,
            count:result.length
        }
    }
    res.status(status).json(resp).end();
}


export {
    response,
    handleError,
    MongooseErrorHandler
}

