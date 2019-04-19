

'use strict';
//import order service.
const orderService = require('../services/orderServices');
const emailService = require('../services/emailServices');

//code for post method
exports.create_order = function(req, res) {  
    console.log("order");
    const newOrder = Object.assign({}, req.body);
    console.log(newOrder);
    const resolve = (order) => {
        
        res.status(200);
        res.json(order);
        
      
        
    };
    orderService.save(newOrder)
        .then(resolve).then( emailService.email(newOrder))
        .catch(renderErrorResponse(res));
  };

    // error function
    let renderErrorResponse = (response) => {
        const errorCallback = (error) => {
            if (error) {
                response.status(500);
                response.json({
                    message: error.message
                });
            }
        }
        return errorCallback;
    };

    /**
 * Returns a list of orders in JSON
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list_all_orders = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (orders) => {
        response.status(200);
        response.json(orders);
    };
    orderService.orderList({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


/**
 * Returns a contact object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.user_orders = function (request, response) {
    const resolve = (u_orders) => {
        response.status(200);
        response.json(u_orders);
    };
    orderService.user_orders(request.params.userId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};