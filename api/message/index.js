module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res.json({
        purpleSock: `Hello from the Azure Functions API - secret:${process.env.SECRET}` 
    });
}